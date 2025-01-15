<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getQuestions, createQuestion, updateQuestion, deleteQuestion } from "@/services/questionsService";
import type { Question } from "@/types/question";
import SideBarComponent from "./SideBarComponent.vue";
import HeaderComponent from "./HeaderComponent.vue";
import { useCurrentTetraStore } from "@/stores/StoreT";
import type { User } from "@/types/user";
import { createUser, deleteUser, getUsers, updateUser } from "@/services/usersService";

const state = useCurrentTetraStore();

const questions = ref<Question[]>([]);
const newQuestionText = ref<string>(""); // Texto de la nueva pregunta
const newQuestionPoints = ref<number>(0); // Cantidad de puntos
const errorMessage = ref<string | null>(null);
const editingQuestion = ref<{ id: number; question: string; points: number } | null>(null); // Control de edición

const users = ref<User[]>([]);
const newUserName = ref<string>("");
const newUserEmail = ref<string>("");
const newUserPassword = ref<string>("");
const newUserRole = ref<string>("USER"); // Rol predeterminado
const errorMessageUser = ref<string | null>(null);
const editingUser = ref<{ id: number; name: string; email: string; role: string } | null>(null);
const roles = ['USER', 'ADMIN'];

onMounted(async () => {
  state.changeToSettings();
  try {
    questions.value = await getQuestions();
    questions.value.sort((a, b) => a.id_question - b.id_question); // Ordenar preguntas por ID de menor a mayor
  } catch (error) {
    console.error("Error al cargar las preguntas:", error);
    errorMessage.value = "Error al cargar las preguntas.";
  }

  try {
    users.value = await getUsers();
    users.value.sort((a, b) => a.id - b.id); // Ordenar preguntas por ID de menor a mayor
  } catch (error) {
    console.error("Error al cargar los usuarios:", error);
    errorMessage.value = "Error al cargar los usuarios.";
  }
});

// Función para crear una nueva pregunta
const handleCreateQuestion = async () => {
  if (!newQuestionText.value.trim()) {
    alert("El texto de la pregunta no puede estar vacío.");
    return;
  }

  try {
    const newQuestion = await createQuestion({
      points: newQuestionPoints.value, // Valor de los puntos
      id_dimension: 1, // Ajusta este valor según tus necesidades
      question: newQuestionText.value,
    });

    questions.value.push(newQuestion); // Actualiza la lista local de preguntas
    newQuestionText.value = ""; // Limpia el campo de texto
    newQuestionPoints.value = 10; // Resetea los puntos a su valor predeterminado
  } catch (error) {
    console.error("Error al crear la pregunta:", error);
    errorMessage.value = "Error al crear la pregunta.";
  }
};

// Función para editar una pregunta
const handleEditQuestion = (id: number, question: string, points: number) => {
  // Al pulsar el botón de editar, el campo se vuelve editable
  if (editingQuestion.value?.id === id) {
    // Si ya se está editando esta pregunta, guarda los cambios
    updateQuestion(id, {
      question: editingQuestion.value.question,
      points: editingQuestion.value.points,
      id_dimension: 1,
    })
      .then((updatedQuestion) => {
        const index = questions.value.findIndex(q => q.id_question === id);
        if (index !== -1) {
          questions.value[index] = updatedQuestion; // Actualiza la lista con la pregunta modificada
        }
        editingQuestion.value = null; // Termina la edición
      })
      .catch((error) => {
        console.error("Error al editar la pregunta:", error);
        errorMessage.value = "Error al editar la pregunta.";
      });
  } else {
    // Si no se está editando esta pregunta, la selecciona para editar
    editingQuestion.value = { id, question, points };
  }
};

// Función para eliminar una pregunta
const handleDeleteQuestion = async (id: number) => {
  try {
    await deleteQuestion(id); // Elimina la pregunta desde el servidor
    questions.value = questions.value.filter(q => q.id_question !== id); // Elimina la pregunta de la lista local
  } catch (error) {
    console.error("Error al eliminar la pregunta:", error);
    errorMessage.value = "Error al eliminar la pregunta.";
  }
};

// Función para manejar el evento de 'Enter' en los inputs de edición
const handleKeydown = (event: KeyboardEvent, id: number) => {
  if (event.key === "Enter") {
    handleEditQuestion(id, editingQuestion.value!.question, editingQuestion.value!.points);
  }
};



// Funciones para usuarios
const handleCreateUser = async () => {
  if (!newUserName.value.trim() || !newUserEmail.value.trim() || !newUserPassword.value.trim()) {
    alert("El nombre, el email y la constraseña no pueden estar vacíos.");
    return;
  }

  try {
    const newUser = await createUser({
      name: newUserName.value,
      email: newUserEmail.value,
      password: newUserPassword.value,
      rol: newUserRole.value,
    });
    users.value.push(newUser);
    newUserName.value = "";
    newUserEmail.value = "";
    newUserRole.value = "USER";
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    errorMessageUser.value = "Error al crear el usuario.";
  }
};

const handleEditUser = (id: number, name: string, email: string, role: string) => {
  if (editingUser.value?.id === id) {
    updateUser(id, {
      name: editingUser.value.name,
      email: editingUser.value.email,
      rol: editingUser.value.role,
    })
      .then((updatedUser) => {
        const index = users.value.findIndex(u => u.id === id);
        if (index !== -1) {
          users.value[index] = updatedUser;
        }
        editingUser.value = null;
      })
      .catch((error) => {
        console.error("Error al editar el usuario:", error);
        errorMessageUser.value = "Error al editar el usuario.";
      });
  } else {
    editingUser.value = { id, name, email, role };
  }
};

const handleDeleteUser = async (id: number) => {
  try {
    await deleteUser(id);
    users.value = users.value.filter(u => u.id !== id);
  } catch (error) {
    console.error("Error al eliminar el usuario:", error);
    errorMessageUser.value = "Error al eliminar el usuario.";
  }
};

const handleUserKeydown = (event: KeyboardEvent, id: number) => {
  if (event.key === "Enter") {
    handleEditUser(id, editingUser.value!.name, editingUser.value!.email, editingUser.value!.role);
  }
};
</script>


<template>
  <HeaderComponent />
  <SideBarComponent />

  <div class="main">


    <section class="sectionC">
      <div class="container">
        <h2>Preguntas</h2>
        <table class="table table-bordered">
          <thead>
            <tr class="encab table-primary">
              <th>No.</th>
              <th>Pregunta</th>
              <th>Puntos</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(pregunta) in questions" :key="pregunta.id_question">
              <td>{{ pregunta.id_question }}</td>
              <td>
                <input v-if="editingQuestion?.id === pregunta.id_question" v-model="editingQuestion.question"
                  @keydown="handleKeydown($event, pregunta.id_question)" class="form-control" />
                <span v-else>{{ pregunta.question }}</span>
              </td>
              <td>
                <input v-if="editingQuestion?.id === pregunta.id_question" v-model="editingQuestion.points"
                  type="number" class="form-control" />
                <span v-else>{{ pregunta.points }}</span>
              </td>
              <td>
                <button @click="handleEditQuestion(pregunta.id_question, pregunta.question, pregunta.points)"
                  title="Editar">
                  <img src="/img/BxsEdit.svg" alt="Editar" />
                </button>
                <button @click="handleDeleteQuestion(pregunta.id_question)" title="Eliminar">
                  <img src="/img/MaterialSymbolsLightDelete.svg" alt="Eliminar" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="add-question-form">
          <button class="add-button" @click="handleCreateQuestion" title="Agregar">
            <img src="/img/TypcnPlus.svg" alt="Agregar" />
          </button>
          <input v-model="newQuestionText" type="text" placeholder="Escribe una nueva pregunta" class="form-control" />
          <input v-model="newQuestionPoints" type="number" min="1" placeholder="Puntos"
            class="form-control points-input" />

        </div>
      </div>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </section>


    <!-- Tabla de usuarios -->
    <section class="sectionCU">
      <div class="container">
        <h2>Usuarios</h2>
        <table class="table table-bordered">
          <thead>
            <tr class="encab table-primary">
              <th>No.</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user) in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>
                <input v-if="editingUser?.id === user.id" v-model="editingUser.name"
                  @keydown="handleUserKeydown($event, user.id)" class="form-control" />
                <span v-else>{{ user.name }}</span>
              </td>
              <td>
                <input v-if="editingUser?.id === user.id" v-model="editingUser.email" type="email"
                  class="form-control" />
                <span v-else>{{ user.email }}</span>
              </td>
              <td>
                <select v-if="editingUser?.id === user.id" v-model="editingUser.role" class="form-control">
                  <option value="Usuario">Usuario</option>
                  <option value="Administrador">Administrador</option>
                </select>
                <span v-else>{{ user.rol }}</span>
              </td>
              <td>
                <button @click="handleEditUser(user.id, user.name, user.email, user.rol)" title="Editar">
                  <img src="/img/BxsEdit.svg" alt="Editar" />
                </button>
                <button @click="handleDeleteUser(user.id)" title="Eliminar">
                  <img src="/img/MaterialSymbolsLightDelete.svg" alt="Eliminar" />
                </button>

              </td>
            </tr>
          </tbody>
        </table>
        <div class="add-user-form">
          <button class="add-button" @click="handleCreateUser()" title="Agregar">
            <img src="/img/TypcnPlus.svg" alt="Agregar" />
          </button>
          <input v-model="newUserName" type="text" placeholder="Nombre del usuario" class="form-control" />
          <input v-model="newUserEmail" type="email" placeholder="Correo electrónico" class="form-control" />
          <select v-model="newUserRole" class="form-control">
            <option v-for="role in roles" :key="role" :value="role">
              {{ role }}
            </option>
          </select>
          <input v-model="newUserPassword" type="password" placeholder="Contraseña" class="form-control" />
        </div>
      </div>
      <p v-if="errorMessageUser" class="error">{{ errorMessageUser }}</p>
    </section>
  </div>

  <footer>
    <div class="button">
      <a href="#"><i class="bi bi-chevron-double-up"></i></a>
    </div>
    <div class="contenedor">
      <div class="redes">
        <a class="mail" href="mailto:mafiasupport@gmail.com" target="_blank">
          <i class="bi bi-envelope"></i>
        </a>

        <a href="https://www.etecsa.cu/" target="_blank">
          <img src="/logoheader.png" alt="página oficial de ETECSA" />
        </a>
      </div>
    </div>

    <p>&copy; 2024, TETRADIG. Todos los derechos reservados</p>
  </footer>
</template>



<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-top: 80px;
  margin-bottom: 50px;

}

.sectionC {
  border: 2px solid rgb(116, 116, 117);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 80px;
}

.sectionCU {
  border: 2px solid rgb(116, 116, 117);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 80px;
  margin-bottom: 80px;
}

.add-question-form {
  display: flex;
  align-items: center;
  gap: 10px;
}

.add-question-form input {
  width: 100%;
  padding: 8px;
  font-size: 16px;
}

.add-user-form {
  display: flex;
  align-items: center;
  gap: 10px;
}

.add-user-form input {
  width: 100%;
  padding: 8px;
  font-size: 16px;
}

.add-question-form .points-input {
  width: 80px;
  /* Ajusta el tamaño del input de puntos */
}

.add-button {
  padding: 8px;
  background-color: #007bff;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.add-button img {
  width: 30px;
  height: 30px;
}

.text {
  display: flex;
  align-items: center;
  width: 40%;
  margin-top: 40px;
}

.text p {
  color: black;
  font-size: 20px;
}

.indicadores,
.usuarios {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 800px;
  margin-top: 150px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.usuarios {
  margin-bottom: 300px;
}

@media (max-width: 1430px) {

  .indicadores,
  .usuarios {
    width: 60%;
  }
}

@media (max-width: 768px) {
  .table-wrapper {
    width: 100%;
    overflow-x: auto;
    /* Asegura que la tabla sea desplazable horizontalmente */
    -webkit-overflow-scrolling: touch;
    /* Mejora la experiencia en dispositivos táctiles */
  }

  .table {
    width: 100%;
    table-layout: fixed;
    /* Hace que las celdas de la tabla se ajusten automáticamente */
  }

  .indicadores,
  .usuarios {
    width: 90%;
    padding: 10px;
    margin-top: 100px;
    /* Reduce el margen superior en pantallas pequeñas */
    margin-left: 5px;
  }

  h2 {
    font-size: 24px;
    /* Ajusta el tamaño de fuente para encabezados */
  }

  .table th,
  .table td {
    padding: 8px;
    /* Reduce el padding para tablas en pantallas pequeñas */
  }


  .container {
    width: 100%;
    /* Asegura que el contenedor ocupe el 100% del ancho */
    margin: 10px;
    /* Añade un pequeño margen alrededor del contenedor */
  }

  h2 {
    font-size: 32px;
    /* Reduce el tamaño de los encabezados */
    margin-bottom: 15px;
    /* Ajusta el margen inferior */
  }

  button img {
    width: 25px;
    /* Reduce el tamaño de las imágenes en los botones */
    height: 25px;
  }

  input {
    width: 100%;
    padding: 8px;
    /* Aumenta un poco el padding en inputs */
    font-size: 16px;
    /* Ajusta el tamaño de la fuente en inputs */
  }

  .add-button {
    padding: 8px;
    /* Ajusta el padding del botón */
    background-color: #007bff;
    border-radius: 50%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  .add-button img {
    width: 30px;
    /* Ajusta el tamaño de la imagen dentro del botón */
    height: 30px;
  }
}

.container {
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 50px;
  font-weight: bold;
}

p {
  font-size: 20px;
  color: #666;
}

.table-wrapper {
  width: 100%;
  overflow-x: auto;
  /* Permite que la tabla sea desplazable horizontalmente */
}

.table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  table-layout: fixed;
  word-wrap: break-word; /* Permite que las palabras se ajusten a la línea */
  /* Asegura que la tabla no se desborde y se ajuste */
}

.table th,
.table td {
  padding: 10px;
  border: 1px solid rgb(0, 0, 102);
}

.table-primary {
  background-color: rgb(0, 0, 102);
  color: #212529;
  font-weight: bold;
}

.encab {
  text-align: center;
}

button {
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 5px;
}

button img {
  width: 30px;
  height: 30px;
}

input {
  width: 100%;
  padding: 5px;
  font-size: 14px;
}

.add-button {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #007bff;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.add-button img {
  width: 40px;
  height: 40px;
  filter: invert(1);
}


footer {
  padding: 0 0 0 0;
  width: 100%;
  background-color: rgb(0, 0, 102);
  display: grid;
  justify-content: center;
  align-items: center;
  left: 0;
  bottom: 0;
  z-index: 10;
  /* Asegura que esté encima del footer */
  position: relative;
  /* Ya configurado correctamente */
}

footer .contenedor {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-self: center;
  margin-bottom: 40px;
  justify-content: center;
  align-items: center;
}

footer .button {
  font-size: 30px;
  justify-self: center;
  margin-top: -20px;
  width: 13%;
  background-color: #39c;
  border-radius: 50%;
  display: flex;
  justify-content: center;
}

footer .button i {
  color: antiquewhite;
}

footer .contenedor .redes {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer .contenedor .redes img {
  width: 100%;
}

footer .contenedor .redes i {
  color: antiquewhite;
  font-size: 30px;
}

footer .contenedor .redes {
  a {
    margin-left: 7%;
  }

  .mail {
    margin-left: 20%;
  }
}

footer p {
  color: antiquewhite;
}
</style>

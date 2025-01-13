<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getQuestions } from "@/services/questionsService";
import type { Question } from "@/types/question";

// Almacén de preguntas
const preguntas = ref<Question[]>([]);

// Cargar preguntas desde la API al montar el componente
const cargarPreguntas = async () => {
  try {
    preguntas.value = await getQuestions();
  } catch (error) {
    console.error("Error al cargar las preguntas:", error);
  }
};

// Ejecutar al montar el componente
onMounted(cargarPreguntas);
</script>

<template>
  <div class="main">
    <section class="preguntas">
      <div class="container">
        <h2>Preguntas</h2>
        <table class="table table-bordered">
          <thead>
            <tr class="encab table-primary">
              <th>No.</th>
              <th>Pregunta</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(pregunta, index) in preguntas" :key="pregunta.id_question">
              <td>{{ index + 1 }}</td>
              <td>{{ pregunta.question }}</td>
              <td>
                <button title="Editar">
                  <img src="/img/BxsEdit.svg" alt="Editar" />
                </button>
                <button title="Eliminar">
                  <img src="/img/MaterialSymbolsLightDelete.svg" alt="Eliminar" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <button class="add-button" title="Agregar">
          <img src="/img/TypcnPlus.svg" alt="Agregar" />
        </button>
      </div>
    </section>
  </div>
</template>


<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-top: 80px;
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

/* Footer  */
footer {
  padding: 40px 0 20px 0;
  width: 100%;
  background-color: rgb(0, 0, 102);
  display: grid;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  z-index: 110;
}

footer .contenedor {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-self: center;
  margin-bottom: 30px;
  margin-left: 30px;
  justify-content: center;
  align-items: center;
}

footer .button {
  font-size: 30px;
  justify-self: center;
  margin-top: -85px;
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

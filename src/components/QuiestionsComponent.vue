<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import HeaderComponent from './HeaderComponent.vue';
import SideBarComponent from './SideBarComponent.vue';
import { getAmbits } from '@/services/ambitsService';
import type { Ambit } from '@/types/ambit';
import type { Perspective } from '@/types/perspective';
import type { Dimension } from '@/types/dimension';
import { getPerspectiveByIdAmbit } from '@/services/perspectivesService';
import { getDimensionByIdPerspective } from '@/services/dimensionsService';
import { getQuestionByIdDimension, updateQuestion } from '@/services/questionsService';
import type { Question } from '@/types/question';
import { useCurrentTetraStore } from '@/stores/StoreT';
import router from '@/router';
import { createUserTest } from '@/services/userTestsService';
import SweetAlert from 'sweetalert2';


const state = useCurrentTetraStore();

// Estados reactivos
const ambits = ref<Ambit[]>([]);
const currentAmbitIndex = ref(0);
const perspectives = ref<Perspective[]>([]);
const currentPerspectiveIndex = ref(0);
const dimensions = ref<Dimension[]>([]);
const currentDimensionIndex = ref(0);
const questions = ref<Question[]>([]);

// Cargar ámbitos, perspectivas y dimensiones
const loadData = async () => {
  try {
    ambits.value = await getAmbits();
    if (ambits.value.length > 0) {
      ambits.value.sort((a,b) => a.id_ambit - b.id_ambit)
      await loadPerspectives(ambits.value[currentAmbitIndex.value].id_ambit);
    }
  } catch (error) {
    console.error('Error al cargar los ámbitos:', error);
  }
};

const loadPerspectives = async (ambitId: number) => {
  try {
    perspectives.value = await getPerspectiveByIdAmbit(ambitId);
    if (perspectives.value.length > 0) {
      perspectives.value.sort((a,b) => a.id_perspective - b.id_perspective)
      await loadDimensions(perspectives.value[currentPerspectiveIndex.value].id_perspective);
    }
  } catch (error) {
    console.error('Error al cargar las perspectivas:', error);
  }
};

const loadDimensions = async (perspectiveId: number) => {
  try {
    dimensions.value = await getDimensionByIdPerspective(perspectiveId);
    if (dimensions.value.length > 0) {
      dimensions.value.sort((a,b) => a.id_dimension - b.id_dimension)
      await loadQuestions(dimensions.value[currentDimensionIndex.value].id_dimension);
    }
  } catch (error) {
    console.error('Error al cargar las dimensiones:', error);
  }
};

const loadQuestions = async (dimensionId: number) => {
  try {
    questions.value = await getQuestionByIdDimension(dimensionId);
    questions.value.sort((a,b) => a.id_question - b.id_question)

    for(const question of questions.value){
      question.points = 0;
    }
  } catch (error) {
    console.error('Error al cargar las preguntas:', error);
  }
};

// Cambiar de dimensión y guardar datos
const goToNextDimension = async () => {
  try {
    // Actualizar las preguntas antes de pasar a la siguiente dimensión

    for (const question of questions.value) {
      const { id_question, id_dimension, question: questionText, points } = question;
      await updateQuestion(id_question, { id_dimension, question: questionText, points });
    }
    questions.value = []; // Limpiar los valores actualizados

    // Cambiar a la siguiente dimensión
    if (currentDimensionIndex.value < dimensions.value.length - 1) {
      currentDimensionIndex.value++;
      await loadQuestions(dimensions.value[currentDimensionIndex.value].id_dimension);
    } else if (currentPerspectiveIndex.value < perspectives.value.length - 1) {
      currentPerspectiveIndex.value++;
      currentDimensionIndex.value = 0;
      await loadDimensions(perspectives.value[currentPerspectiveIndex.value].id_perspective);
    } else if (currentAmbitIndex.value < ambits.value.length - 1) {
      currentAmbitIndex.value++;
      currentPerspectiveIndex.value = 0;
      currentDimensionIndex.value = 0;
      await loadPerspectives(ambits.value[currentAmbitIndex.value].id_ambit);
    } else {
      SweetAlert.fire({
        icon: 'success',
        title: '¡Felicidades!',
        text: 'Has completado todas las preguntas.',
        background: '#e3f2fd',
        confirmButtonColor: '#007bff',
        confirmButtonText: 'Aceptar',
      }).then(async () => {
        const response = await createUserTest({ id_user: state.idUser, ambits_result: ' ', perspectives_result: ' ', dimensions_result: ' ' });
        state.changeCurrentReport(response.id);
        router.push('/reports');
      });

    }
  } catch (error) {
    console.error('Error al actualizar o cambiar dimensión:', error);
  }
};

onMounted( async () => {
  await nextTick();
  loadData();
  state.changeToQuestions();
} );
</script>

<template>
  <HeaderComponent />
  <SideBarComponent />

  <div class="container">
    <div class="texto">
      <h2 class="consultoria">Tabla de Consultoría</h2>
      <p class="ambit-title">Ámbito: {{ ambits[currentAmbitIndex]?.ambit }}</p>
      <p class="perspective-title">Perspectiva: {{ perspectives[currentPerspectiveIndex]?.perspective_name }}</p>
      <p class="dimension-title">Dimensión: {{ dimensions[currentDimensionIndex]?.name_dimension }}</p>
    </div>

    <table class="table table-bordered">
      <thead>
        <tr class="encab table-primary">
          <th>No.</th>
          <th>Pregunta</th>
          <th>Puntos</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(question, index) in questions" :key="question.id_question">
          <td>{{ index + 1 }}</td>
          <td>{{ question.question }}</td>
          <td>
            <select v-model="question.points" class="form-select" aria-label="Seleccionar valor">
              <option value="" disabled>Seleccione</option>
              <option v-for="i in 5" :key="i" :value="i - 1">{{ i - 1 }}</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="text-end">
      <button @click="goToNextDimension" class="btn btn-primary">Siguiente</button>
    </div>
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

    <div class="Ftext">
      <div class="Fcontainer">
        <p>&copy; 2025, TETRADIG. Todos los derechos reservados</p>
      </div>
    </div>

  </footer>
</template>


<style scoped>
/* General container styles */
.container {
  margin-top: 100px;
  margin-bottom: 100px;
  max-width: 60%;
  min-height: 65vh;
}

/* Title for consultoria */
.consultoria {
  text-align: center;
  font-size: 47px;
  margin-top: 70px;
  color: #003366;
  font-weight: bold;
}


/* Title styles for perspective and dimension */
.ambit-title,
.perspective-title,
.dimension-title {
  text-align: center;
  font-size: 24px;
  margin-top: 20px;
  font-weight: bold;
  color: #003366;
  text-transform: uppercase;
}

.perspective-title {
  font-size: 26px;
  color: #0066cc;
}

.dimension-title {
  font-size: 28px;
  color: #0b84fc;
}

/* Styling for the table */
.table {
  width: 80%;
  padding: 10px;
  margin: 40px auto;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid rgb(237, 237, 248);
  background-color: #f8f9fa;
  border-collapse: collapse;
}

.encab {
  background-color: #003366;
  color: white;
}

th,
td {
  max-width: 400px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  padding: 12px;
}

form-select {
  text-align: center;
}

/* Adjustments for small screens */
@media screen and (max-width: 650px) {
  .container {
    margin-bottom: 150px;
  }

  .table {
    margin: 40px auto;
    width: 100%;
  }

  .ambit-title,
  .perspective-title,
  .dimension-title {
    font-size: 20px;
  }

  .consultoria {
    font-size: 35px;
  }
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
  position: relative;
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

footer .Ftext {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

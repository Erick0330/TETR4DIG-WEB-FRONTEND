<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import * as echarts from 'echarts';
import type { ResultItem, UserTest } from '@/types/userTest';
import { getUserTestById } from '@/services/userTestsService';
import HeaderComponent from './HeaderComponent.vue';
import SideBarComponent from './SideBarComponent.vue';
import jsPDF from 'jspdf';
import { useCurrentTetraStore } from '@/stores/StoreT';

const state = useCurrentTetraStore();

// Referencias a los divs donde se generarán las gráficas
const ambitChartRefs = ref<HTMLDivElement[]>([]);
const perspectivesChartRefs = ref<HTMLDivElement[]>([]);

// Datos de ejemplo con la estructura indicada
const ambit = ref<ResultItem[]>([]);
const perspectives = ref<ResultItem[]>([]);
const testData = ref<UserTest | null>(null);

const parseResults = (data: string): ResultItem[] => {
  return data.split('\n').map(item => {
    const [name, value, percentage] = item.split('_');
    return {
      name,
      value: parseFloat(value),
      percentage: parseFloat(percentage)
    };
  });
};

const getValues = async (id_u: number, id: number) => {
  const response = await getUserTestById(id_u, id);
  testData.value = response;
  if (testData.value) {
    ambit.value = parseResults(testData.value.ambits_result);
    perspectives.value = parseResults(testData.value.perspectives_result); // Añadir perspectivas
  }
};

// Función para generar las gráficas circulares
const generateCharts = () => {
  // Generar gráficos para los ambitos
  ambitChartRefs.value.forEach((chartRef, index) => {
    if (chartRef) {
      const chartInstance = echarts.init(chartRef);
      const dataToDisplay = ambit.value[index];

      const option = {
        backgroundColor: '#ffffff',
        title: {
          text: dataToDisplay.name,
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c}%',
        },
        series: [
          {
            type: 'pie',
            radius: ['40%', '70%'],
            label: {
              show: true,
              formatter: '{c}%',
            },
            data: [
              { value: dataToDisplay.percentage, name: 'Porcentaje' },
              { value: 100 - dataToDisplay.percentage, name: 'Restante' },
            ],
          },
        ],
        color: ['#4cbeed', '#dcdcdc'],
      };

      chartInstance.setOption(option);
    }
  });

  // Generar gráficos para las perspectivas
  perspectivesChartRefs.value.forEach((chartRef, index) => {
    if (chartRef) {
      const chartInstance = echarts.init(chartRef);
      const dataToDisplay = perspectives.value[index];

      const option = {
        backgroundColor: '#ffffff',
        title: {
          text: dataToDisplay.name,
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c}%',
        },
        series: [
          {
            type: 'pie',
            radius: ['30%', '60%'], // Tamaño más pequeño para perspectivas
            label: {
              show: true,
              formatter: '{c}%',
            },
            data: [
              { value: dataToDisplay.percentage, name: 'Porcentaje' },
              { value: 100 - dataToDisplay.percentage, name: 'Restante' },
            ],
          },
        ],
        color: ['#4cbeed', '#dcdcdc'],
      };

      chartInstance.setOption(option);
    }
  });
};

const exportToPDF = () => {
  const doc = new jsPDF();
  const element = document.getElementById('max-container');
  if (element) {

    doc.html(element, {
      callback: function (pdf) {
        pdf.save("prueba.pdf")
      },
      x: -80,
      y: -15,
      html2canvas: { scale: 0.17 }
    })
  } else {
    console.error("Elemento con ID 'contentPane' no encontrado.");
  }
};

// Generar las gráficas al montar el componente
onMounted(async () => {
  state.changeToReports();
  console.log(state.currentReportId);
  await getValues(state.idUser, state.currentReportId);
  await nextTick();
  generateCharts();

});
</script>


<template>
  <HeaderComponent />
  <SideBarComponent />
  <div id="max-container">
    <div class="report-container">
      <h2 class="report-title">Resultados: Madurez Digital por ámbitos (MDA)</h2>
      <div class="chart-wrapper">
        <div v-for="(item, index) in ambit" :key="index" class="chart-item">
          <div ref="ambitChartRefs" class="chart-div"></div>
        </div>
      </div>
    </div>

    <!-- Gráficas de perspectivas -->
    <div class="report-container">
      <h2 class="report-title">Resultados: Madurez Digital por perspectivas (MDA)</h2>
      <div class="chart-wrapper">
        <div v-for="(item, index) in perspectives" :key="index" class="chart-item">
          <div ref="perspectivesChartRefs" class="chart-div"></div>
        </div>
      </div>
    </div>

    <!-- Tabla de Perspectivas -->
    <div class="table-container">
      <h3 class="table-title">Perspectivas</h3>
      <table class="perspective-table table table-bordered">
        <thead>
          <tr  class="table-primary">
            <th>Perspectiva</th>
            <th>Valor</th>
            <th>Porcentaje</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(perspective, index) in perspectives" :key="index">
            <td>{{ perspective.name }}</td>
            <td>{{ perspective.value }}</td>
            <td>{{ perspective.percentage }}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- Botón para descargar PDF -->
  <div id="submit-button-cvr">
    <button id="submit-button" @click="exportToPDF">Descargar PDF</button>
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

#max-container{
  min-height: 65vh;
}
.report-container {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 55%;
  justify-self: center;
  margin-left: 70px;
  margin-bottom: 100px;

}

.report-title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.chart-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.chart-item {
  padding: 15px;
  max-width: 100%;  /* Asegurando que no se desborden en pantallas pequeñas */
}

.chart-div {
  width: 400px;
  height: 300px;
}

.table-container {
  margin-top: 40px;
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  margin-left: 70px;
  margin-bottom: 80px;
}

#submit-button-cvr {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-left: 70px;
  margin-bottom: 100px;
}

#submit-button {
  background-color: #4cbeed;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
}

#submit-button:hover {
  background-color: #3498db;
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

@media (max-width: 1200px) {
  .chart-div {
    width: 100%;
    height: 250px;
  }

  .report-container {
    width: 40%;
  }

  .table-container{
    width: 40%;
  }
}

@media (max-width: 930px) {

  .report-container {
    width: 90%;
    margin-left: 0;
  }

  .table-container{
    width: 90%;
    margin-left: 0;
  }

  #submit-button-cvr{
    margin-left: 0;
  }
}
</style>

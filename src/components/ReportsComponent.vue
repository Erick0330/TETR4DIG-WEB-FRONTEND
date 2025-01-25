<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import * as echarts from 'echarts';
import HeaderComponent from './HeaderComponent.vue';
import SideBarComponent from './SideBarComponent.vue';
import { useCurrentTetraStore } from '@/stores/StoreT';
import jsPDF from 'jspdf';
import { getUserTestById } from '@/services/userTestsService';
import type { UserTest } from '@/types/userTest';

const state = useCurrentTetraStore();

const exportToPDF = () => {
    const doc = new jsPDF();
    const element = document.getElementById('contentPane');
    if (element) {
        doc.html(element, {
            callback: function (pdf) {
                pdf.save("prueba.pdf")
            },
            x: -68,
            y: -37,
            html2canvas: { scale: 0.17 }
        })
    } else {
        console.error("Elemento con ID 'contentPane' no encontrado.");
    }
};

const chart1 = ref<HTMLDivElement | null>(null);
const chart3 = ref<HTMLDivElement | null>(null);
const chartInstances: echarts.ECharts[] = [];
const testData = ref<UserTest | null>(null);

const parseResults = (data: string) => {
    return data.split('\n').map(item => {
        const [name, value, percentage] = item.split('_');
        return {
            name,
            value: parseFloat(value),
            percentage: parseFloat(percentage)
        };
    });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getChartOptions = (title: string, data: any[]): echarts.EChartsOption => ({
    backgroundColor: '#fff',
    title: {
        text: title,
        left: 'center'
    },
    tooltip: { trigger: 'item' },
    series: [{
        type: 'pie',
        radius: ['40%', '70%'],
        label: { show: true, formatter: '{b}: {c}' },
        data: data.map(item => ({ value: item.value, name: item.name }))
    }],
    color: ['#4cbeed', '#dcdcdc']
});

const initCharts = async (id_u: number, id: number) => {
    try {
        const response = await getUserTestById(id_u, id);
        testData.value = response;
        if (testData.value) {
            const ambits = parseResults(testData.value.ambits_result);
            if (chart1.value) {
                const chartInstance = echarts.init(chart1.value);
                chartInstance.setOption(getChartOptions('Resultados por Ámbitos', ambits));
                chartInstances.push(chartInstance);
            }
            const perspectives = parseResults(testData.value.perspectives_result);
            if (chart3.value) {
                const chartInstance = echarts.init(chart3.value);
                chartInstance.setOption(getChartOptions('Resultados por Perspectivas', perspectives));
                chartInstances.push(chartInstance);
            }
        }
    } catch (error) {
        console.error('Error fetching test data:', error);
    }
};

onMounted(async () => {
    state.changeToReports();
    await initCharts(2, 20);
    window.addEventListener('resize', () => {
        chartInstances.forEach(chart => chart.resize());
    });
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', () => {
        chartInstances.forEach(chart => chart.resize());
    });
    chartInstances.forEach(chart => chart.dispose());
});
</script>

<template>
    <HeaderComponent />
    <SideBarComponent />
    <section id="contentPane" class="contentPane">
        <div class="chart-div">
            <h2>Resultados: Madurez Digital por ámbitos (MDA)</h2>
            <div class="chartContainer">
                <div ref="chart1" class="chart1"></div>
            </div>
        </div>

        <div class="chart-divPerspective">
            <h2>Resultados: Madurez Digital por perspectivas (MDA)</h2>
            <div class="chartContainer">
                <!-- <div id="chart3" class="donutChartMDP"></div> -->
                <div ref="chart3" class="chart3"></div>
            </div>
        </div>

        <div class="chart-divDimension">
            <table class="table table-bordered">
                <thead>
                    <tr class="encab table-primary">
                        <th>Perspectivas</th>
                        <th>Madurez Digital (MDr) media real de autoevaluación</th>
                        <th>Índice de Madurez Digital (IMD)%</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Liderazgo Digital</td><td>1.0</td><td>25.0</td></tr>
                    <tr><td>Cultura y clima Digital</td><td>0.0</td><td>50.0</td></tr>
                    <tr><td>Alineamiento estratégico e integración digital</td><td>1.0</td><td>0.0</td></tr>
                    <tr><td>Trabajo inteligente (Smart working)</td><td>1.0</td><td>25.0</td></tr>
                    <tr><td>Sistema y aplicaciones de TI</td><td>2.0</td><td>50.0</td></tr>
                    <tr><td>Migración a la nube/Cloud Computing</td><td>0.2</td><td>0.0</td></tr>
                    <tr><td>Big Data, Data Analytics, AI/ML y GPS</td><td>0.4</td><td>50.0</td></tr>
                    <tr><td>Hibridación mundo físico y digital</td><td>0.6</td><td>25.0</td></tr>
                </tbody>
            </table>
        </div>

        <div id="submit-button-cvr">
            <button id="submit-button" @click="exportToPDF">Descargar PDF</button>
        </div>
    </section>
</template>




<style scoped>
.contentPane {
  margin: 100px 50px;
  margin-bottom: 300px;
  padding: 5vh 1vw 0 250px;

  width: 95%;
  height: auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
}

#submit-button-cvr {
  margin-top: 20px;
}

#submit-button {
  display: block;
  width: 100%;
  color: white;
  background-color: blue;
  font-weight: 600;
  font-size: 14px;
  margin: 0;
  padding: 14px 13px 12px 13px;
  border: 0;
  /* outline: 1px solid #00ff7f; */
  border-radius: 8px;
  line-height: 1;
  cursor: pointer;
  transition: all ease-in-out 0.3s;
}

#submit-button:hover {
  /* background-color: #00ff7f; */
  /* color: #161616; */
  transform: scale(1.05);
  background-color: rgb(28, 28, 247);
  cursor: pointer;
}

.chart-div h2 {
  margin-bottom: 1rem;
}

.chart-div {
  margin-top: 50px;
  position: relative;
  width: 80%;
  height: auto;
  background-color: rgb(255, 255, 255);
  border: 1px solid #070707;
  border-radius: 5px;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.8));
  text-align: center;
}

.chart-divDimension {
  flex-wrap: wrap;
  margin-top: 50px;
  position: relative;
  width: 80%;
  height: auto;
  background-color: rgb(255, 255, 255);
  border: 1px solid #070707;
  border-radius: 5px;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.8));
  text-align: center;
}

.chart-divPerspective {
  flex-wrap: wrap;
  margin-top: 50px;
  position: relative;
  width: 80%;
  height: auto;
  background-color: rgb(255, 255, 255);
  border: 1px solid #070707;
  border-radius: 5px;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.8));
  text-align: center;
}

.donutChartMDP {
  width: 30%;
  /* Ancho predeterminado para pantallas grandes */
  height: 350px;
}

.chartContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: white;
}

.chart1,
.chart2,
.chart3,
.donutChartMPD {
  padding: 10px;
  width: 45%;
  min-height: 350px;
}

/* Responsividad */
@media (max-width: 990px) {
  .chartContainer {
    flex-direction: column;
    width: 100%;
    padding-right: 5px;
  }

  .chart1,
  .chart2,
  .chart3 {
    width: 100%;
    margin-bottom: 1rem;
    flex: 1 1 100%;
  }

  .donutChartMDP {
    width: 100%;
    /* Ancho del 100% cuando el dispositivo tenga 990px o menos */
    margin-bottom: 20px;
    /* Espacio entre gráficas */
  }

  .contentPane {
    margin-top: 100px;
    padding: 0;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 300px;
  }

  .chart-div {
    position: relative;
    margin-top: 10px;
    padding-top: 5px;
    height: auto;
  }

  .chart-divPerspective {
    margin-top: 50px;
    position: relative;
    width: 80%;
    height: 200%;
    background-color: rgb(255, 255, 255);
    border: 1px solid #070707;
    border-radius: 5px;
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.8));
    text-align: center;
  }
}

/* Footer  */

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

footer .Ftext {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

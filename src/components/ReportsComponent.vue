<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import * as echarts from 'echarts';

// Referencias para los elementos HTML de los gráficos
const chart1 = ref<HTMLDivElement | null>(null);
const chart2 = ref<HTMLDivElement | null>(null);

const chart3 = ref<HTMLDivElement | null> (null);

// Instancias de los gráficos
let chart1Instance: echarts.ECharts | null = null;
let chart2Instance: echarts.ECharts | null = null;
let chart3Instance: echarts.ECharts | null = null;

// Configuración para el gráfico 1
const getOptionChart1 = (): echarts.EChartsOption => ({
  title: {
    text: 'Índice Madurez Digital Global (MDG)',
    left: 'center',
  },
  tooltip: {
    show: false,
    trigger: 'item',
  },
  legend: {
    show: false,
    bottom: '5%',
    left: 'center',
  },
  series: [
    {
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 100, name: '100' },
        { value: 102, name: '' },
      ],
    },
  ],
});

// Configuración para el gráfico 2
const getOptionChart2 = (): echarts.EChartsOption => ({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  grid: {
    left: '0%',
    right: '0%',
    bottom: '10%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'value',
    },
  ],
  yAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTick: {
        alignWithLabel: true,
      },
    },
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      barWidth: '70%',
      data: [10, 52, 200, 334, 390, 330, 220],
    },
  ],
});


// Configuración para el gráfico 3
const getOptionChart3 = (): echarts.EChartsOption => ({
  title: {
    text: 'Basic Radar Chart'
  },
  legend: {
    padding: [40, 15, 10, 15], // Márgenes: [arriba, derecha, abajo, izquierda]
    data: ['Allocated Budget', 'Actual Spending']
  },
  radar: {
    // shape: 'circle',
    center: ['50%', '70%'],
    radius: '60%', // Cambia el tamaño del gráfico de radar
    indicator: [
      { name: 'Sales', max: 6500 },
      { name: 'Administration', max: 16000 },
      { name: 'Information Technology', max: 30000 },
      { name: 'Customer Support', max: 38000 },
      { name: 'Development', max: 52000 },
      { name: 'Marketing', max: 25000 }
    ]
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: 'Allocated Budget'
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: 'Actual Spending'
        }
      ]
    }
  ]
});

// Inicialización de los gráficos
const initCharts = () => {
  if (chart1.value) {
    chart1Instance = echarts.init(chart1.value);
    chart1Instance.setOption(getOptionChart1());
  }
  if (chart2.value) {
    chart2Instance = echarts.init(chart2.value);
    chart2Instance.setOption(getOptionChart2());
  }
  if (chart3.value) {
    chart3Instance = echarts.init(chart3.value);
    chart3Instance.setOption(getOptionChart3());
  }
};

// Ajustar tamaño de los gráficos al redimensionar la ventana
const resizeCharts = () => {
  chart1Instance?.resize();
  chart2Instance?.resize();
  chart3Instance?.resize();
};

// Montar y desmontar el componente
onMounted(() => {
  initCharts();
  window.addEventListener('resize', resizeCharts);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeCharts);
  chart1Instance?.dispose();
  chart2Instance?.dispose();
  chart2Instance?.dispose();
});
</script>



<template>
  <section class="contentPane">
    <div class="chart-div">
      <h2>Resultados: Madurez Digital Global (MDG)</h2>
      <div class="chartContainer">
        <div ref="chart1" class="chart1"></div>
        <div ref="chart2" class="chart2"></div>
      </div>
    </div>


    <div class="chart-div">
      <div ref="chart3" class="chart3"></div>
    </div>
  </section>

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
.contentPane {
  margin: 100px 50px;
  margin-bottom: 300px;
  padding: 5vh 1vw 0 250px;
  position: relative;
  width: 95%;
  height: 50%;

  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
}

.chart-div h2 {
  margin-bottom: 1rem;
}

.chart-div {
  margin-top: 50px;
  position: relative;
  width: 80%;
  height: 450px;
  background-color: rgb(255, 255, 255);
  border: 1px solid #070707;
  border-radius: 5px;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.8));
  text-align: center;

}

.chartContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.chart1, .chart2, .chart3 {
  padding: 10px;
  width: 45%;
  min-height: 350px;
}

/* Responsividad */
@media (max-width: 990px) {
  .chartContainer {
    flex-direction: column;
  }

  .chart1, .chart2, .chart3 {
    width: 100%;
    margin-bottom: 1rem;
    flex: 1 1 100%;
  }

  .contentPane {
    margin-top: 100px;
    margin-left: 25px;
    padding-left: 10px;
    margin-bottom: 300px;
    height: 200vh;
  }
  .chart-div {
    position: relative;
    margin-top: 10px;
    margin-left: 25px;
    padding-top: 5px;
    height: 150vh;
  }
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
    ;
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

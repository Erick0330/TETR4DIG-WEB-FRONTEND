<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import * as echarts from 'echarts';

// Referencias para los elementos HTML de los gráficos
const chart1 = ref<HTMLDivElement | null>(null);
const chart2 = ref<HTMLDivElement | null>(null);

// Instancias de los gráficos
let chart1Instance: echarts.ECharts | null = null;
let chart2Instance: echarts.ECharts | null = null;

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
      barWidth: '60%',
      data: [10, 52, 200, 334, 390, 330, 220],
    },
  ],
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
};

// Ajustar tamaño de los gráficos al redimensionar la ventana
const resizeCharts = () => {
  chart1Instance?.resize();
  chart2Instance?.resize();
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
  </section>
</template>



<style scoped>
.contentPane {
  margin: 4.5vh;
  padding: 5vh 1vw 0 250px;
  position: absolute;
  width: 95%;
  height: 50%;
}

.chart-div h2 {
  margin-bottom: 1rem;
}

.chart-div {
  position: absolute;
  width: 80%;
  height: 110%;
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

.chart1,
.chart2 {
  padding: 10px;
  width: 45%;
  min-height: 350px;
}

/* Responsividad */
@media (max-width: 990px) {
  .chartContainer {
    flex-direction: column;
  }

  .chart1,
  .chart2 {
    width: 100%;
    margin-bottom: 1rem;
    flex: 1 1 100%;
  }

  .chart-div,
  .contentPane {
    padding-left: 10px;
    height: 100vh;
  }
}
</style>

<template>
  <div v-for="(item, index) in ambit" :key="index" class="chart-div" ref="chartRefs"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import * as echarts from 'echarts';
import type { ResultItem, UserTest } from '@/types/userTest';
import { getUserTestById } from '@/services/userTestsService';

// Referencias a los divs donde se generarán las gráficas
const chartRefs = ref<HTMLDivElement[]>([]);

const testData = ref<UserTest | null>(null);


// Datos de ejemplo con la estructura indicada
const ambit = ref<ResultItem[]>([]);

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


const getValues = async () => {
  const response = await getUserTestById(2, 20);
  testData.value = response;
    if (testData.value) {
      ambit.value = parseResults(testData.value.ambits_result);
    }
}
// Función para generar las gráficas circulares
const generateCharts = () => {
  chartRefs.value.forEach((chartRef, index) => {
    if (chartRef) {
      const chartInstance = echarts.init(chartRef);

      const option = {
        title: {
          text: ambit.value[index].name,
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
              { value: ambit.value[index].percentage, name: 'Porcentaje' },
              { value: 100 - ambit.value[index].percentage, name: 'Restante' },
            ],
          },
        ],
        color: ['#4cbeed', '#dcdcdc'],
      };

      chartInstance.setOption(option);
    }
  });
};

// Generar las gráficas al montar el componente
onMounted(async () => {
  await getValues();
  await nextTick(); // Asegura que el DOM se ha renderizado completamente antes de inicializar los gráficos
  generateCharts();
});
</script>

<style scoped>
.chart-div {
  width: 100%;
  max-width: 400px;
  height: 300px;
  margin: 20px auto;
}
</style>

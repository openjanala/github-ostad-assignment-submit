<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUnmount } from 'vue';

let pieChart = null

// chart data
const data = {
  labels: ['Red', 'Green', 'Blue'],
  datasets: [
    {
      data: [30, 40, 30],
      backgroundColor: ['red', 'green', 'blue'],
      hoverOffset: 4
    }
  ]
};

// Pie chart configuration
const pieConfig = {
  type: 'pie',
  data: data,
  options: {
    responsive: true
  }
};

onMounted(() => {
  // Get a reference to the canvas element
  const pieCtx = document.getElementById('myPieChart').getContext('2d');

  // Create the pie chart
  pieChart = new Chart(pieCtx, pieConfig);
})


//Before Unmounted all data cleanup done
onBeforeUnmount(() => {
  if (pieChart) {
    pieChart.destroy();
    pieChart = null;
  }
});

const colorName = ref('')
const colorParcent = ref('')

function updateChart() {
  data.labels.push(colorName.value)
  data.datasets[0].data.push(colorParcent.value)
  data.datasets[0].backgroundColor.push(colorName.value.toLocaleLowerCase())

  pieChart.update()
}
</script>
<template>
  <div>
    <h2 class="mb-5 mt-2d text-slate-400 hover:text-sky-400 text-2xl">Draw Chart  (Part-2)</h2>
  </div>

  <div class="w-2/3 mb-5">
    <h1 class="text-2xl text-gray-900 text-center">Pie Chart</h1>
    <canvas id="myPieChart"></canvas>
  </div>

  <form>
    <div class="grid gap-6 mb-6 md:grid-cols-3">
      <div>
        <input
          v-model="colorName"
          type="text"
          id="color-name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          placeholder="Color Name"
        />
      </div>
      <div>
        <input
          v-model="colorParcent"
          type="number"
          id="color-parcent"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          placeholder="Parcent"
        />
      </div>
      <div>
        <button
          @click.prevent="updateChart()"
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Draw Chart
        </button>
      </div>
    </div>
  </form>

</template>

<style scoped></style>

<script setup>
import { ref, reactive, nextTick, onBeforeUnmount, onMounted } from 'vue'

const data = ref([
  {
    id: 1,
    title: 'Natural Green Seen for ID 1 Image Title.',
    url: 'img/1.jpg'
  },
  {
    id: 2,
    title: 'Sun Set Seen for ID 2 Image Title.',
    url: 'img/2.jpg'
  },
  {
    id: 3,
    title: 'Natural Green Seen for ID 3 Image Title.',
    url: 'img/3.jpg'
  },
  {
    id: 4,
    title: 'Yellow Flower for ID 4 Image Title.',
    url: 'img/4.jpg'
  }
])

let carousel = null

onMounted(() => {
  carousel = new Flickity('#carousel', {})
})

// Before Unmounted all data cleanup done
onBeforeUnmount(() => {
  if (carousel) {
    carousel.destroy()
    carousel = null
  }
})

// For New Item Add
let newItem = reactive({
  title: '',
  url: ''
})

// Function for New Item Add
const addItem = () => {
  data.value.push(newItem)
  carousel.destroy()

  // Carousel Re-call When onMounted is Ready
  nextTick(() => {
    carousel = new Flickity('#carousel', {})
  })
}
</script>

<template>
  <div>
    <h2 class="mb-5 mt-2d text-slate-400 hover:text-sky-400 text-2xl">Carousel Slider (Part-1)</h2>
  </div>

  <div id="carousel" class="item">
    <div
      :style="`background-image:url(${item.url})`"
      class="item"
      v-for="item in data"
      :key="item.id"
    >
      <h1 class="text-rose-600 text-2xl text-center mt-5 bg-slate-200" :class="style">
        {{ item.title }}
      </h1>
    </div>
  </div>

  <br />


  <form>
    <div class="grid gap-6 mb-6 md:grid-cols-3">
      <div>
        <input
          v-model="newItem.url"
          type="text"
          id="color-name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          placeholder="Image URL"
        />
      </div>

      <!--Add New Items Title -->
      <div>
        <input
          v-model="newItem.title"
          type="text"
          id="color-name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          placeholder="Title"
        />
      </div>

      <div>
        <!--Add New Items Update Button -->
        <button
          @click.prevent="addItem"
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add to Carousel
        </button>
      </div>
    </div>
  </form>
</template>

<style scoped>
.item {
  width: 780px;
  height: 350px;
  background-color: #ccc;
  background-size: cover;
}
</style>

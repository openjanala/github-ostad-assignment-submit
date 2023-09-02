<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { RouterLink } from "vue-router";
import router from "@/router";

const categories = ref([]);


onMounted(() => {
  allCategories();
});


async function allCategories() {
  let url = "https://basic-blog.teamrabbil.com/api/post-categories";
  let res = await axios.get(url);
  categories.value = res.data;
}

function getData(category) {
  router.push({
    name: "CategoryBlogPage",
    params: { id: category.id, category_name: category.name },
  });
}
</script>

<template>
  <div class="w-full bg-white shadow flex flex-col my-4 p-6">
    <p class="text-xl text-center text-white font-bold font-white pb-2 pt-2 bg-cyan-800  rounded-t-xl">সকল ক্যাটাগরি</p>
    <div class="grid grid-cols-3 gap-2 list-none pt-3">
      <span v-for="category in categories" :key="category.id">
        
        <button @click="getData(category)">{{ category.name }}</button>
      </span>
    </div>
  </div>
</template>

<style scoped></style>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import { RouterLink } from "vue-router";

const categories = ref([]);

onMounted(() => {
  allCategories();
});

async function allCategories() {
  let url = "https://basic-blog.teamrabbil.com/api/post-categories";
  let res = await axios.get(url);
  categories.value = res.data;
}
</script>

<template>
  <!-- Top Bar Nav -->
  <nav class="w-full py-4 bg-cyan-800 shadow">
    <div
      class="w-full container mx-auto flex flex-wrap items-center justify-between"
    >
      <nav>
        <ul
          class="flex items-center justify-between font-bold text-sm text-white uppercase no-underline"
        >
          <li>
            <RouterLink
              class="hover:text-gray-200 hover:underline px-4"
              :to="{ name: 'home' }"
              >হোম ওয়ার্ক ৯</RouterLink
            >
          </li>
        </ul>
      </nav>

      <div class="flex items-center text-lg no-underline text-white pr-8">
        <nav>
          <ul
            class="flex items-center justify-between font-bold text-sm text-white uppercase no-underline"
          >
            <li>
              <RouterLink
                class="hover:text-sky-500 hover:underline px-6"
                :to="{ name: 'home' }"
                >হোম</RouterLink
              >
            </li>
            <span v-for="category in categories" :key="category.id">
              <RouterLink
                class="hover:text-gray-200 hover:underline px-4"
                :to="{
                  name: 'CategoryBlogPage',
                  params: { id: category.id, category_name: category.name },
                }"
                >{{ category.name }}</RouterLink
              >
            </span>
          </ul>
        </nav>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>

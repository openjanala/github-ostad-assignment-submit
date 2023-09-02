<script setup>
import AllCategories from "@/components/AllCategories.vue";
import RecentPosts from "@/components/RecentPosts.vue";
</script>

<template>
  <aside class="w-full md:w-1/3 flex flex-col items-center px-3 bg-gray-300">
    <RecentPosts />
    <AllCategories />
  </aside>
</template>

<style scoped></style>

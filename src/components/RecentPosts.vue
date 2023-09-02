<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const posts = ref([]);

onMounted(() => {
  allPosts();
});

async function allPosts() {
  let url = "https://basic-blog.teamrabbil.com/api/post-newest";
  let res = await axios.get(url);
  posts.value = res.data;
}
</script>

<template>
  <div class="w-full bg-white shadow flex flex-col my-4 p-6">
    <p class="text-xl text-center text-white font-bold font-white pb-2 pt-2 bg-cyan-800  rounded-t-xl">নতুন পোস্ট সমূহ</p>
    <div class="grid grid-cols-3 gap-2 list-none pt-4">
      <span v-for="post in posts" :key="post.id">
        <RouterLink :to="{ name: 'SinglePostPage', params: { id: post.id } }">
          <img :src="post.img" alt="" />
        </RouterLink>
      </span>
    </div>
  </div>
</template>

<style scoped></style>

<script setup>
import SideBar from "@/components/SideBar.vue";
import axios from "axios";
import { ref } from "vue";

const postList = ref([]);

newPosts();
async function newPosts() {
  let url = "https://basic-blog.teamrabbil.com/api/post-newest";
  let res = await axios.get(url);
  postList.value = res.data;
}
</script>

<template>
  <div class="container mx-auto flex flex-wrap py-6">
    <!-- Posts Section -->
    <section class="w-full md:w-2/3 flex flex-col items-center px-3">
      <article
        v-for="post in postList"
        :key="post.id"
        class="flex flex-col shadow my-4"
      >
        <!-- Article Image -->
        <a href="#" class="hover:opacity-75">
          <img :src="post.img" />
        </a>
        <div class="bg-white flex flex-col justify-start p-6">
          <RouterLink
            :to="{ name: 'SinglePostPage', params: { id: post.id } }"
            class="text-yellow-700 font-bold uppercase pb-4"
            > {{ post.title }} 
          </RouterLink>
          <RouterLink
            :to="{ name: 'SinglePostPage', params: { id: post.id } }"
            class="text-2xl font-bold hover:text-gray-900 pb-4"
            >{{ post.short }} <button class=" text-xl text-sm text-sky hover:text-sky-900">[more...]</button>
          </RouterLink>
        </div>
      </article>
    </section>
    <SideBar />
  </div>
</template>

<style scoped></style>

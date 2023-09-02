<script setup>
import SideBar from "@/components/SideBar.vue";
import { RouterLink } from "vue-router";
import axios from "axios";
import { computed, ref } from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});


const postList = ref([]);

const getData = computed(async function list() {
  let url = `https://basic-blog.teamrabbil.com/api/post-list/${parseInt(
    props.id
  )}`;
  let res = await axios.get(url);
  if (res.status === 200) {
    postList.value = res.data;
  } else {
    alert("No Data Found");
  }

  return postList;
});
</script>

<template>
  <input type="hidden" v-model="getData" />

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
            :to="{
              name: 'SingleCategoryBLog',
              params: { id: post.category_id },
            }"
            class="text-yellow-700 text-sm font-bold uppercase pb-4"
            >{{ post.title }}
          </RouterLink>
          <RouterLink
            :to="{
              name: 'SingleCategoryBLog',
              params: { id: post.category_id },
            }"
            class="text-2xl font-bold hover:text-gray-900 pb-4"
            >{{ post.short }}
          </RouterLink>
        </div>
      </article>
    </section>
    <SideBar />
  </div>
</template>

<style scoped></style>

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryBlogPage from "@/views/pages/CategoryBlogPage.vue";
import SinglePostPage from "@/views/pages/SinglePostPage.vue";
import PostsPage from "@/views/pages/PostsPage.vue";
import SingleCategoryBLog from "@/views/pages/SingleCategoryBLog.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/:category_name/:id',
      name: 'CategoryBlogPage',
      component: CategoryBlogPage,
      props:true,
    },

    {
      path: '/posts/:id',
      name: 'PostsPage',
      component: PostsPage,
      props:true,
    },

    {
      path: '/post/:id',
      name: 'SinglePostPage',
      component:SinglePostPage ,
      props:true,
    },

    {
      path: '/category/post/:id',
      name: 'SingleCategoryBLog',
      component:SingleCategoryBLog ,
      props:true,
    },
  ]
})

export default router

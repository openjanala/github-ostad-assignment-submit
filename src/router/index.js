import { createRouter, createWebHistory } from 'vue-router'
// const Home = ()=> import('../views/HomeView.vue')
const Carousel = ()=> import('../views/SliderView.vue')
const chart = ()=> import('../views/ChartView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    {
      path: '/',
      name: 'Carousel',
      component: Carousel
    },
    {
      path: '/chart',
      name: 'chart',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: chart
    }
  ]
})

export default router

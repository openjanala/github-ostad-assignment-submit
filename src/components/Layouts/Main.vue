<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <div class="wrapper">

    <!-- topbar start -->
    <div class="py-6 px-8 border border-gray-200 shadow-md">
      <div class="flex justify-between">
        <h2 class="text-xl pt-1 text-lef font-medium text-gray-500 dark:text-white">Assignment-13</h2>

        <div class="dropdown dropdown-end">
           <img tabindex="0" class="w-10 rounded-full ring-2" src="https://rafiqulislam.xyz/assignment/rafiqimg.jpg" alt="Rafiqul Islam">

          <ul tabindex="0" class="dropdown-content z-[1] menu p-2 mt-2 shadow-md shadow-indigo-200 bg-base-100 rounded-md w-52">
            <li><a>Profile</a></li>
            <li><a>Settings</a></li>
            <li><a>Login</a></li>
          </ul>

        </div>
      </div>
    </div>
    <!-- topbar end -->

    <div class="flex">
    <aside class="flex">
        <div class="h-screen overflow-y-auto bg-white border-l border-r sm:w-64 w-20 transition hover:w-64 duration-500 dark:bg-gray-900 dark:border-gray-700">
            
            <ul class="menu w-full space-y-1">
              <li><router-link to="/" class="py-3"><Icon icon="mdi:home" />Home</router-link></li>
              <li><router-link :to="{name:'users'}" class="py-3"><Icon icon="mdi:users" />Users</router-link></li>
              <li><router-link :to="{name:'login'}" class="py-3"><Icon icon="mdi:login" />Login</router-link></li>
          </ul>
        </div>
    </aside>

    <main class="bg-gray-100 w-full p-6">
      <div class="p-8 shadow-lg rounded-md bg-white h-full">
        <slot></slot>
      </div>
    </main>
  </div>
  </div>
</template>

<style scoped>

</style>

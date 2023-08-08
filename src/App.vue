<script setup>
import { ref, reactive, computed } from 'vue'


const getConfirmPass = reactive({
isRegister: false,


})
</script>

<template>
  <section class="flex h-screen w-full">
    <div class="w-1/2" style="background-image: url(https://images.unsplash.com/photo-1590843858947-eb05363d4c61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80); background-repeat: no-repeat; background-size: cover;">
      <h1 class="mb-5 text-2xl mt-10 ml-10 text-white">Rafiqul Islam </h1>
    </div>
    <div class="w-1/2 flex flex-col justify-center items-center bg-gray-200">
      <h2 class="mb-5 text-xl">Login or register</h2>
      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Username
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" required>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"  required>
            <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
          </div>
          <div v-show="getConfirmPass.isRegister"  class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Confirm Password
            </label>
            <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" required>
            <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
          </div>
          <div class="flex items-center justify-between">
            <button @click="getConfirmPass.isRegister=false" class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Sign In
            </button>
            <a @click="getConfirmPass.isRegister=true" class="inline-block align-baseline font-bold text-sm text-orange-600 hover:text-orange-800" href="#">
              Or Register
            </a>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2023 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  </section>
</template>
<style scoped></style>

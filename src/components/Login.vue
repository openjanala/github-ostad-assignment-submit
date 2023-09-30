<script setup>
   import store from '../store/loginRegister';
   import {reactive} from 'vue'
   import { Form, Field, defineRule, ErrorMessage  } from 'vee-validate';
   import { required, email, min } from '@vee-validate/rules';

   defineRule('required', required);
   defineRule('email', email);
   defineRule('min', min);

    const state = store()
    const LoginInput = reactive({});


    function LoginData(){
      state.login(LoginInput)
    }

</script>

<template>
   <div class="h-200 w-full flex items-center justify-center bg-teal-lightest font-sans" style="height: 600px;">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col mb-20 mt-20">
         <Form @submit="LoginData">
            <div class="mb-4">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
               Email
            </label>
            <Field v-model="LoginInput.email" name="email" rules="required|email" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username"
               type="email" placeholder="Email"/>
            <ErrorMessage class="text-red-600" name="email" />
         </div>
         <div class="mb-6">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
               Password
            </label>
            <Field v-model="LoginInput.password" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
               id="password" name="password" type="password" rules="required|min:8" placeholder="******************"/>
               <ErrorMessage class="text-red-600" name="password" />
         </div>
         <div class="flex items-center justify-between">
            <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="submit">
               Sign In
            </button>
            <router-link class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" :to="{name: 'Register'}">
               Registration
            </router-link>
         </div>
         </Form>
      </div>
   </div>
</template>

<style scoped>

</style>
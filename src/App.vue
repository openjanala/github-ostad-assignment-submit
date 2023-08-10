<script setup>
import { ref, reactive } from 'vue'

const activeRegistration = ref(false)
const showCongratulations = ref(false);
const showWelcome = ref(false);
const invalidCredential = ref(false);
const activeLogin = ref(true)
const profilename = ref('')
const email = ref('')
const password = ref('')
const confirmpass = ref('')
const loginName = ref('');
const loginPassword = ref('');


const profiles =reactive([]) 

function createProfile(){ 
  const profileData ={
    profilename: profilename.value,
    email: email.value,
    password: password.value,
    confirmpass: confirmpass.value,
  }
  profiles.push(profileData)
  showCongratulations.value = true;
  
  // Local storage for the given input
  localStorage.setItem('profiles', JSON.stringify(profiles)); 
 
  // To show the message for certain time
  setTimeout(() => {
    showCongratulations.value = false;
  },1000); 

  // Let's reset the form again
  profilename.value= '' 
  email.value= ''
  password.value =''
  confirmpass.value=''
} 


function checkCredentials () {
  const storedProfiles = JSON.parse(localStorage.getItem('profiles'));
  const matchedProfile = storedProfiles.find(profile => {
     return (
      profile.profilename === loginName.value && profile.password === loginPassword.value
        );
      });
    
   if (matchedProfile) {
        showWelcome.value = true;
        activeLogin.value = false;
    } 
  else {
    invalidCredential.value= true;
    setTimeout(()=>{
      invalidCredential.value = false;
    },1000)
  }
    loginName.value = '';
    loginPassword.value = '';   
};

const formSwitch = reactive([
      {
        textButton: 'Register',
        signUpText: 'Login'
      },
    
])

function registrationForm (){
  return (activeRegistration.value = true, activeLogin.value = false)
}
function signInForm (){
  return (activeRegistration.value = false, activeLogin.value = true)
}


</script>

<template>
  <section class="flex h-screen w-full">
    
 
    
    <div v-show="!showWelcome" class="w-1/2" style="background-image: url(https://images.unsplash.com/photo-1590843858947-eb05363d4c61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80); background-repeat: no-repeat; background-size: cover;">
      <h1 class="mb-5 text-2xl mt-10 ml-10 text-white">Md. Rafiqul Islam </h1>
    </div>
    <div class="w-1/2 flex flex-col justify-center items-center bg-gray-200">
      <h3 class="mb-5 text-xl bg-blue-900 pl-4 pr-3 pt-2 pb-2 br-4 rounded-2xl text-white"> Login and Register</h3>
      <div class="w-full max-w-xs" v-if="showCongratulations">
         <p class="text-orange-600 mt-4 mb-4 justify-center text-center">Welcome! You have Successfully Registered.</p>
       </div>
       <div class="w-full max-w-xs" v-if="invalidCredential">
         <p class="text-orange-600 mt-1 mb-2 text-center justify-center"> Error: Invalid Credentials</p>
       </div>
       <div class="flex flex-col items-center justify-center w-full max-w-xs mt-4 mb-4" v-show="showWelcome">
        
        <!-- // Welcome Message -->
         <h1 class="text-orange-600 mt-4 mb-4 justify-center text-xl"> Welcome To Our Home Page.</h1>
         <button  @click="showWelcome = !showWelcome; signInForm()"  class="bg-orange-600 hover:bg-orange-700 align-justify text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Logout
         </button>
       </div>
      <div class="w-full max-w-xs">
        <form @submit.prevent="checkCredentials()" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" v-show="activeLogin" >
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username"> Username </label>
            <input v-model="loginName" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password"> Password </label>
            <input v-model="loginPassword" class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password">
        
          </div>
          <div class="flex items-center justify-between">
            <button  class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Sign In
            </button>

            <!-- // For Register Button -->
            <button  @click="registrationForm()" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Register
            </button> 
            
          </div>
        </form>
         
        <form @submit.prevent="createProfile()" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" v-show="true==activeRegistration">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2"  for="username"> Username </label>
            <input class="peer shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="profilename" id="username" type="text" placeholder="Username" required>

          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password"> Email Address </label>
            <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" v-model="email" id="email" type="email" placeholder="Email Address" required>
            
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password </label>
            <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" v-model="password" id="password" type="password" placeholder="Password" required>
           
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password"> Confirm Password </label>
            <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" v-model="Confirmpass" id="password" type="password" placeholder="Confirm Password" required>
           
          </div>
          <div class="flex items-center justify-between">
            <button class="bg-orange-600 hover:bg-orange-700  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              {{ formSwitch[0].textButton}}
            </button>

             <!-- // Button for Login In -->
            <button  @click="signInForm()" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              {{ formSwitch[0].signUpText }}
            </button>
            
          </div>
        </form>

        <p class="text-center text-gray-500 text-xs">
          &copy; 2023 Md. Rafiqul Islam. All rights reserved.
        </p>
      </div>
    </div>
  </section>
</template>
<style scoped></style>

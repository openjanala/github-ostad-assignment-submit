<script setup>
import ParentComponent from './components/ParentComponent.vue';
import ChildComponent from './components/ChildComponent.vue';
</script>


<template>
  <div>
    <h2>Parent Component</h2>
    <ParentComponent/>
 
  </div>


  <div>
    <h2>Child Component</h2>
    <ChildComponent/>
    <button>Message From Parents</button>
  </div>
</template>


<style scoped>

</style>
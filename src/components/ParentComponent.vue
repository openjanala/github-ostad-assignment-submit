<script setup>
import ChildComponent from "./ChildComponent.vue";
import { ref } from "vue";

const childMessage = ref("");
const parentMessage = ref("I am from Parent Component");

const handlerEmitted = (info) => {
  childMessage.value = info;
};
</script>

<template>
  <div class="p-4 mb-2 bg-gray-700 rounded border border-blue-700">
    <h2 class="mb-3 underline font-semibold text-lg">Parent Component</h2>
    <p class="text-base">( {{ childMessage }} )</p>
  </div>
  <div>
    <hr />

    <!--  From Child Component  -->
    <ChildComponent
      :parentMessage="parentMessage"
      @emittedMessage="handlerEmitted"
    />
  </div>
</template>

<style scoped></style>

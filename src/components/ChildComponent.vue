<script setup>
defineProps(["parentMessage"]);
defineEmits(["emittedMessage"]);
const childMessage = "I am from Child Component";
</script>

<template>
  <div class="max-w-400 p-5 mb-3 bg-purple-700 rounded border border-blue-700">
    <h2 class="mb-3 underline font-semibold text-lg">Child Component</h2>

    <!-- Message From Parent Component -->
    <p class="text-base mb-2">{{ parentMessage }}</p>
  </div>

  <!-- Button for Send Message to Parent Component -->
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white-400 font-bold py-3 px-4 rounded"
    @click="$emit('emittedMessage', childMessage)">
    Message Send to Parent
  </button>
</template>

<style scoped></style>

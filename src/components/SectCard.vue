<template>
  <div class="flex flex-col items-center">
    <div class="img border border-shade-200 rounded-full grid place-content-center">
      <img class="p-[1em]" :src="image" :alt="tittle" />
    </div>
    <h2 class="text-center font-['Gsemibold'] text-2xl text-shade-200">{{ tittle }}</h2>
    <p class="text-center text-shade-200 font-['Cregular'] text-xl">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  image: {
    type: String,
    required: true
  },
  tittle: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<style scoped></style>

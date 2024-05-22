<template>
  <div class="">
    <div class="intro w-[90vw] lg:w-full flex flex-col gap-2 mt-10 mx-auto">
      <p class="text-shade-200 md:text-[1.125em] text-base lg:text-[1.5em] font-['Gregular']">
        Step {{ step }} of 5
      </p>
      <h1 class="font-['Gsemibold'] text-[1.25em]">{{ title }}</h1>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  step: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>

<style scoped></style>

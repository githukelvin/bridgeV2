<template>
  <div class="flex flex-col">
    <TheHeader />
    <div class="mb-20">
      <RouterView />
    </div>
    <div id="contact">
      <TheFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<style scoped></style>

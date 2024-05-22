<template>
  <div class="flex flex-col">
    <TheHeader />
    <RouterView />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<style scoped></style>

<template>
  <div class="hamburger">
    <img class="object-fit" ref="hamburgerRef" :src="HamImage" alt="ham image" />
  </div>
  <div class="close" ref="closeRef">
    <img :src="XmarkImage" alt="x mark image" />
  </div>
</template>

<script setup lang="ts">
import HamImage from '@/assets/images/ham.svg'
import XmarkImage from '@/assets/images/xmark.svg'
import { ref } from 'vue'
const hamburgerRef = ref(null)
const closeRef = ref(null)

const hamDivElement = hamburgerRef.value
const closeDivElement = closeRef.value
const navDivElement = document.querySelector('.nav')
const links = document.querySelectorAll('ul li a')
if (hamDivElement && closeDivElement) {
  const hamDiv = hamDivElement as HTMLElement
  const closeDiv = closeDivElement as HTMLElement
  const navDiv = navDivElement as HTMLElement

  hamDiv.addEventListener('click', () => {
    hamDiv.classList.add('active')
    closeDiv.classList.add('active')
    navDiv.classList.add('active')
  })

  closeDiv.addEventListener('click', () => {
    closeDiv.classList.remove('active')
    hamDiv.classList.remove('active')
    navDiv.classList.remove('active')
  })

  links.forEach((link) => {
    link.addEventListener('click', () => {
      closeDiv.classList.remove('active')
      hamDiv.classList.remove('active')
      navDiv.classList.remove('active')
    })
  })
} else {
  console.error('Could not find .ham or .close elements on the page.')
}
</script>

<style scoped>
.close {
  display: none;
}
.hamburger.active {
  display: none;
}
.close.active {
  display: block;
}
</style>

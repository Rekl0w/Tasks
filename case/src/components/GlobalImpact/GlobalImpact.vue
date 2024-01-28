<template>
  <div
    v-if="isMobile"
    class="bg-[#78350F] text-white flex items-center justify-center h-screen overflow-hidden w-full"
    :style="{
      backgroundImage: 'url(/src/assets/map.png)',
      backgroundPosition: 'left',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }"
    style="font-family: 'Roboto', sans-serif;"
  >
    <div
      class="absolute top-0 left-0 right-0 bottom-0"
    ></div>

    <div class="z-10 text-center mt-10">
      <h1 class="text-6xl md:text-8xl font-bold">11,658,467</h1>
      <p class="text-2xl md:text-4xl mt-4">Shoes Collected</p>
    </div>
  </div>
  <div
    class="relative flex items-center lg:justify-center text-center bg-[#78350F] h-screen w-full"
    v-if="!isMobile"
  >
    <img src="../../assets/map.png" class="" alt="Map" />

    <div class="absolute inset-0 flex items-center justify-center">
      <div class="text-white">
        <p class="text-8xl font-bold mb-4">11,658,467</p>
        <p class="text-2xl">Shoes Collected</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMobile = ref(false)

const checkIfMobile = () => {
  if (window.innerWidth <= 768) {
    isMobile.value = true
  } else {
    isMobile.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', checkIfMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkIfMobile)
})

checkIfMobile()


</script>

<style scoped></style>


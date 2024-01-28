<template>
  <section class="relative overflow-hidden w-full lg:pb-0 pb-12" style="font-family: 'Roboto', sans-serif;">
    <img
      class="absolute w-full h-full object-cover z-[0]"
      src="/src/assets/Waves.png"
      alt="Background"
    />

    <div class="container relative mx-auto px-8 z-[1]">
      <h2 class="lg:text-5xl text-4xl font-bold my-6 lg:text-start text-center flex-shrink-0 text-gray-800">
        Grow your collection
      </h2>
      <p class="lg:w-11/12 mb-12 text-lg lg:text-start text-center">
        Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet
        dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit
        rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat proin
        neque placerat at bibendum quam tellus.
      </p>

      <div class="flex lg:gap-72 lg:flex-row gap-5 flex-col ">
        <div class="mb-6 mt-5 lg:flex-col flex" :class="isMobile ? 'overflow-x-auto' : '' ">
        <button
          class="flex items-center gap-5 lg:px-4 lg:pl-2 flex-shrink-0 pr-4 mb-6 pl-2 bg-white py-2 lg:w-64 rounded-lg shadow-lg lg:mr-0 mr-8"
        >
          <img src="/src/assets/Group 53.png" alt="Icon" class="h-6 mr-2" />
          <p class="font-semibold">Bibendum Tellus</p>
          <img src="/src/assets/Group 54.png" alt="">
        </button>
        <button
          class="flex items-center lg:pl-2 flex-shrink-0 pr-4 gap-5 mb-6 px-4 py-2 lg:mr-0 mr-8 rounded-lg"
        >
          <img src="/src/assets/Group 66.png" alt="Icon" class="h-6 mr-2" />
          <p class="font-semibold">Cras eget</p>
        </button>
        <button
          class="flex items-center lg:pl-2 flex-shrink-0 pr-4 gap-5 mb-6 px-4 py-2 lg:mr-0 mr-8 rounded-lg "
        >
          <img src="/src/assets/Group 67.png" alt="Icon" class="h-6 mr-2" />
          <p class="font-semibold">Dolor pharetra</p>
        </button>
        <button
          class="flex items-center lg:pl-2 flex-shrink-0 pr-4 gap-5 mb-6 px-4 py-2 lg:mr-0 mr-8 rounded-lg"
        >
          <img src="/src/assets/Group 68.png" alt="Icon" class="h-6 mr-2" />
          <p class="font-semibold">Amet, fringilla</p>
        </button>
        <button
          class="flex items-center lg:pl-2 flex-shrink-0 pr-4 gap-5 mb-6 px-4 py-2 lg:mr-0 mr-8 rounded-lg"
        >
          <img src="/src/assets/Group 69.png" alt="Icon" class="h-6 mr-2" />
          <p class="font-semibold">Amet nibh</p>
        </button>
        <button
          class="flex items-center lg:pl-2 flex-shrink-0 pr-4 gap-5 mb-6 px-4 py-2 lg:mr-0 mr-8 rounded-lg"
        >
          <img src="/src/assets/Group 70.png" alt="Icon" class="h-6 mr-2" />
          <p class="font-semibold">Sed velit</p>
        </button>
      </div>
      
        <img class="" src="/src/assets/2screen.png" alt="Featured" />
      </div>
    </div>
  </section>
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

<style>
</style>

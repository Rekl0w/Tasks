<template>
  <nav class="flex items-center justify-between py-5 px-6 lg:px-48 bg-[#fefbea] w-full  fixed z-50" style="font-family: 'Roboto', sans-serif;" >
    <h1 class="text-4xl lg:text-5xl font-semibold text-[#78350F]">Collers</h1>

    <button class="lg:hidden"  @click="toggleMenu">
        <img v-if="!menuOpen" src="../../assets/menu1.png" class="w-[24px] h-[24px]" alt="">
        <svg v-else-if="menuOpen" class="h-6 w-6 text-[#78350F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

    <div class="hidden lg:flex items-center space-x-4">
      <button class="text-base lg:text-lg lg:font-semibold text-[#78350F] hover:text-gray-600">Products</button>
      <button class="text-base lg:text-lg lg:font-semibold text-[#78350F] hover:text-gray-600">Solutions</button>
      <button class="text-base lg:text-lg lg:font-semibold text-[#78350F] hover:text-gray-600">Pricing</button>
      <button class="text-base lg:text-lg lg:font-semibold text-[#78350F] hover:text-gray-600">Resources</button>
      <button class="text-base lg:text-lg lg:font-semibold text-[#78350F] hover:text-gray-600">Log In</button>
      <button class="text-[#78350F] lg:text-lg lg:font-semibold border-[#78350F] hover:bg-[#78350F] hover:text-white border-2 font-bold py-2 px-6 rounded-lg">
        Sign up now
      </button>
    </div>

    <div v-if="menuOpen" class="lg:hidden absolute top-full left-0 right-0 rounded-lg mt-2 bg-white shadow-md p-4">
      <button class="block text-lg font-semibold text-[#78350F] hover:text-gray-600 px-4 py-3">Solutions</button>
      <button class="block text-lg font-semibold text-[#78350F] hover:text-gray-600 px-4 py-3">Pricing</button>
      <button class="block text-lg font-semibold text-[#78350F] hover:text-gray-600 px-4 py-3">Resources</button>
      <button class="block text-lg font-semibold text-[#78350F] hover:text-gray-600 px-4 py-3">Log In</button>
      <button class="block text-lg font-semibold text-[#78350F] hover:text-gray-600 px-4 py-3">Products</button>
      <button class="block w-full text-lg text-[#78350F] border-[#78350F] border-2 hover:bg-[#78350F] hover:text-white font-bold py-2 mt-4 px-6 rounded-lg text-center">
        Sign up now
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<style scoped>

</style>



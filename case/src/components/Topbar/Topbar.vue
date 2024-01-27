<template>
  <nav class="flex items-center justify-between bg-transparent py-5 px-6 lg:px-48">
    <h1 class="text-4xl lg:text-5xl font-semibold text-[#78350F]">Collers</h1>

    <button class="lg:hidden" @click="toggleMenu">
        <svg class="h-6 w-6 text-[#78350F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

    <div class="hidden lg:flex items-center space-x-4">
      <a href="#" class="text-base lg:text-lg lg:font-semibold text-[#78350F] hover:text-gray-600">Products</a>
      <a href="#" class="text-base lg:text-lg lg:font-semibold text-[#78350F] hover:text-gray-600">Solutions</a>
      <a href="#" class="text-base lg:text-lg lg:font-semibold text-[#78350F] hover:text-gray-600">Pricing</a>
      <a href="#" class="text-base lg:text-lg lg:font-semibold text-[#78350F] hover:text-gray-600">Resources</a>
      <a href="#" class="text-base lg:text-lg lg:font-semibold text-[#78350F] hover:text-gray-600">Log In</a>
      <button class="text-[#78350F] lg:text-lg lg:font-semibold border-[#78350F] hover:bg-[#78350F] hover:text-white border-2 font-bold py-2 px-6 rounded-lg">
        Sign up now
      </button>
    </div>

    <div v-if="menuOpen" class="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md mt-1 p-4">
      <a href="#" class="block text-base text-[#78350F] hover:text-gray-600 px-4 py-2">Products</a>
      <a href="#" class="block text-base text-[#78350F] hover:text-gray-600 px-4 py-2">Solutions</a>
      <a href="#" class="block text-base text-[#78350F] hover:text-gray-600 px-4 py-2">Pricing</a>
      <a href="#" class="block text-base text-[#78350F] hover:text-gray-600 px-4 py-2">Resources</a>
      <a href="#" class="block text-base text-[#78350F] hover:text-gray-600 px-4 py-2">Log In</a>
      <button class="block w-full text-[#78350F] border-[#78350F] border-2 hover:bg-[#78350F] hover:text-white font-bold py-2 px-6 rounded-lg text-center">
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



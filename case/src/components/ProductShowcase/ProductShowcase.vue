<template>
  <div class="bg-[#0F172A] py-16 w-full" style="font-family: 'Roboto', sans-serif;">
    <div class="container mx-auto" :style="isMobile ? { backgroundImage: 'url(/src/assets/squares-responsive.png)', backgroundPosition: 'top', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' } : { backgroundImage: 'url(/src/assets/squares.png)', backgroundPosition: 'top', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }" >
      <div class="flex flex-col md:flex-row justify-between lg:items-start items-center">
        <h2 class="text-white lg:text-6xl lg:mb-20 lg:ml-14 text-4xl font-semibold mb-12">
          The best of the best
        </h2>
        <button class="text-white flex items-center justify-center text-center border-2 lg:ml-0 lg:mb-0 ml-2 lg:w-auto border-white w-7/12 h-16 rounded-lg lg:mr-16 mb-12 hover:bg-white hover:text-[#0F172A]">
          <p class="text-2xl font-semibold p-12 flex-shrink-0">
            Sign Up Now
          </p>
        </button>
      </div>
      <div class="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0 md:space-x-4">
        <div class="max-w-sm shadow-2xl shadow-slate-500 rounded-lg">
          <div class="bg-[#0F172A] rounded-lg h-[450px] flex flex-col items-center justify-between">
            <img
              src="../../assets/shoe1.png"
              alt="Product 1"
              class="rounded-b-none rounded-lg mb-4 w-full h-1/2"
            />
            <h3 class="text-xl text-white font-bold w-full px-12">Title</h3>
            <p class="text-white px-12 mb-3">
              Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
            </p>
            <button class="bg-black flex gap-5 justify-center items-center text-white px-6 py-2 rounded shadow bg-transparent border-white border-2 w-9/12 mb-6">
              <img src="../../assets/shopping-cart.png" alt="">
              <p class="text-lg">Buy Now</p>
            </button>
          </div>
        </div>

        <div class="max-w-sm shadow-2xl shadow-slate-500 rounded-lg">
          <div class="bg-[#0F172A] rounded-lg h-[450px] flex flex-col items-center justify-between">
            <img
              src="../../assets/shoe2.png"
              alt="Product 1"
              class="rounded-b-none rounded-lg mb-4 w-full h-1/2"
            />
            <h3 class="text-xl text-white font-bold w-full px-12">Title</h3>
            <p class="text-white px-12 mb-3">
              Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
            </p>
            <button class="bg-black flex gap-5 justify-center items-center text-white px-6 py-2 rounded shadow bg-transparent border-white border-2 w-9/12 mb-6">
              <img src="../../assets/shopping-cart.png" alt="">
              <p class="text-lg">Buy Now</p>
            </button>
          </div>
        </div>

        <div class="max-w-sm shadow-2xl shadow-slate-500 rounded-lg">
          <div class="bg-[#0F172A] rounded-lg h-[450px] flex flex-col items-center justify-between">
            <img
              src="../../assets/shoe3.png"
              alt="Product 1"
              class="rounded-b-none rounded-lg mb-4 w-full h-1/2"
            />
            <h3 class="text-xl text-white font-bold w-full px-12">Title</h3>
            <p class="text-white px-12 mb-3">
              Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
            </p>
            <button class="bg-black flex gap-5 justify-center items-center text-white px-6 py-2 rounded shadow bg-transparent border-white border-2 w-9/12 mb-6">
              <img src="../../assets/shopping-cart.png" alt="">
              <p class="text-lg">Buy Now</p>
            </button>
          </div>
        </div>
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

<style scoped>

</style>

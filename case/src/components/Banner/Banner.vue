<template>
  <div :style=" !isMobile ? { backgroundImage: 'url(/src/assets/rectangle.png)', backgroundPosition: 'top', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition:'10px 100px' } : { backgroundImage: 'url(/src/assets/rectangle.png)', backgroundPosition: 'top', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }">
    <div class="relative text-white sm:px-6 lg:px-0 lg:pt-24 pt-16 px-12 w-full" style="font-family: 'Roboto', sans-serif;" >
      <div class="flex flex-col justify-center items-center pt-12 gap-8 sm:flex-row sm:gap-32 lg:px-48">
        <div class="w-full z-40">
          <h1 class="text-5xl lg:text-7xl lg:text-start text-center font-extrabold tracking-wide lg:font-[68px]" style="color: #0F172A;">
            Collectible Sneakers
          </h1>
          <p class="mt-6 lg:text-base lg:text-start text-center" style="color: #0F172A; font-size: 22px;">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.
          </p>
          <div class="mt-8 flex lg:flex-row lg:ml-0  gap-4">
            <button class="inline-flex items-center justify-center px-6 py-3 h-14 border-2 font-medium flex-shrink-0 rounded-md text-[#78350F] border-[#78350F] hover:bg-[#78350F] hover:text-white">
              <p class="font-bold">Sign Up Now</p>
            </button>
            <button class="inline-flex items-center gap-2 justify-center px-5 py-3 border flex-shrink-0 border-transparent text-base font-medium rounded-md text-[#78350F] cursor-pointer">
              <img src="../../assets/video-icon.png" alt="">
              <p class="font-bold">Watch Demo</p>
            </button>
          </div>
        </div>
        <img src="../../assets/shoe.png" alt="Collectible Sneakers" class="z-20 w-full sm:w-auto" />
      </div>
      <Feature class="relative z-40 lg:px-44" />
      <div class="absolute bottom-0 right-0 z-0">
        
      </div>
    </div>
  </div>
</template>

<script setup>
import Feature from '../Feature/Feature.vue';
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

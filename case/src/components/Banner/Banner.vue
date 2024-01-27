<template>
  <div>
    <Topbar class="relative" />
    <div class="relative text-white px-4 sm:px-6 lg:px-8" style="font-family: 'Roboto', sans-serif;">
      <div class="flex flex-col justify-center items-center py-12 gap-8 sm:flex-row sm:gap-32 lg:px-48">
        <div class="w-full sm:w-auto z-50">
          <h1 class="text-4xl sm:text-5xl font-extrabold tracking-wide" style="color: #0F172A; font-size: 68px;">
            Collectible Sneakers
          </h1>
          <p class="mt-6 text-base sm:text-lg" style="color: #0F172A; font-size: 18px;">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.
          </p>
          <div class="mt-8 flex flex-col sm:flex-row gap-4">
            <button class="inline-flex items-center justify-center px-5 py-3 border-2 text-base font-medium rounded-md text-[#78350F] border-[#78350F] hover:bg-[#78350F] hover:text-white">
              <p class="font-bold">Sign Up Now</p>
            </button>
            <button class="inline-flex items-center gap-2 justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[#78350F] cursor-pointer">
              <img src="../../assets/video-icon.png" alt="">
              <p class="font-bold">Watch Demo</p>
            </button>
          </div>
        </div>
        <img src="../../assets/shoe.png" alt="Collectible Sneakers" class="z-20 w-full sm:w-auto" />
      </div>
      <Feature class="relative z-50 px-36" />
      <div class="absolute bottom-0 right-0 z-0">
        <img src="../../assets/Rectangle 31.png" alt="Decorative Element" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Feature from '../Feature/Feature.vue';
import Topbar from '../Topbar/Topbar.vue';
</script>

<style scoped>
@media (min-width: 640px) {
  .text-4xl {
    font-size: 48px;
  }
  .text-base {
    font-size: 16px;
  }
}

@media (max-width: 639px) {
  .py-12 {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
  .gap-8 {
    gap: 2rem;
  }
  .lg\:px-48 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .text-4xl {
    font-size: 36px;
  }
  .text-base {
    font-size: 14px;
  }
  .px-36 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>

<template>
  <div class="flex justify-center items-center w-full" style="font-family: 'Roboto', sans-serif;">
    <div class="bg-white lg:h-[430px] h-[660px] w-10/12 lg:my-40 my-20 rounded-3xl shadow-lg flex">
      <div class="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center md:justify-between">
        <div class="md:w-1/2 a justify-center items-center pl-16">
          <h2 class="lg:text-6xl text-4xl font-bold mb-8">Why join us</h2>
          <ul class="text-lg space-y-2 mb-8">
            <li class="flex lg:items-center text-start">
              <svg class="w-6 h-6 lg:mb-0 mb-7 text-green-500 mr-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              Est et in pharetra magna adipiscing ornare aliquam.
            </li>
            <li class="flex lg:items-center text-start">
              <svg class="w-6 h-6 lg:mb-0 mb-7 text-green-500 mr-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              Tellus arcu sed consequat ac velit ut eu blandit.
            </li>
            <li class="flex lg:items-center text-start">
              <svg class="w-6 h-6 lg:mb-0 mb-7 text-green-500 mr-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              Ullamcorper ornare in et egestas dolor orci.
            </li>
          </ul>
          <button class="text-whitefont-bold text-xs lg:px-6 px-10 py-3 rounded-lg border-2 text-[#78350F] border-[#78350F] mr-1 mb-1 hover:bg-[#78350F] hover:text-white z-40 relative" type="button">
            <p class="font-semibold text-lg">
              Sign up now
            </p>
          </button>
        </div>
        <div class="lg:relative absolute lg:mt-5 mt-24 lg:w-auto w-full lg:px-0 lg:ml-0  px-3">
          <div class="aspect-w-16 aspect-h-9">
            <img src="../../assets/screen.png" alt="Why Join Us" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
  .a {
    width: 100%;
  }
  .pl-16 {
    padding-left: 0;
    padding-right: 0;
    text-align: center;
  }
  .aspect-w-16 {
    padding-top: 56.25%;
  }
}
</style>

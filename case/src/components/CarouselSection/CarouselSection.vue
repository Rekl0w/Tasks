<template>
    <div
    class="glide relative overflow-visible z-10 w-full"
    style="font-family: 'Roboto', sans-serif"
  >
    <div class="flex mb-8">
      <h1 class="lg:text-6xl text-3xl text-center w-full font-semibold text-[#0F172A] z-40 flex-shrink-0">
        Because they love us
      </h1>
      <div
        class="glide__arrows w-full flex justify-end lg:px-36 mb-12 gap-5"
        data-glide-el="controls"
        v-if="!isMobile"
      >
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
          <img src="../../assets/left.png" alt="" />
        </button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
          <img src="../../assets/right.png" alt="" />
        </button>
      </div>
    </div>
    <div class="absolute lg:left-20 w-full h-4/6 lg:w-11/12 top-24 bg-yellow-200"></div>
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li class="glide__slide mb-16">
          <div
            class="max-w-md h-96 mx-auto bg-white rounded-xl shadow-2xl overflow-hidden"
          >
            <img class="p-8" src="../../assets/brand1.png" alt="" />
            <blockquote class="mt-4 px-8 mb-4">
              <p class="text-gray-600 lg:text-2xl text-lg">
                Non risus viverra enim, quis. Eget vitae arcu vivamus sit
                tellus, viverra turpis lorem. Varius a turpis urna id
                porttitor.
              </p>
            </blockquote>
            <div class="p-8 mt-6">
              <div class="flex items-center">
                <img
                  class="h-12 w-12 rounded-full"
                  src="/src/assets/person3.png"
                  alt="Avatar of Hellen Jummy"
                />
                <div class="ml-4">
                  <p class="text-sm font-semibold text-gray-800">
                    Hellen Jummy
                  </p>
                  <p class="text-sm text-gray-500">Team Lead</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="glide__slide mb-16">
          <div
            class="max-w-md h-96 mx-auto bg-white rounded-xl shadow-2xl overflow-hidden"
          >
            <img class="p-8" src="../../assets/brand2.png" alt="" />
            <blockquote class="mt-4 px-8 mb-4">
              <p class="text-gray-600 lg:text-2xl text-lg">
                Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam.
              </p>
            </blockquote>
            <div class="p-8 mt-6">
              <div class="flex items-center">
                <img
                  class="h-12 w-12 rounded-full"
                  src="/src/assets/person2.png"
                  alt="Avatar of Hellena John"
                />
                <div class="ml-4">
                  <p class="text-sm font-semibold text-gray-800">
                    Hellena John
                  </p>
                  <p class="text-sm text-gray-500">Co-founder</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="glide__slide mb-16">
          <div
            class="max-w-md h-96 mx-auto bg-white rounded-xl shadow-2xl overflow-hidden"
          >
            <img class="p-8" src="../../assets/brand3.png" alt="" />
            <blockquote class="mt-4 px-8 mb-4">
              <p class="text-gray-600 lg:text-2xl text-lg">
                A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo.
              </p>
            </blockquote>
            <div class="p-8 mt-6">
              <div class="flex items-center">
                <img
                  class="h-12 w-12 rounded-full"
                  src="/src/assets/person4.png"
                  alt="Avatar of David Oshodi"
                />
                <div class="ml-4">
                  <p class="text-sm font-semibold text-gray-800">
                    David Oshodi
                  </p>
                  <p class="text-sm text-gray-500">Manager</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="glide__slide mb-16">
          <div
            class="max-w-md h-96 mx-auto bg-white rounded-xl shadow-2xl overflow-hidden"
          >
            <img class="p-8" src="../../assets/brand4.png" alt="" />
            <blockquote class="mt-4 px-8 mb-4">
              <p class="text-gray-600 lg:text-2xl text-lg">
                Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.
              </p>
            </blockquote>
            <div class="p-8 mt-6">
              <div class="flex items-center">
                <img
                  class="h-12 w-12 rounded-full"
                  src="/src/assets/person1.png"
                  alt="Avatar of Charolette Hanlin"
                />
                <div class="ml-4">
                  <p class="text-sm font-semibold text-gray-800">
                    Charolette Hanlin
                  </p>
                  <p class="text-sm text-gray-500">CEO</p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import Glide from "@glidejs/glide";
import { onMounted } from "vue";

const isMobile = window.innerWidth < 768;

onMounted(() => {
  new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    perView: 3,
    focusAt: "center",
    gap: 40,
    autoplay: 2000,
    peek: {
      before: 250,
      after: 250,
    },
    breakpoints: {
      1024: {
        perView: 2,
      },
      768: {
        perView: 1,
        peek: {
          before: 70,
          after: 70,
        }
      },
    },
  }).mount();
});


</script>

<style scoped>
@import "@glidejs/glide/dist/css/glide.core.min.css";

.glide__slide {
  transition: transform 0.9s ease;
}

</style>

<template>
  <footer
    class="bg-[#0B1120] text-white py-12 px-4 w-full"
    style="font-family: 'Roboto', sans-serif"
  >
    <div
      class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left"
    >
      <div>
        <h5 class="text-xl font-bold mb-4">Product</h5>
        <ul class="space-y-3">
          <li><button>Pricing</button></li>
          <li><button>Overview</button></li>
          <li><button>Browse</button></li>
          <li><button>Accessibility</button></li>
          <li><button>Five</button></li>
        </ul>
      </div>
      <div>
        <h5 class="text-xl font-bold mb-4">Solutions</h5>
        <ul class="space-y-3">
          <li><button>Brainstorming</button></li>
          <li><button>Ideation</button></li>
          <li><button>Wireframing</button></li>
          <li><button>Research</button></li>
          <li><button>Design</button></li>
        </ul>
      </div>
      <div>
        <h5 class="text-xl font-bold mb-4">Support</h5>
        <ul class="space-y-3">
          <li><button>Contact Us</button></li>
          <li><button>Developers</button></li>
          <li><button>Documentation</button></li>
          <li><button>Integrations</button></li>
          <li><button>Reports</button></li>
        </ul>
      </div>
      <div>
        <h5 class="text-xl font-bold mb-4">Get the App</h5>
        <div class="flex justify-center sm:justify-start gap-2 mb-8">
          <button>
            <img src="/src/assets/applestore.png" alt="App Store" />
          </button>
          <button>
            <img src="/src/assets/googleplay.png" alt="Google Play" />
          </button>
        </div>
        <h5 class="text-xl font-bold mb-4">Follow Us</h5>
        <div class="flex justify-center sm:justify-start gap-4">
          <button>
            <img src="/src/assets/youtube.png" alt="YouTube" />
          </button>
          <button>
            <img src="/src/assets/facebook.png" alt="Facebook" />
          </button>
          <button>
            <img src="/src/assets/twitter.png" alt="Twitter" />
          </button>
          <button>
            <img src="/src/assets/instagram.png" alt="Instagram" />
          </button>
          <button>
            <img src="/src/assets/linkedin.png" alt="LinkedIn" />
          </button>
        </div>
      </div>
    </div>
    <div class="border-t border-gray-700 mt-8 pt-4">
      <div
        class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center"
      >
        <span>Collers © 2023. All rights reserved.</span>
        <div class="flex gap-4 mt-4 sm:mt-0">
          <button class="hover:underline">Terms</button>
          <button class="hover:underline">Privacy</button>
          <button class="hover:underline">Contact</button>
          <div class="flex items-center space-x-1">
            <button>
              <img
                src="/src/assets/world.png"
                alt="World"
                class="inline-block"
              />
              <span class="uppercase">EN</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style></style>

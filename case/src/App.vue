<script setup>
import Topbar from "./components/Topbar/Topbar.vue";
import Banner from "./components/Banner/Banner.vue";
import Feature from "./components/Feature/Feature.vue";
import ProductShowcase from "./components/ProductShowcase/ProductShowcase.vue";
import JoinUsSection from "./components/JoinUsSection/JoinUsSection.vue";
import CarouselSection from "./components/CarouselSection/CarouselSection.vue";
import FeaturedCollection from "./components/FeaturedCollection/FeaturedCollection.vue";
import GlobalImpact from "./components/GlobalImpact/GlobalImpact.vue";
import Footer from "./components/Footer/Footer.vue";
</script>


<template>
  <div class="bg-[#fefbea]">
    <Topbar class="fixed z-50" />
    <Banner/>
    <ProductShowcase />
    <JoinUsSection />
    <CarouselSection />
    <FeaturedCollection />
    <GlobalImpact />
    <Footer />
  </div>
</template>

<style scoped>
  
</style>

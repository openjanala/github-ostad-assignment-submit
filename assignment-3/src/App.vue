<script setup>
import Header from "./layouts/Header.vue";

import Hero from "./components/Hero.vue";
import Features from "./components/Features.vue";
import Pricing from "./components/Pricing.vue";
import Testimonials from "./components/Testimonials.vue";
import AdvantageProducts from "./components/AdvantageProducts.vue";
import AboutUs from "./components/AboutUs.vue";
import OurNews from "./components/OurNews.vue";
import Contact from "./components/Contact.vue";

import Footer from "./layouts/Footer.vue";
</script>

<template>
  <!-- Header Section -->
  <Header></Header>

  <!-- Hero Section -->
  <Hero />

  <!-- Feature Section  -->
  <Features />

  <!-- Pricing Section  -->
  <Pricing />

  <!-- AdvantageProducts Section  -->
  <AdvantageProducts />

  <!-- Testimonials Section  -->
  <Testimonials />

  <!-- AboutUs Section  -->
  <AboutUs />

  <!-- OurNews Section  -->
  <OurNews />

  <!-- Contact Section  -->
  <Contact />

  <!-- Footer Section -->
  <Footer></Footer>
</template>

<style scoped></style>

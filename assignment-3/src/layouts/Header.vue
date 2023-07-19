<script setup>
import NavBar from "./Navbar.vue";

</script>

<template>
  
  <div>
    <div class="lines-wrap">
      <div class="lines-inner">
        <div class="lines"></div>
      </div>
    </div>

    <div class="site-mobile-menu site-navbar-target">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close">
          <span class="icofont-close js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div>

    <!-- Nav Bar Section Here-->
    <NavBar></NavBar>

  </div>
</template>

<style scoped></style>

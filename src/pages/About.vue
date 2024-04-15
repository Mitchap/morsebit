<template>
  <div>
    <div class="hidden md:block">
      <Navbar />
    </div>
    <div class="block md:hidden">
      <SideNav />
    </div>
    <main class="py-32 h-full" style="background-color: #fefefe">
      <h1 class="flex content-center text-white-100">ABOUT PAGE</h1>
    </main>
    <div>
      <TheFooter />
    </div>
  </div>
</template>
<script setup>
import Navbar from "@/components/Navbar.vue";
import SideNav from "@/components/SideNav.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<style></style>

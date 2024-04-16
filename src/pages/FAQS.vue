<template>
  <div>
    <div class="hidden md:block">
      <Navbar />
    </div>
    <div class="block md:hidden">
      <SideNav />
    </div>
    <main class="py-32 h-full" style="background-color: #fefefe">
      <h1 class="text-center font-bold text-4xl uppercase">
        Frequently Asked Questions
      </h1>
      <p class="text-center mt-5 text-lg font-medium">
        Never gonna give you up <br />
        Never gonna let you down <br />
        Never gonna run around <br />
        and desert you <br />
        Never gonna make you cry <br />
        Never gonna say goodbye Never gonna tell a lie<br />
        and hurt you<br />
        He he
      </p>
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

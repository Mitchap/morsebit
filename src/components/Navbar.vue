<template>
  <nav
    class="fixed flex flex-col top-0 w-screen text-slate-100 font-medium text-leading z-50"
    style="background-color: #1b1b1b"
  >
    <div class="mx-auto mb-2">
      <router-link to="/">
        <img
          class="w-44 lg:w-64"
          src="/images/morsebit-logo.png"
          alt="morsebit logo"
        />
      </router-link>
    </div>
    <!-- display property is added to parent div,
    and flex direction is added to child div to put each nav element side by side -->
    <div class="pb-2 mx-auto">
      <div class="flex flex-row">
        <router-link
          to="/products"
          href="#"
          class="mx-3 relative text-base w-fit block after:block after:content-[''] after:absolute after:h-[2px] hover:text-orange-400 after:bg-orange-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
        >
          <span class="hover:text-orange-400">/// PRODUCTS</span>
        </router-link>
        <router-link
          to="/about"
          href="#"
          class="mx-3 relative text-base w-fit block after:block after:content-[''] after:absolute after:h-[2px] hover:text-orange-400 after:bg-orange-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
        >
          <span class="hover:text-orange-400">/// ABOUT</span>
        </router-link>
        <router-link
          to="/contact"
          href="#"
          class="mx-3 relative text-base w-fit block after:block after:content-[''] after:absolute after:h-[2px] hover:text-orange-400 after:bg-orange-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
        >
          <span class="hover:text-orange-400">/// CONTACT</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style></style>

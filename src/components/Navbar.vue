<template>
  <nav
    class="fixed flex flex-col top-0 w-screen text-slate-100 font-medium z-50 bg-[#1b1b1b]"
  >
    <div class="mx-auto mb-2">
      <a href="/">
        <img
          class="w-64 h-[70px] py-4 my-2"
          src="/images/morsebit-logo.png"
          alt="morsebit logo"
        />
      </a>
    </div>
    <!-- display property is added to parent div,
    and flex direction is added to child div to put each nav element side by side -->
    <div class="pb-2 mx-auto">
      <div class="flex flex-row">
        <a
          href="/"
          class="mx-3 relative text-base w-fit block after:block after:content-[''] after:absolute after:h-[2px] hover:text-orange-400 after:bg-orange-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
        >
          <span class="hover:text-orange-400 uppercase">/// index</span>
        </a>
        <!-- router link for debug only. use anchor tag -->
        <!-- <router-link
        to="/products"
        class="mx-3 relative text-base w-fit block after:block after:content-[''] after:absolute after:h-[2px] hover:text-orange-400 after:bg-orange-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
      >
        <span class="hover:text-orange-400 uppercase">/// products-link</span>
      </router-link> -->
        <a
          href="/products"
          class="mx-3 relative text-base w-fit block after:block after:content-[''] after:absolute after:h-[2px] hover:text-orange-400 after:bg-orange-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
        >
          <span class="hover:text-orange-400 uppercase">/// products</span>
        </a>
        <a
          href="/about"
          class="mx-3 relative text-base w-fit block after:block after:content-[''] after:absolute after:h-[2px] hover:text-orange-400 after:bg-orange-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
        >
          <span class="hover:text-orange-400 uppercase">/// about</span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style></style>

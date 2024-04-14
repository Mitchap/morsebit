<template>
  <nav
    class="fixed flex flex-col top-0 w-screen text-slate-100 font-medium text-leading"
    style="background-color: #1b1b1b"
  >
    <RouterLink to="/">
      <img
        class="w-32 lg:w-52 mx-auto"
        src="/images/morsebit-logo.png"
        alt="morsebit logo"
      />
    </RouterLink>

    <!-- display property is added to parent div,
    and flex direction is added to child div to put each nav element side by side -->
    <div class="pb-3 mx-auto">
      <div class="flex flex-row">
        <RouterLink class="mx-3 content-center" to="/products">
          <p className="relative group text-sm lg:text-base">
            <span class="hover:text-orange-400">/// PRODUCTS</span>
            <span
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"
            ></span>
          </p>
        </RouterLink>
        <RouterLink class="mx-3 content-center" to="#">
          <p className="relative group text-sm lg:text-base">
            <span class="hover:text-orange-400">/// ABOUT</span>
            <span
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"
            ></span>
          </p>
        </RouterLink>
        <RouterLink class="mx-3 content-center" to="#">
          <p className="relative group text-sm lg:text-base">
            <span class="hover:text-orange-400">/// CONTACT</span>
            <span
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"
            ></span>
          </p>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script></script>

<style></style>

<template>
  <nav
    class="flex flex-col fixed top-0 text-slate-100 w-screen text-slate-100 font-medium text-leading pb-2.5 z-50"
    style="background-color: #1b1b1b"
  >
    <div class="mx-auto mb-1">
      <router-link to="/">
        <img
          class="w-44 h-16 py-4 my-2"
          src="/images/morsebit-logo.png"
          alt="morsebit logo"
      /></router-link>
    </div>
    <div class="flex justify-end mx-3">
      <a
        class="text-xs font-medium text-leading"
        data-bs-toggle="offcanvas"
        href="#SideNav"
        role="button"
        aria-controls="SideNav"
      >
        MENU
      </a>
    </div>

    <div
      class="offcanvas offcanvas-start text-slate-100 max-w-72"
      tabindex="-1"
      id="SideNav"
      aria-labelledby="SideNavLabel"
      style="background-color: #1b1b1b"
    >
      <div class="offcanvas-header flex justify-end">
        <button
          type="button"
          class="text-white hover:text-orange-400"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i class="fas fa-times"></i>
        </button>
      </div>
      <!-- start of sidebar links -->
      <div class="offcanvas-body">
        <div class="pb-3 mx-auto">
          <div class="flex flex-col">
            <a
              href="/"
              class="my-3 relative text-xs w-fit block after:block after:content-[''] after:absolute after:h-[2px] hover:text-orange-400 after:bg-orange-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            >
              <span class="hover:text-orange-400 uppercase">/// index</span>
            </a>
            <a
              href="/products"
              class="my-3 relative text-xs w-fit block after:block after:content-[''] after:absolute after:h-[2px] hover:text-orange-400 after:bg-orange-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            >
              <span class="hover:text-orange-400 uppercase">/// products</span>
            </a>
            <a
              href="/about"
              class="my-3 relative text-xs w-fit block after:block after:content-[''] after:absolute after:h-[2px] hover:text-orange-400 after:bg-orange-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            >
              <span class="hover:text-orange-400 uppercase">/// about</span>
            </a>
          </div>
        </div>
      </div>
      <!-- bottom of side nav -->
      <div class="offcanvas-header flex justify-end mx-auto">
        <div class="flex flex-col">
          <img
            class="w-9 mx-auto opacity-80gi"
            src="/images/logo-icon.png"
            alt="morsebit logo"
          />
          <p class="text-xs">&copy; 2024 MORSEBIT &trade;</p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script></script>

<style></style>

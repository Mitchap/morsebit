<template>
  <nav
    class="flex flex-col fixed top-0 text-slate-100 w-screen text-slate-100 font-medium text-leading hover:text-orange-400 pb-2.5"
    style="background-color: #1b1b1b"
  >
    <div class="mx-auto mb-1">
      <RouterLink to="/">
        <img class="w-44" src="/images/morsebit-logo.png" alt="morsebit logo" />
      </RouterLink>
    </div>
    <div class="flex justify-end mx-3">
      <a
        class="text-xs font-medium text-leading"
        data-bs-toggle="offcanvas"
        href="#SideNav"
        role="button"
        aria-controls="SideNav"
      >
        [ MENU ]
      </a>
    </div>

    <div
      class="offcanvas offcanvas-start text-slate-100 max-w-72"
      tabindex="-1"
      id="SideNav"
      aria-labelledby="SideNavLabel"
      style="background-color: #1b1b1b"
    >
      <div class="offcanvas-header">
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i class="fas fa-times text-white hover:text-orange-400"></i>
        </button>
      </div>
      <!-- start of sidebar links -->
      <div class="offcanvas-body">
        <div class="pb-3 mx-auto">
          <div class="flex flex-col">
            <RouterLink
              to="/products"
              href="#"
              class="my-3 relative text-xs w-fit block after:block after:content-[''] after:absolute after:h-[2px] hover:text-orange-400 after:bg-orange-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            >
              <span class="hover:text-orange-400">/// PRODUCTS</span>
            </RouterLink>
            <RouterLink
              to="/products"
              href="#"
              class="my-3 relative text-xs w-fit block after:block after:content-[''] after:absolute after:h-[2px] hover:text-orange-400 after:bg-orange-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            >
              <span class="hover:text-orange-400">/// ABOUT</span>
            </RouterLink>
            <RouterLink
              to="/products"
              href="#"
              class="my-3 relative text-xs w-fit block after:block after:content-[''] after:absolute after:h-[2px] hover:text-orange-400 after:bg-orange-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            >
              <span class="hover:text-orange-400">/// CONTACT</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style></style>

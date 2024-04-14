<template>
  <nav
    class="fixed top-0 text-slate-100 w-screen text-slate-100 font-medium text-leading hover:text-orange-400 pb-2.5"
    style="background-color: #1b1b1b"
  >
    <RouterLink to="/">
      <img
        class="w-32 lg:w-52 mx-auto"
        src="/images/morsebit-logo.png"
        alt="morsebit logo"
      />
    </RouterLink>
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
            <RouterLink class="my-3 content-center" to="/products">
              <p className="relative group text-sm lg:text-base">
                <span class="hover:text-orange-400">/// PRODUCTS</span>
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"
                ></span>
              </p>
            </RouterLink>
            <RouterLink class="my-3 content-center" to="#">
              <p className="relative group text-sm lg:text-base">
                <span class="hover:text-orange-400">/// ABOUT</span>
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"
                ></span>
              </p>
            </RouterLink>
            <RouterLink class="my-3 content-center" to="#">
              <p className="relative group text-sm lg:text-base">
                <span class="hover:text-orange-400">/// CONTACT</span>
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"
                ></span>
              </p>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style></style>

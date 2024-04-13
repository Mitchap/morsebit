<template>
  <nav
    class="fixed flex flex-row top-0 w-screen text-slate-100"
    style="background-color: #1b1b1b"
  >
    <RouterLink class="mx-3" to="/">
      <img
        class="w-32 lg:w-52"
        src="/images/morsebit-logo.png"
        alt="morsebit logo"
      />
    </RouterLink>
    <RouterLink class="mx-3 content-center hidden md:block" to="/products">
      <p className="relative group text-sm lg:text-base">
        <span class="hover:text-orange-400">PRODUCTS</span>
        <span
          className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"
        ></span>
      </p>
    </RouterLink>
    <RouterLink class="mx-3 content-center hidden md:block" to="#">
      <p className="relative group text-sm lg:text-base">
        <span class="hover:text-orange-400">ABOUT</span>
        <span
          className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"
        ></span>
      </p>
    </RouterLink>
    <!-- search input -->
    <div class="mx-3 my-auto hidden md:block">
      <form method="GET">
        <div class="relative text-gray-600 focus-within:text-gray-400">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              class="p-1 focus:outline-none focus:shadow-outline"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                class="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="q"
            class="py-2 text-sm text-white bg-zinc-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
            placeholder="Search..."
            autocomplete="off"
          />
        </div>
      </form>
    </div>
    <span
      class="mt-10 fixed flex flex-row w-screen text-slate-100"
      style="background-color: #1b1b1b"
    >
      <RouterLink class="mx-3 content-center md:hidden block" to="/products">
        <p className="relative group text-sm lg:text-base">
          <span class="hover:text-orange-400">PRODUCTS</span>
          <span
            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"
          ></span>
        </p>
      </RouterLink>
      <RouterLink class="mx-3 content-center md:hidden block" to="#">
        <p className="relative group text-sm lg:text-base">
          <span class="hover:text-orange-400">ABOUT</span>
          <span
            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"
          ></span>
        </p>
      </RouterLink>
      <!-- search input -->
      <div class="mx-3 my-auto md:hidden block">
        <form method="GET">
          <div class="relative text-gray-600 focus-within:text-gray-400">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="submit"
                class="p-1 focus:outline-none focus:shadow-outline"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="w-6 h-6"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="q"
              class="py-2 text-sm text-white bg-zinc-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
              placeholder="Search..."
              autocomplete="off"
            />
          </div>
        </form>
      </div>
    </span>
  </nav>

  <div class="mb-32"></div>
</template>

<script setup></script>

<style></style>

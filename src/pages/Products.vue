<template>
  <div>
    <div class="hidden md:block">
      <Navbar />
    </div>
    <div class="block md:hidden">
      <SideNav />
    </div>

    <main class="mt-28 h-full" style="background-color: #fefefe">
      <div class="text-center p-5 text-white bg-black">
        <h1 class="text-xl font-medium uppercase">product categories</h1>
        <p class="text-base mt-1">
          A collective showcase of equipments offered
        </p>
      </div>
      <div class="flex flex-col lg:flex-row">
        <div
          class="mx-auto my-5 max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#" class="">
            <div
              class="relative text-center transform transition-transform duration-300 hover:scale-110"
            >
              <img
                class="object-cover w-80 h-96"
                src="/images/products/image6.jpg"
                alt=""
              />

              <div class="w-full">
                <h1 class="text-white text-base bg-black p-3 font-medium">
                  DYNAMIC BELT SYSTEM
                </h1>
              </div>
            </div>
          </a>
        </div>

        <div
          class="mx-auto my-5 max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#" class="">
            <div
              class="relative text-center transform transition-transform duration-300 hover:scale-110"
            >
              <img
                class="object-cover w-80 h-96"
                src="/images/products/image4.png"
                alt=""
              />
              <div class="w-full">
                <h1 class="text-white text-base bg-black p-3 font-medium">
                  MESSENGER SLING SYSTEM
                </h1>
              </div>
            </div>
          </a>
        </div>

        <div
          class="mx-auto my-5 max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#" class="">
            <div
              class="relative text-center transform transition-transform duration-300 hover:scale-110"
            >
              <img
                class="object-cover w-80 h-96"
                src="/images/products/image5.jpg"
                alt=""
              />

              <div class="w-full">
                <h1 class="text-white text-base bg-black p-3 font-medium">
                  CUSTOM ACCESSORIES
                </h1>
              </div>
            </div>
          </a>
        </div>
      </div>
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

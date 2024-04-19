<template>
  <div>
    <main class="mt-28 pb-28 h-full" style="background-color: #fefefe">
      <ProductCarousel />

      <div class="text-center p-5 text-white bg-black">
        <h1 class="text-base lg:text-lg font-medium uppercase">
          product categories
        </h1>
        <p class="text-sm mt-1">A collective showcase of equipments offered</p>
      </div>

      <div class="flex flex-col lg:flex-row">
        <div
          class="mx-auto my-5 max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="text-zinc-100 hover:text-orange-400 text-center">
            <div class="overflow-hidden">
              <img
                src="/images/products/image6.jpg"
                class="hover:scale-110 transition duration-500 cursor-pointer object-cover w-80 h-96"
              />
            </div>

            <div class="w-full">
              <h1 class="text-base bg-black p-3 font-medium">
                DYNAMIC BELT SYSTEMS
              </h1>
            </div>
          </div>
        </div>

        <div
          class="mx-auto my-5 max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="text-zinc-100 hover:text-orange-400 text-center">
            <div class="overflow-hidden">
              <img
                src="/images/products/image4.png"
                class="hover:scale-110 transition duration-500 cursor-pointer object-cover w-80 h-96"
              />
            </div>

            <div class="w-full">
              <h1 class="text-base bg-black p-3 font-medium">
                MESSENGER SLING SYSTEMS
              </h1>
            </div>
          </div>
        </div>
        <div
          class="mx-auto my-5 max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="text-zinc-100 hover:text-orange-400 text-center">
            <div class="overflow-hidden">
              <img
                src="/images/products/image5.jpg"
                class="hover:scale-110 transition duration-500 cursor-pointer object-cover w-80 h-96"
              />
            </div>

            <div class="w-full">
              <h1 class="text-base bg-black p-3 font-medium">
                CUSTOM ACCESSORIES
              </h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import ProductCarousel from "@/components/ProductCarousel.vue";
</script>

<style></style>

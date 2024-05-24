<template>
  <div>
    <main class="mt-32 pb-24 h-full bg-[#fefefe]">
      <ProductCarousel />

      <div class="text-center p-5 text-white bg-black">
        <h1 class="text-base lg:text-lg font-medium uppercase">
          product categories
        </h1>
        <p class="text-sm mt-1">A collective showcase of equipments offered</p>
      </div>
      <div class="text-center mt-4 mb-10 lg:mb-20 relative">
        <router-link to="/products">
          <div class="center-center z-10">
            <div class="btn-glitch-fill text-lg lg:text-xl">
              <span class="text"
                >// <span class="text-decoration">_</span> view all
                products</span
              >
            </div>
          </div>
        </router-link>
      </div>
      <div
        class="flex flex-col lg:flex-row justify-center items-center gap-x-12"
      >
        <div v-for="category in categories" v-motion-slide-visible-once-bottom>
          <router-link :to="category.link">
            <div
              class="mx-auto my-5 max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div class="text-zinc-100 hover:text-orange-400 text-center">
                <div class="overflow-hidden">
                  <img
                    :src="category.image"
                    class="hover:scale-110 transition duration-1000 cursor-pointer object-cover w-80 h-96"
                    loading="lazy"
                  />
                </div>
                <div></div>
                <div class="w-full">
                  <h1 class="text-base bg-black p-3 font-medium">
                    {{ category.name }}
                  </h1>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProductCarousel from "@/components/ProductCarousel.vue";

const categories = ref([
  {
    name: " BELT SYSTEMS",
    image: "/images/products/light-gray-belt.jpg",
    alt: "magnetic belt with light gray strap",
    link: "/beltsystems",
  },
  {
    name: " SLING SYSTEMS",
    image: "/images/products/sling-system-card.jpg",
    alt: "male wearing all black outfit with a technical messenger bag sling",
    link: "/slingsystems",
  },
  {
    name: "CUSTOM ACCESSORIES",
    image: "/images/products/accessories.jpg",
    alt: "assortment of a wallet, molle velcro patch, a polymer carabineer, and magnetic buckles",
    link: "customaccessories",
  },
]);
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");
</style>

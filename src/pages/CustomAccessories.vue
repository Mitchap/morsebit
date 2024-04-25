<template>
  <div>
    <main class="mt-26 py-32 h-full bg-[#fefefe]">
      <!-- products list -->
      <!-- <div
        class="fixed w-screen p-2 z-40 bg-[#fefefe] shadow -mt-5 lg:-mt-1 flex items-center justify-center"
      >
        <input
          id="search"
          type="search"
          v-model="search"
          placeholder="Search products ..."
          class="w-60 lg:w-[30rem] p-2 bg-stone-200 outline-none"
        />
      </div> -->
      <div class="text-center mt-10 pt-5 text-[#1b1b1b]">
        <h1 class="text-lg lg:text-xl font-medium uppercase">
          custom accessories
        </h1>
        <h1 class="text-base">⠍⠕⠗⠎⠼⠑⠼⠃⠼⠊⠞</h1>
      </div>
      <div
        class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
      >
        <div
          class="grid grid-cols-1 gap-x-6 gap-y-10 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
        >
          <span
            v-if="filteredProducts.length === 0"
            class="flex items-center justify-center text-gray-500 text-base"
            >No products found.</span
          >
          <router-link
            v-for="product in filteredProducts"
            :key="product.id"
            :to="product.route"
            class="group"
          >
            <div v-if="product.category === 'custom'">
              <div
                class="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
              >
                <img
                  :src="product.cardImage"
                  :alt="product.imageAlt1"
                  class="h-full w-full object-cover object-center transition duration-500 group-hover:opacity-75"
                />
              </div>
              <p class="mt-3 text-sm text-gray-500 font-medium">
                {{ product.variant }} Variant
              </p>
              <h3 class="mt-1 text-md text-gray-700 font-semibold">
                {{ product.name }}
              </h3>
              <p
                class="mt-1 text-lg font-medium text-orange-500 text-decoration"
              >
                ₱{{ product.price }}
              </p>
            </div>
          </router-link>
        </div>
        <div class="text-center">
          <h1 class="text-lg font-medium uppercase">
            category null temporarily
          </h1>
          <p class="text-md">Resynchronize with system</p>
          <div class="center-center browse">
            <router-link to="/products">
              <div class="btn-glitch-fill text-lg lg:text-xl">
                <span class="text"
                  >// <span class="text-decoration">_</span> all products
                </span>
                <span class="decoration ms-3"> &rArr;</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
//products.json is in root directory.
import productData from "../../products.json";

export default {
  data() {
    return {
      products: productData,
      search: "",
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) =>
        product.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>

<style>
@media screen and (max-width: 760px) {
  .browse {
    margin-top: 40px;
  }
}
</style>

<template>
  <div>
    <main class="mt-26 py-32 h-full bg-[#fefefe]">
      <!-- products list -->
      <div
        class="fixed w-screen p-2 z-40 bg-[#fefefe] shadow -mt-5 lg:-mt-1 flex items-center justify-center"
      >
        <input
          id="search"
          type="search"
          v-model="search"
          placeholder="Search products ..."
          class="w-60 lg:w-[30rem] p-2 bg-stone-200 outline-none"
        />
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
            <div
              class="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
            >
              <img
                :src="product.cardImage"
                :alt="product.imageAlt1"
                class="h-full w-full object-cover object-center transition duration-500 group-hover:opacity-75"
              />
            </div>
            <h3 class="mt-4 text-md text-gray-700 font-semibold">
              {{ product.name }}
            </h3>
            <p class="mt-1 text-lg font-medium text-orange-500 text-decoration">
              {{ formatPrice(product.price) }}
            </p>
          </router-link>
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
  methods: {
    formatPrice(price) {
      // Define a method to format the price with the peso sign.
      return " ₱" + price;
    },
  },
};
</script>

<style></style>

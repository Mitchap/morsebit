<template>
  <div>
    <main class="mt-26 py-32 h-full bg-[#fefefe]">
      <!-- products list -->
      <div
        class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
      >
        <div
          class="grid grid-cols-1 gap-x-6 gap-y-10 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
        >
          <a
            v-for="product in products"
            :key="product.id"
            :href="product.href"
            class="group"
          >
            <router-link :to="product.route" class="group">
              <div
                class="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
              >
                <img
                  :src="product.imageSrc1"
                  :alt="product.imageAlt1"
                  class="h-full w-full object-cover object-center transition duration-500 group-hover:opacity-75"
                />
              </div>
              <h3 class="mt-4 text-md text-gray-700 font-semibold">
                {{ product.name }}
              </h3>

              <p class="mt-1 text-lg font-medium text-orange-500">
                {{ product.price }}
              </p>
            </router-link>
          </a>
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
    return { products: productData };
  },
};
</script>

<style></style>

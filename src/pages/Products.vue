<template>
  <div>
    <main class="mt-26 py-32 h-full bg-[#fefefe]">
      <!-- products list -->
      <div
        class="fixed w-screen p-2 z-40 -mt-5 lg:-mt-1 flex justify-end bg-[#fefefe]"
      >
        <button
          class="text-sm lg:text-base py-2 px-4"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasTop"
          aria-controls="offcanvasTop"
        >
          <i class="fa-solid fa-magnifying-glass"></i> SEARCH
        </button>
      </div>

      <div
        class="offcanvas offcanvas-top search-bar"
        tabindex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div class="offcanvas-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body text-center overflow-hidden">
          <div>
            <input
              id="search"
              type="search"
              v-model="search"
              placeholder="Search products ..."
              class="h-14 w-60 lg:w-[50rem] p-2 bg-stone-300 outline-none"
            />
          </div>
          <!-- component -->
          <div class="flex flex-row justify-center p-2">
            <div>
              <input
                type="radio"
                name="option"
                id="all"
                value="all"
                class="peer hidden"
                v-model="selectedCategory"
                checked
              />
              <label
                for="all"
                class="block cursor-pointer select-none p-2 text-center text-sm lg:text-base peer-checked:bg-[#1b1b1b] peer-checked:font-semibold peer-checked:text-white uppercase"
                >all</label
              >
            </div>

            <div>
              <input
                type="radio"
                name="option"
                id="belt"
                value="belt"
                class="peer hidden"
                v-model="selectedCategory"
              />
              <label
                for="belt"
                class="block cursor-pointer select-none p-2 text-center text-sm lg:text-base peer-checked:bg-[#1b1b1b] peer-checked:font-semibold peer-checked:text-white uppercase"
                >belts</label
              >
            </div>

            <div>
              <input
                type="radio"
                name="option"
                id="sling"
                value="sling"
                class="peer hidden"
                v-model="selectedCategory"
              />
              <label
                for="sling"
                class="block cursor-pointer select-none p-2 text-center text-sm lg:text-base peer-checked:bg-[#1b1b1b] peer-checked:font-semibold peer-checked:text-white uppercase"
                >slings</label
              >
            </div>

            <div>
              <input
                type="radio"
                name="option"
                id="custom"
                value="custom"
                class="peer hidden"
                v-model="selectedCategory"
              />
              <label
                for="custom"
                class="block cursor-pointer select-none p-2 text-center text-sm lg:text-base peer-checked:bg-[#1b1b1b] peer-checked:font-semibold peer-checked:text-white uppercase"
                >customs</label
              >
            </div>
          </div>
        </div>
      </div>

      <div
        class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
      >
        <span
          v-if="filteredProducts.length === 0"
          class="text-gray-500 text-base flex justify-center"
          >No products found.</span
        >
        <div
          class="grid gap-x-6 gap-y-10 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
        >
          <div
            v-for="product in filteredProducts"
            :key="product.id"
            v-motion-slide-visible-bottom
          >
            <a :href="product.route" class="group">
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
                {{ product.productID }}
              </h3>
              <p
                class="mt-1 text-lg font-medium text-orange-500 text-decoration"
              >
                ₱{{ product.price }}
              </p>
            </a>
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
      selectedCategory: "all",
      search: "",
    };
  },
  computed: {
    filteredProducts() {
      return this.products
        .filter((product) => {
          const isCategoryMatch =
            this.selectedCategory === "all" ||
            product.category === this.selectedCategory;
// search function checks selected object data for match e.g. product.name
          const isSearchMatch =
            this.search === "" ||
            product.name.toLowerCase().includes(this.search.toLowerCase()) ||
            product.categoryPlural.toLowerCase().includes(this.search.toLowerCase()) ||
            product.productID.toLowerCase().includes(this.search.toLowerCase());

          return isCategoryMatch && isSearchMatch;
        })
        .sort((a, b) => {
          // Sort products based on category and ID
          if (a.category < b.category) return -1;
          if (a.category > b.category) return 1;
          return 0;
        });
    },
  },
};
</script>

<style>
.search-bar {
  max-height: 200px !important;
}
</style>

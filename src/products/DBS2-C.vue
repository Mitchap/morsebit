<template>
  <div>
    <main class="mt-26 lg:mt-28 py-32 h-full bg-[#fefefe]">
      <div class="flex justify-end me-4 mb-10">
        <a
          @click="$router.go(-1)"
          class="text-xs lg:text-base font-medium text-gray-900 hover:text-orange-500 cursor-pointer"
          >[ BACK ]</a
        >
      </div>
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4">
          <div class="md:flex-1 px-4" v-motion-fade-visible>
            <div id="carouselIndicators" class="carousel slide mb-4">
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselIndicators"
                  data-bs-slide-to="0"
                  class="active indicator"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  class="indicator"
                  data-bs-target="#carouselIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  class="indicator"
                  data-bs-target="#carouselIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    :src="selectedProduct.imageSrc1"
                    class="d-block w-100"
                    :alt="selectedProduct.imageAlt1"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    :src="selectedProduct.imageSrc2"
                    class="d-block w-100"
                    :alt="selectedProduct.imageAlt2"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    :src="selectedProduct.imageSrc3"
                    class="d-block w-100"
                    :alt="selectedProduct.imageAlt3"
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            <!-- order button -->
            <div class="flex justify-end mb-4">
              <a
                href="https://www.facebook.com/MORSEBlT"
                class="text-zinc-100 text-xs lg:text-base px-4 py-2 transition bg-black/90 hover:bg-orange-400 hover:text-black uppercase"
              >
                order in facebook
              </a>
            </div>
          </div>
          <div class="md:flex-1 px-4">
            <h2
              class="text-[22px] lg:text-2xl font-bold text-[#1b1b1b] mb-2 uppercase"
            >
              {{ selectedProduct.name }}
            </h2>
            <p class="text-gray-600 text-sm mb-2">
              <span class="font-bold text-gray-700">Colors: </span>
              {{ selectedProduct.color }}
            </p>
            <p class="text-gray-600text-sm mb-4">
              <span class="font-bold text-gray-700">Variant: </span>
              {{ selectedProduct.variant }}
            </p>
            <div class="flex mb-4">
              <div class="mr-4">
                <span class="font-bold text-gray-700">Price: </span>
                <span class="text-orange-500 font-medium">
                  ₱{{ selectedProduct.price }}</span
                >
              </div>
              <div>
                <span class="font-bold text-gray-700">Availability:</span>
                <span class="text-gray-600"> In Stock</span>
              </div>
            </div>

            <div class="mb-12">
              <span class="font-bold text-gray-700">Product Description:</span>
              <ul class="text-gray-700 text-sm font-medium mt-2 list-disc ms-4">
                <li class="mb-2">quick-release magnetic buckle</li>
                <li class="mb-2">double-bar D-Ring for quick adjustment feature</li>
                <li class="mb-2">YKK D-Rings</li>
                <li class="mb-2">belt clip</li>
                <li class="mb-2">1 inch / 25mm wide, 1.5mm thick textured polyamide webbing</li>
                <li class="mb-2">double-stitched load bearing points</li>
              </ul>
            </div>
            <div>
              <span class="text-sm font-medium italic text-gray-500"
                >*Disclaimer</span
              >
              <p class="text-gray-400 text-sm mt-2 italic">
                Products may differ slightly due to lighting conditions.<br />
                Product may exhibit minor scratches due to supplier factors.
                Functionality is not affected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import productData from "../../products.json";

export default {
  data() {
    return {
      products: productData,
      selectedProductId: 3, // Change this to the desired product ID
    };
  },
  computed: {
    selectedProduct() {
      return this.products.find(
        (product) => product.id === this.selectedProductId
      );
    },
  },
};
</script>

<style></style>

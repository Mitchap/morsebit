<template>
  <div>
    <main class="mt-26 py-32 h-full bg-[#fefefe]">
      <!-- products list -->
      <div
        class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
      >
        <div
          class="grid grid-cols-1 gap-x-6 gap-y-10 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
        >
          <a
            v-for="product in products"
            :key="product.id"
            :href="product.href"
            class="group"
          >
            <div
              class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
            >
              <img
                :src="product.imageSrc"
                :alt="product.imageAlt"
                class="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 class="mt-4 text-md text-gray-700 font-semibold">
              {{ product.name }}
            </h3>
            <h3 class="mt-2 text-sm text-gray-500">
              {{ product.color }}
            </h3>
            <p class="mt-1 text-lg font-medium text-orange-600">
              {{ product.price }}
            </p>
          </a>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
const products = [
  {
    id: 1,
    name: "Dynamic Belt - System 1",
    href: "#",
    price: "₱399",
    color: "Army Green",
    imageSrc: "/images/products/image1.png",
    imageAlt: "Magnetic buckle with army green strap and plastic buckles",
  },
  {
    id: 2,
    name: "Dynamic Belt - System 1",
    href: "#",
    price: "₱399",
    color: "Light Gray",
    imageSrc: "/images/products/image2.png",
    imageAlt: "Magnetic buckle with light gray strap and plastic buckles.",
  },
  {
    id: 3,
    name: "Dynamic Belt - System 1",
    href: "#",
    price: "₱399",
    color: "Black",
    imageSrc: "/images/products/image3.png",
    imageAlt: "Magnetic buckle with army green strap and plastic buckles",
  },
  {
    id: 4,
    name: "Dynamic Belt - System 1",
    href: "#",
    price: "₱399",
    color: "Army Green",

    imageSrc: "/images/products/image1.png",
    imageAlt: "Magnetic buckle with army green strap and plastic buckles",
  },
  {
    id: 5,
    name: "Dynamic Belt - System 1",
    href: "#",
    price: "₱399",
    color: "Army Green",
    imageSrc: "/images/products/image1.png",
    imageAlt: "Magnetic buckle with army green strap and plastic buckles",
  },
  {
    id: 6,
    name: "Dynamic Belt - System 1",
    href: "#",
    price: "₱399",
    color: "Army Green",
    imageSrc: "/images/products/image1.png",
    imageAlt: "Magnetic buckle with army green strap and plastic buckles",
  },
  {
    id: 7,
    name: "Dynamic Belt - System 1",
    href: "#",
    price: "₱399",
    color: "Army Green",
    imageSrc: "/images/products/image1.png",
    imageAlt: "Magnetic buckle with army green strap and plastic buckles",
  },
];
</script>

<style>
@media (max-width: 640px) {
  /* Apply red border to products to see if they are sitting side by side */
  .sm\:grid-cols-2 > * {
    border: 1px solid red;
  }
}
</style>

<template>
  <div class="hidden md:block">
    <Navbar />
  </div>
  <div class="block md:hidden">
    <SideNav />
  </div>

  <main class="py-32" style="background-color: #fefefe">
    <div class="flex flex-col lg:flex-row">
      <div
        class="mx-auto my-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img class="rounded-t-lg" src="/images/products/image3.png" alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Hatdog sa ref ng ofw 2021
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Cyka Blyat Lo siento no hablo ingles nyet nyet nyet
          </p>
        </div>
      </div>

      <div
        class="mx-auto my-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img class="rounded-t-lg" src="/images/products/image1.png" alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Ding Dong Ding Dong
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Hark how the bells Sweet silver bells All seem to say Throw cares
            away
          </p>
        </div>
      </div>

      <div
        class="mx-auto my-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img class="rounded-t-lg" src="/images/products/image2.png" alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Gerard show me da Way
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            When I was a young boy My father took me into the city To see a
            marching band
          </p>
        </div>
      </div>
    </div>
  </main>
  <div>
    <TheFooter />
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import SideNav from "@/components/SideNav.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<style></style>

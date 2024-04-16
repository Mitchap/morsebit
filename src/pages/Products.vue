<template>
  <div>
    <div class="hidden md:block">
      <Navbar />
    </div>
    <div class="block md:hidden">
      <SideNav />
    </div>

    <main class="mt-28 h-full" style="background-color: #fefefe">
      <section id="banner">
        <div
          class="d-flex align-items-center justify-content-center"
          style="height: 100%"
        ></div>
      </section>
      <div class="flex flex-col lg:flex-row">
        <div
          class="mx-auto my-5 max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#" class="">
            <div class="relative text-center">
              <img
                class="object-cover w-80 h-96"
                src="/images/products/image6.jpg"
                alt=""
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"
              ></div>
              <div class="absolute bottom-0 w-full">
                <h1 class="text-white text-base bg-black p-3 fw-medium">
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
            <div class="relative text-center">
              <img
                class="object-cover w-80 h-96"
                src="/images/products/image4.png"
                alt=""
              />
              <div class="absolute bottom-0 w-full">
                <h1 class="text-white text-base bg-black p-3 fw-medium">
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
            <div class="relative text-center">
              <img
                class="object-cover w-80 h-96"
                src="/images/products/image5.jpg"
                alt=""
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-35"
              ></div>
              <div class="absolute bottom-0 w-full">
                <h1 class="text-white text-base bg-black p-3 fw-medium">
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

<style>
#banner {
  background: url(../images/banner2.png);
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  height: 50vh;
  margin-bottom: 50px;
}
</style>

<template>
  <div class="text-center p-2 text-black bg-[#fefefe]">
    <h1 class="text-xs lg:text-base">
      Free shipping within Escalante & Sagay City Proper, or for orders over
      ₱1000
    </h1>
  </div>
  <div class="text-center p-5 text-orange-400 bg-black">
    <h1 class="text-lg lg:text-xl font-medium uppercase">
      new release | db-s2 carbon
    </h1>
  </div>
  <div
    id="carouselExampleCaptions"
    class="carousel slide carousel-fade w-full h-full"
    data-bs-ride="carousel"
    v-motion-fade-visible-once
  >
    <div class="carousel-indicators flex justify-end grid">
      <div class="text-center mb-5 relative">
        <router-link to="/dbs2-c">
          <div class="center-center">
            <div class="btn-glitch-fill text-lg lg:text-xl">
              <span class="text"
                >// <span class="text-decoration">_</span> shop now</span
              >
            </div>
          </div>
        </router-link>
      </div>
      <div class="col-start-1 text-center">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>
    </div>
    <!-- carousel images -->
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="2000">
        <img
          src="/images/products/dbs2-blk-c.jpg"
          class="d-block w-100"
          alt="magnetic belt with brand logo, product name, and disclaimer text"
        />
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img
          src="/images/products/dbs2-grn-c.jpg"
          class="d-block w-100"
          alt="magnetic belt with brand logo, product name, and disclaimer text"
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<style>
.text-shadow {
  text-shadow: 2px 0px 4px rgba(0, 0, 0, 0.5);
}
</style>

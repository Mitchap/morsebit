<template>
  <div class="text-center p-5 text-orange-400 bg-black">
    <h1 class="text-lg lg:text-xl font-medium uppercase">
      new release | db-s1
    </h1>
  </div>
  <div
    id="carouselExampleCaptions"
    class="carousel slide carousel-fade"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators flex justify-end grid">
      <div class="col-start-1">
        <a
          href="#"
          type="button"
          class="text-zinc-100 text-xs lg:text-base font-medium px-4 py-2 transition bg-black/90 hover:bg-orange-400 hover:text-black uppercase"
          >shop now</a
        >
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
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
    </div>
    <!-- carousel images -->
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="2000">
        <img
          src="/images/products/dbs1-blk.png"
          class="d-block w-100"
          alt="magnetic belt with brand logo, product name, and disclaimer text"
        />
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img
          src="/images/products/dbs1-ag.png"
          class="d-block w-100"
          alt="magnetic belt with brand logo, product name, and disclaimer text"
        />
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img
          src="/images/products/dbs1-cm.png"
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

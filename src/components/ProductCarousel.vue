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
    <div class="carousel-indicators flex justify-end">
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
    <!-- carousel images -->
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="2000">
        <img
          src="/images/products/image1.png"
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption flex justify-end">
          <a
            href="#"
            type="button"
            class="text-zinc-100 text-xs lg:text-base px-4 py-2 transition bg-black/90 hover:bg-neutral-800 uppercase"
            >shop now</a
          >
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img
          src="/images/products/image2.png"
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption flex justify-end">
          <a
            href="#"
            type="button"
            class="zinc-100 text-xs lg:text-base px-4 py-2 transition bg-black/90 hover:bg-neutral-800 uppercase"
            >shop now</a
          >
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img
          src="/images/products/image3.png"
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption flex justify-end">
          <a
            href="#"
            type="button"
            class="zinc-100 text-xs lg:text-base px-4 py-2 transition bg-black/90 hover:bg-neutral-800 uppercase"
            >shop now</a
          >
        </div>
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

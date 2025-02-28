<template>
  <div>
    <div id="home" ref="vantaRef" class="h-screen bg-[#e3e3e3]">
      <div class="translate-y-64">
        <img
          src="/images/logo-and-text.png"
          class="w-36 lg:w-56 mx-auto py-auto"
          alt="transparent morsebit logo in black"
        />
        <h1
          class="text-center font-semibold text-xl lg:text-2xl uppercase font-[VT323,mono]"
        >
          404 error
        </h1>
        <p class="text-md font-regular text-center">
          Resynchronize with system
        </p>
        <div class="absolute left-1/2 translate-x-[-50%] mt-4">
          <a href="/">
            <div class="btn-glitch-fill text-lg lg:text-xl">
              <span class="text"
                >// <span class="text-decoration">_</span> RESYNC
              </span>
              <span class="decoration ms-3"> &rArr;</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DOTS from "vanta/dist/vanta.dots.min";

export default {
  mounted() {
    this.vantaEffect = DOTS({
      el: this.$refs.vantaRef,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x434141,
      backgroundColor: 0xe3e3e3,
      size: 3.3,
      spacing: 70.0,
      showLines: false,
    });
  },
  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  },
};
</script>

<style></style>

<template>
  <div class="flex justify-center h-screen preloader">


    <div class="loader"></div> */

  </div>
</template>

<script>

//  loading process
window.addEventListener("load", () => {
      const loader = document.querySelector(".preloader");

      loader.classList.add("preloader--hidden");


    });
</script>

<style>


.preloader {
  background: #1b1b1b center;
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: 99999;
}
.preloader--hidden {
  transition: ease-out 300ms;
  transition-delay: 700ms;
  opacity: 0.5;
  visibility: hidden;
}
.loader {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 6rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
}
.loader:before,
.loader:after {
  content: "";
  position: absolute;
  border-radius: 50%;
  animation: pulsOut 1.8s ease-in-out infinite;
  filter: drop-shadow(0 0 1rem rgba(255, 255, 255, 0.75));
}
.loader:before {
  width: 100%;
  padding-bottom: 100%;
  box-shadow: inset 0 0 0 1rem #fff;
  animation-name: pulsIn;
}
.loader:after {
  width: calc(100% - 2rem);
  padding-bottom: calc(100% - 2rem);
  box-shadow: 0 0 0 0 #fff;
}

@keyframes pulsIn {
  0% {
    box-shadow: inset 0 0 0 1rem #fff;
    opacity: 1;
  }
  50%, 100% {
    box-shadow: inset 0 0 0 0 #fff;
    opacity: 0;
  }
}

@keyframes pulsOut {
  0%, 50% {
    box-shadow: 0 0 0 0 #fff;
    opacity: 0;
  }
  100% {
    box-shadow: 0 0 0 1rem #fff;
    opacity: 1;
  }
}
    
</style>

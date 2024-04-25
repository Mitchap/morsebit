<template>
  <div>
    <main class="h-screen bg-[#fefefe] overflow-hidden">
      <div class="translate-y-64">
        <img
          src="/images/logo-and-text.png"
          class="w-36 lg:w-56 mx-auto py-auto"
          alt="morsebit logo in landscape"
        />
        <h1
          class="text-center font-bold text-xl lg:text-2xl uppercase font-[VT323,mono]"
        >
          404 error
        </h1>
        <p class="text-md text-center">Resynchronize with system</p>
        <div class="absolute left-1/2 translate-x-[-50%] mt-2">
          <router-link to="/">
            <div class="btn-glitch-fill text-lg lg:text-xl">
              <span class="text"
                >// <span class="text-decoration">_</span> RESYNC
              </span>
              <span class="decoration ms-3"> &rArr;</span>
            </div>
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup></script>

<style></style>

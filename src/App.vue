<template>
    <div class="overflow-auto">
      <RouterView v-if="!isLoading" />
      <loading-animation v-if="isLoading"></loading-animation>
    </div>
  </template>
  
  <script>
  import LoadingAnimation from './components/LoadingAnimation.vue';
  
  export default {
    data() {
      return {
        isLoading: true
      }
    },
    components: {
      LoadingAnimation
    },
    mounted() {
      // Simulate a delay of 2 seconds before hiding the loading animation
      setTimeout(() => {
        this.isLoading = false;
      }, 5000);
    }
  }
  </script>
  
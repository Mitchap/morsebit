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
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    }
  }
  </script>
  
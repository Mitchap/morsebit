<template>
  <div class="overflow-hidden">
    <div v-if="isLoading">
      <LoadingAnimation />
    </div>
    <div v-else>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import LoadingAnimation from "./components/LoadingAnimation.vue";

export default {
  data() {
    return {
      isLoading: true,
    };
  },
  components: {
    LoadingAnimation,
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 200);
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <div class="overflow-x-hidden">
    <!-- Navbar component, only displayed on certain routes -->
    <div class="hidden md:block" v-if="shouldShowNavbar">
      <Navbar />
    </div>

    <!-- SideNav component, only displayed on certain routes -->
    <div class="block md:hidden" v-if="shouldShowSideNav">
      <SideNav />
    </div>

    <!-- Loading animation, displayed while loading -->
    <div v-if="isLoading">
      <LoadingAnimation />
    </div>

    <!-- Main content area -->
    <div v-else>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>

    <!-- Footer component, only displayed on certain routes -->
    <div v-if="shouldShowFooter">
      <TheFooter />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import Navbar from "@/components/Navbar.vue";
import SideNav from "@/components/SideNav.vue";
import TheFooter from "@/components/TheFooter.vue";
import LoadingAnimation from "@/components/LoadingAnimation.vue";

const route = useRoute();

const isLoading = ref(true);

// Compute whether each component should be shown based on the current route
const shouldShowNavbar = computed(() => route.path !== "/notfound");
const shouldShowSideNav = computed(() => route.path !== "/notfound");
const shouldShowFooter = computed(() => route.path !== "/notfound");

// Simulate loading process
setTimeout(() => {
  isLoading.value = false;
}, 200);
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

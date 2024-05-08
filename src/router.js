import { createRouter, createWebHistory } from "vue-router";
import Index from "@/pages/Index.vue";
import NotFound from "@/components/NotFound.vue";

// Unique keys are added to ensure remount of pages
const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },

  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Index,
      props: { key: "index" },
    },
    {
      path: "/products",
      component: () => import("@/pages/Products.vue"),
      props: { key: "products" },
    },
    {
      path: "/beltsystems",
      component: () => import("@/pages/BeltSystems.vue"),
      props: { key: "beltsystems" },
    },
    {
      path: "/slingsystems",
      component: () => import("@/pages/SlingSystems.vue"),
      props: { key: "slingsystems" },
    },
    {
      path: "/customaccessories",
      component: () => import("@/pages/CustomAccessories.vue"),
      props: { key: "customaccessories" },
    },
    {
      path: "/dbs1",
      component: () => import("@/products/DBS1.vue"),
      props: { key: "dbs1" },
    },
    {
      path: "/dbs2-ag",
      component: () => import("@/products/DBS2-AG.vue"),
      props: { key: "dbs2-ag" },
    },
    {
      path: "/dbs2-c",
      component: () => import("@/products/DBS2-C.vue"),
      props: { key: "dbs2-c" },
    },
    {
      path: "/about",
      component: () => import("@/pages/About.vue"),
      props: { key: "about" },
    },
    {
      path: "/faqs",
      component: () => import("@/pages/FAQS.vue"),
      props: { key: "faqs" },
    },
    {
      path: "/privacypolicy",
      component: () => import("@/pages/PrivacyPolicy.vue"),
      props: { key: "privacypolicy" },
    },
    {
      path: "/returnpolicy",
      component: () => import("@/pages/ReturnPolicy.vue"),
      props: { key: "returnpolicy" },
    },
    {
      path: "/terms",
      component: () => import("@/pages/Terms.vue"),
      props: { key: "terms" },
    },
    {
      path: "/",
      redirect: "/index",
    },
    {
      path: "/notfound",
      component: NotFound,
      props: { key: "notfound" },
    },
    {
      path: "/:pathName(.*)",
      name: NotFound,
      component: NotFound,
      redirect: "/notfound",
    },
  ],
});

export default router;

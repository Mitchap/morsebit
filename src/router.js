import { createRouter, createWebHistory } from "vue-router";
import Index from "@/pages/Index.vue";
import Products from "@/pages/Products.vue";
import BeltSystems from "@/pages/BeltSystems.vue";
import SlingSystems from "@/pages/SlingSystems.vue";
import CustomAccessories from "@/pages/CustomAccessories.vue";
import DBS1 from "@/products/DBS1.vue";
import DBS2 from "@/products/DBS2.vue";
import About from "@/pages/About.vue";
import FAQS from "@/pages/FAQS.vue";
import PrivacyPolicy from "@/pages/PrivacyPolicy.vue";
import ReturnPolicy from "@/pages/ReturnPolicy.vue";
import Terms from "@/pages/Terms.vue";
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
      component: Products,
      props: { key: "products" },
    },
    {
      path: "/beltsystems",
      component: BeltSystems,
      props: { key: "beltsystems" },
    },
    {
      path: "/slingsystems",
      component: SlingSystems,
      props: { key: "slingsystems" },
    },
    {
      path: "/customaccessories",
      component: CustomAccessories,
      props: { key: "customaccessories" },
    },
    {
      path: "/dbs1",
      component: DBS1,
      props: { key: "dbs1" },
    },
    {
      path: "/dbs2",
      component: DBS2,
      props: { key: "dbs2" },
    },
    {
      path: "/about",
      component: About,
      props: { key: "about" },
    },
    {
      path: "/faqs",
      component: FAQS,
      props: { key: "faqs" },
    },
    {
      path: "/privacypolicy",
      component: PrivacyPolicy,
      props: { key: "privacypolicy" },
    },
    {
      path: "/returnpolicy",
      component: ReturnPolicy,
      props: { key: "returnpolicy" },
    },
    {
      path: "/terms",
      component: Terms,
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

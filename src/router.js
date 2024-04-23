import { createRouter, createWebHistory } from "vue-router";
import Index from "@/pages/Index.vue";
import Products from "@/pages/Products.vue";
import DBS1 from "@/pages/DBS1.vue";
import DBS2 from "@/pages/DBS2.vue";
import About from "@/pages/About.vue";
import FAQS from "@/pages/FAQS.vue";
import PrivacyPolicy from "@/pages/PrivacyPolicy.vue";
import ReturnPolicy from "@/pages/ReturnPolicy.vue";
import Terms from "@/pages/Terms.vue";

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
  ],
});

export default router;

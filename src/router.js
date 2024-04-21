import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/pages/Dashboard.vue";
import Products from "@/pages/Products.vue";
import Collections from "@/pages/Collections.vue";
import DBS1 from "@/pages/DBS1.vue";
import DBS2 from "@/pages/DBS2.vue";
import About from "@/pages/About.vue";
import Contact from "@/pages/Contact.vue";
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
      path: "/dashboard",
      component: Dashboard,
      props: { key: "dashboard" },
    },
    {
      path: "/products",
      component: Products,
      props: { key: "products" },
    },
    {
      path: "/collections",
      component: Collections,
      props: { key: "collections" },
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
      path: "/contact",
      component: Contact,
      props: { key: "contact" },
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
      redirect: "/dashboard",
    },
  ],
});

export default router;

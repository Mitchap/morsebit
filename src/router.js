import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/pages/Dashboard.vue";
import Products from "@/pages/Products.vue";
import About from "@/pages/About.vue";
import Contact from "@/pages/Contact.vue";

 // Unique keys are added to ensure remount of pages
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/dashboard',
      component: Dashboard,
      props: { key: "dashboard" }, // Unique key for the Dashboard route
    },
    {
      path: '/products',
      component: Products,
      props: { key: "products" }, // Unique key for the Products route
    },
    {
      path: '/about',
      component: About,
      props: { key: "about" }, // Unique key for the About route
    },
        {
      path: '/contact',
      component: Contact,
      props: { key: "contact" }, // Unique key for the Contact route
    },
    {
      path: '/',
      redirect: '/dashboard',
    },
  ],
});

export default router;

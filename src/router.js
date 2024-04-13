import  { createRouter, createWebHistory }  from "vue-router";
import Dashboard from "@/pages/Dashboard.vue";
import Products from "@/pages/Products.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
        path: '/dashboard',
        component: Dashboard,
        },
         {
        path: '/products',
        component: Products,
        },
        {
        path: '/',
        redirect: '/dashboard',
    },
    ],
});

export default router;
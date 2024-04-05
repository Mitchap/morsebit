import  { createRouter, createWebHistory }  from "vue-router";
import Dashboard from "@/pages/Dashboard.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
        path: '/dashboard',
        component: Dashboard,
        },
        {
        path: '/',
        redirect: '/dashboard',
    },
    ],
});

export default router;
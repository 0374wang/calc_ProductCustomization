import { createRouter, createWebHashHistory } from "vue-router";
const routes = [{
        path: "/",
        redirect: "/rod",
    },
    {
        path: "/rod",
        name: "rod",
        component: () =>
            import ("@/components/rod_2.vue"),
    },
    {
        path: "/width",
        name: "width",
        component: () =>
            import ("@/components/width_3.vue"),
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});
export default router;
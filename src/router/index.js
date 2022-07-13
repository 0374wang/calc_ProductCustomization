import { createRouter, createWebHashHistory } from "vue-router";
const routes = [{
        path: "/",
        redirect: "/width",
    },
    {
        path: "/style",
        name: "style",
        component: () =>
            import ("@/components/style_1.vue"),
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
    {
        path: "/length",
        name: "length",
        component: () =>
            import ("@/components/length_4.vue"),
    },
    {
        path: "/panel",
        name: "panel",
        component: () =>
            import ("@/components/panel_5.vue"),
    },
    {
        path: "/fullness",
        name: "fullness",
        component: () =>
            import ("@/components/fullness_6.vue"),
    },
    {
        path: "/botton",
        name: "botton",
        component: () =>
            import ("@/components/botton_7.vue"),
    }

];
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});
export default router;
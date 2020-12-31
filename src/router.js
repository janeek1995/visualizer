import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/Home/index.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("@/pages/Dashboard/index.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/pages/Auth/Login.vue"),
  },
];

export const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;

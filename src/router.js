import { createWebHistory, createRouter } from "vue-router";

import Dashboard from "@/pages/Dashboard/index.vue";
import Home from "@/pages/Home/index.vue";
import Login from "@/pages/Auth/Login.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import DesignSystem from "@/pages/DesignSystem.vue";

const routes = [
  {
    path: "/",
    redirect: "/users",
  },
  {
    path: "/demo/design-system",
    name: "DesignSystem",
    component: DesignSystem,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

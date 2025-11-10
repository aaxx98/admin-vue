import { createRouter, createWebHistory } from "vue-router";
import DesignSystem from "@/pages/DesignSystem.vue";
import CommonComponent from "@/pages/CommonComponent.vue";

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
  {
    path: "/demo/common",
    name: "CommonComponent",
    component: CommonComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

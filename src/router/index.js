import { createRouter, createWebHistory } from "vue-router";
import DesignSystem from "@/pages/DesignSystem.vue";
import CommonComponent from "@/pages/CommonComponent.vue";
import LoginPage from "../pages/cafe/LoginPage.vue";
import SignupPage from "../pages/cafe/SignupPage.vue";
import CafeLayout from "../pages/cafe/menu/layout/CafeLayout.vue";
import MainPage from "../pages/cafe/menu/MainPage.vue";
import ProductPage from "../pages/cafe/menu/ProductPage.vue";
import OrderPage from "../pages/cafe/menu/OrderPage.vue";
import StockPage from "../pages/cafe/menu/StockPage.vue";

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
  {
    path: "/login",
    name: "CafeLogin",
    component: LoginPage,
  },
  {
    path: "/signup",
    name: "CafeSignup",
    component: SignupPage,
  },
  {
    path: "/",
    component: CafeLayout, // 메뉴 Layout
    children: [
      { path: "main", name: "CafeMain", component: MainPage },
      { path: "product", name: "CafeProduct", component: ProductPage },
      { path: "order", name: "CafeOrder", component: OrderPage },
      { path: "stock", name: "CafeStock", component: StockPage },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

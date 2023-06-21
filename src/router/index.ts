import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FollowingView from "../views/FollowingView.vue";
import SettingsView from "../views/SettingsView.vue";
import LoginView from "../views/LoginView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/followed",
    name: "Following",
    component: FollowingView,
  },
  {
    path: "/settings",
    name: "Settings",
    component: SettingsView,
  },
  {
    path: "/",
    name: "Login",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

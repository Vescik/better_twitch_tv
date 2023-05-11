import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FollowingView from "../views/FollowingView.vue";
import SettingsView from "../views/SettingsView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

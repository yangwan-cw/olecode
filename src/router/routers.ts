import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AdminView from "@/views/AdminView.vue";
import NotAuth from "@/views/NotAuth.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "首页",
    component: HomeView,
  },
  {
    path: "/admin",
    name: "登录员可见",
    component: AdminView,
    meta: {
      title: "页面不存在",
      icon: "lock",
      auth: "admin",
      notShowOnTagsView: true,
    },
  },
  {
    path: "/error",
    name: "错误页面",
    component: NotAuth,
  },
  {
    path: "/about",
    name: "关于",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

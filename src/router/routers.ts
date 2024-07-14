import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AdminView from "@/views/AdminView.vue";
import NotAuth from "@/views/NotAuth.vue";
import AccessAuth from "@/auth/AccessAuth";
import UserLayout from "@/layouts/UserLayout.vue";
import UserLogin from "@/views/UserLogin.vue";
import UserRegister from "@/views/UserRegister.vue";
import AddQuestion from "@/views/question/AddQuestion.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/user",
    name: "用户",
    component: UserLayout,
    children: [
      {
        path: "/user/login",
        name: "登录页面",
        component: UserLogin,
        meta: {
          title: "登录页面",
        },
      },
      {
        path: "/user/register",
        name: "注册页面",
        component: UserRegister,
        meta: {
          title: "注册页面",
        },
      },
    ],
    meta: {
      title: "用户",
      isHideTag: true,
    },
  },
  {
    path: "/",
    name: "浏览题目",
    component: HomeView,
    meta: {
      title: "浏览题目",
    },
  },
  {
    path: "/add/addquestion",
    name: "新增题目",
    component: AddQuestion,
    meta: {
      title: "新增题目",
    },
  },
  {
    path: "/error",
    name: "错误页面",
    component: NotAuth,
    meta: {
      title: "错误页面",
      isHideTag: true,
    },
  },
  {
    path: "/admin",
    name: "登录员可见",
    component: AdminView,
    meta: {
      title: "管理员界面",
      roles: AccessAuth.ADMIN,
    },
  },

  {
    path: "/about",
    name: "关于",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    meta: { title: "关于页面" },
  },
];

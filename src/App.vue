<template>
  <div id="layout-app">
    <basic-layout />
  </div>
</template>

<style lang="less">
#layout-app {
}
</style>
<script lang="ts" setup>
import BasicLayout from "@/layouts/BasicLayout.vue";
import { useRouter } from "vue-router";
import useStore from "@/store";

const router = useRouter();
const { useUserStore } = useStore();
const { loginUser } = useUserStore();

// router.beforeEach((to, from, next) => {
//   // if (to.meta?.roles === "admin") {
//   //   if (loginUser?.roles !== "admin") {
//   //     next("/error");
//   //     return;
//   //   }
//   // }
//   // next();
// });
</script>

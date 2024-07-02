<template>
  <a-row
    class="basic-component-header"
    style="margin-bottom: 16px"
    align="center"
  >
    <a-col flex="auto">
      <a-menu
        mode="horizontal"
        :selected-keys="searchKey"
        style="align-items: center"
        @menu-item-click="toPage"
      >
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div class="title-bar">
            <!--            <img class="logo" src="../assets/logo.png" />-->
            <div class="olecode-vue3">OleCode-Vue3</div>
          </div>
        </a-menu-item>
        <a-menu-item v-for="item in routes" :key="item.path">
          {{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="100px">
      <div class="user-info">
        <!--        <img class="avatar" src="../assets/logo.png" alt="Avatar" />-->
        <div>{{ loginUser?.userName ?? "未登录" }}</div>
      </div>
    </a-col>
  </a-row>
</template>
<script setup lang="ts">
import { routes } from "@/router/routers";
import router from "@/router";
import { ref } from "vue";
import { useRouter } from "vue-router";
import useStore from "@/store/index";
import { storeToRefs } from "pinia";

const routerApi = useRouter();
const searchKey = ref(["/"]);
const { useUserStore } = useStore();
const { loginUser } = storeToRefs(useUserStore());

routerApi.afterEach((to, from, failure) => {
  searchKey.value = [to.path];
});

const toPage = (key: string) => {
  router.push({
    path: key,
  });
};
</script>

<style scoped lang="less">
.title-bar {
  display: flex;
  align-items: center;

  .olecode-vue3 {
    color: #165dff;
    margin-left: 16px;
    font-weight: bold;
  }
}

.logo {
  height: 32px;
  margin-top: 3px;
}

.user-info {
  display: flex;
  align-items: center;

  .avatar {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    margin-right: 8px;
  }
}
</style>

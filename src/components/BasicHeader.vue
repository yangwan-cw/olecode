<template>
  <a-row :wrap="false" align="center" class="basic-component-header">
    <a-col flex="auto">
      <a-menu
        :selected-keys="searchKey"
        mode="horizontal"
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
        <a-menu-item v-for="item in visibleTag" :key="item.path">
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
<script lang="ts" setup>
import { routes } from "@/router/routers";
import router from "@/router";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import useStore from "@/store/index";
import { storeToRefs } from "pinia";
import checkAuth from "@/auth/CheckAccess";

const routerApi = useRouter();
const searchKey = ref(["/"]);
const { useUserStore } = useStore();
const { loginUser } = storeToRefs(useUserStore());
const { fetchAndUpdateUser } = useUserStore();

const visibleTag = computed(() => {
  return routes.filter((item) => {
    if (item.meta?.isHideTag) {
      return false;
    }
    // if (!checkAuth(useUserStore(), item?.meta?.roles as string)) {
    //   return false;
    // }
    // return true;
    return checkAuth(useUserStore(), item?.meta?.roles as string);
  });
});

routerApi.afterEach((to) => {
  searchKey.value = [to.path];
});

const toPage = (key: string) => {
  router.push({
    path: key,
  });
};
fetchAndUpdateUser();
</script>

<style lang="less" scoped>
.title-bar {
  display: flex;
  align-items: center;

  .olecode-vue3 {
    color: #165dff;
    margin-left: 16px;
    font-weight: bold;
  }
}

//.logo {
//  height: 32px;
//  margin-top: 3px;
//}

.user-info {
  display: flex;
  align-items: center;

  //.avatar {
  //  height: 32px;
  //  width: 32px;
  //  border-radius: 50%;
  //  margin-right: 8px;
  //}
}
</style>

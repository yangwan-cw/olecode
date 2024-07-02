import { defineStore } from "pinia";
import { UserState } from "@/interface/UserState";

export const useUserStore = defineStore("user", {
  state: (): UserState => ({
    loginUser: {
      userName: "未登录",
      roles: "notAdmin",
    },
  }),
  getters: {
    getUserName: (state: UserState) => state.loginUser.userName,
  },
  actions: {
    updateUser(userName: string) {
      this.loginUser.userName = userName;
    },
    async fetchAndUpdateUser() {
      // 模拟异步操作，例如从 API 获取用户数据
      const userData = await new Promise<{ userName: string }>((resolve) => {
        setTimeout(() => {
          resolve({ userName: "李四1" });
        }, 1000);
      });
      this.updateUser(userData.userName);
    },
  },
});

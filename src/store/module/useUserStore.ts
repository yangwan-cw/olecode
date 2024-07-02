import { defineStore } from "pinia";
import { UserState } from "@/interface/UserState";
import ACCESSAUTH from "@/auth/AccessAuth";

export const useUserStore = defineStore("user", {
  state: (): UserState => ({
    loginUser: {
      userName: "未登录",
      roles: ACCESSAUTH.NOT_LOGIN,
    },
  }),
  getters: {
    getUserName: (state: UserState) => state.loginUser.userName,
  },
  actions: {
    updateUser(userName: string, roles: string) {
      this.loginUser.userName = userName;
      this.loginUser.roles = roles;
    },
    async fetchAndUpdateUser() {
      // 模拟异步操作，例如从 API 获取用户数据
      const userData = await new Promise<{ userName: string; roles: string }>(
        (resolve) => {
          setTimeout(() => {
            resolve({ userName: "李四1", roles: ACCESSAUTH.ADMIN });
          }, 3000);
        }
      );
      this.updateUser(userData.userName, userData.roles);
    },
  },
});

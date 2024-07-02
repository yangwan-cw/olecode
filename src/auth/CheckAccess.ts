import ACCESSAUTH from "@/auth/AccessAuth";
import { UserState } from "@/interface/UserState";

/**
 * 通用权限校验
 * @param userParam 登录用户
 * @param needAccess 需要什么权限
 * return 权限结果
 */
const checkAuth = (userParam: UserState, needAccess = ACCESSAUTH.NOT_LOGIN) => {
  // 获取当前登录的用户去校验是否存在 loginUser? 如果不存在,那么则未登录
  const loginUserAccess = userParam.loginUser?.roles ?? ACCESSAUTH.NOT_LOGIN;
  // 如果用户上获取的是没有账户信息，或者说没有权限
  if (needAccess === ACCESSAUTH.NOT_LOGIN) {
    return true;
  }

  // 如果用户登录才能访问
  if (needAccess === ACCESSAUTH.USER) {
    if (loginUserAccess === ACCESSAUTH.NOT_LOGIN) {
      return false;
    }
  }

  // 如果需要管理员权限
  if (needAccess === ACCESSAUTH.ADMIN) {
    if (loginUserAccess !== ACCESSAUTH.ADMIN) {
      return false;
    }
  }

  return true;
};
export default checkAuth;

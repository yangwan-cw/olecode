/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_boolean_ } from "../models/BaseResponse_boolean_";
import type { BaseResponse_int_ } from "../models/BaseResponse_int_";
import type { BaseResponse_LoginUserVO_ } from "../models/BaseResponse_LoginUserVO_";
import type { BaseResponse_long_ } from "../models/BaseResponse_long_";
import type { BaseResponse_Page_Post_ } from "../models/BaseResponse_Page_Post_";
import type { BaseResponse_Page_PostVO_ } from "../models/BaseResponse_Page_PostVO_";
import type { BaseResponse_Page_SysUser_ } from "../models/BaseResponse_Page_SysUser_";
import type { BaseResponse_Page_UserVO_ } from "../models/BaseResponse_Page_UserVO_";
import type { BaseResponse_PostVO_ } from "../models/BaseResponse_PostVO_";
import type { BaseResponse_string_ } from "../models/BaseResponse_string_";
import type { BaseResponse_SysUser_ } from "../models/BaseResponse_SysUser_";
import type { BaseResponse_UserVO_ } from "../models/BaseResponse_UserVO_";
import type { DeleteRequest } from "../models/DeleteRequest";
import type { PostAddRequest } from "../models/PostAddRequest";
import type { PostEditRequest } from "../models/PostEditRequest";
import type { PostFavourAddRequest } from "../models/PostFavourAddRequest";
import type { PostFavourQueryRequest } from "../models/PostFavourQueryRequest";
import type { PostQueryRequest } from "../models/PostQueryRequest";
import type { PostThumbAddRequest } from "../models/PostThumbAddRequest";
import type { PostUpdateRequest } from "../models/PostUpdateRequest";
import type { UserAddRequest } from "../models/UserAddRequest";
import type { UserLoginRequest } from "../models/UserLoginRequest";
import type { UserQueryRequest } from "../models/UserQueryRequest";
import type { UserRegisterRequest } from "../models/UserRegisterRequest";
import type { UserUpdateMyRequest } from "../models/UserUpdateMyRequest";
import type { UserUpdateRequest } from "../models/UserUpdateRequest";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class Service {
  /**
   * check
   * @param echostr echostr
   * @param nonce nonce
   * @param signature signature
   * @param timestamp timestamp
   * @returns string OK
   * @throws ApiError
   */
  public static checkUsingGet(
    echostr?: string,
    nonce?: string,
    signature?: string,
    timestamp?: string
  ): CancelablePromise<string> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/",
      query: {
        echostr: echostr,
        nonce: nonce,
        signature: signature,
        timestamp: timestamp,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * receiveMessage
   * @returns any OK
   * @throws ApiError
   */
  public static receiveMessageUsingPost(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/",
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * uploadFile
   * @param file file
   * @param biz
   * @returns BaseResponse_string_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static uploadFileUsingPost(
    file: Blob,
    biz?: string
  ): CancelablePromise<BaseResponse_string_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/file/upload",
      query: {
        biz: biz,
      },
      formData: {
        file: file,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * addPost
   * @param postAddRequest postAddRequest
   * @returns BaseResponse_long_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static addPostUsingPost(
    postAddRequest: PostAddRequest
  ): CancelablePromise<BaseResponse_long_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/post/add",
      body: postAddRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * deletePost
   * @param deleteRequest deleteRequest
   * @returns BaseResponse_boolean_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static deletePostUsingPost(
    deleteRequest: DeleteRequest
  ): CancelablePromise<BaseResponse_boolean_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/post/delete",
      body: deleteRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * editPost
   * @param postEditRequest postEditRequest
   * @returns BaseResponse_boolean_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static editPostUsingPost(
    postEditRequest: PostEditRequest
  ): CancelablePromise<BaseResponse_boolean_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/post/edit",
      body: postEditRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getPostVOById
   * @param id id
   * @returns BaseResponse_PostVO_ OK
   * @throws ApiError
   */
  public static getPostVoByIdUsingGet(
    id?: number
  ): CancelablePromise<BaseResponse_PostVO_> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/post/get/vo",
      query: {
        id: id,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * listPostByPage
   * @param postQueryRequest postQueryRequest
   * @returns BaseResponse_Page_Post_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static listPostByPageUsingPost(
    postQueryRequest: PostQueryRequest
  ): CancelablePromise<BaseResponse_Page_Post_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/post/list/page",
      body: postQueryRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * listPostVOByPage
   * @param postQueryRequest postQueryRequest
   * @returns BaseResponse_Page_PostVO_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static listPostVoByPageUsingPost(
    postQueryRequest: PostQueryRequest
  ): CancelablePromise<BaseResponse_Page_PostVO_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/post/list/page/vo",
      body: postQueryRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * listMyPostVOByPage
   * @param postQueryRequest postQueryRequest
   * @returns BaseResponse_Page_PostVO_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static listMyPostVoByPageUsingPost(
    postQueryRequest: PostQueryRequest
  ): CancelablePromise<BaseResponse_Page_PostVO_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/post/my/list/page/vo",
      body: postQueryRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * searchPostVOByPage
   * @param postQueryRequest postQueryRequest
   * @returns BaseResponse_Page_PostVO_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static searchPostVoByPageUsingPost(
    postQueryRequest: PostQueryRequest
  ): CancelablePromise<BaseResponse_Page_PostVO_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/post/search/page/vo",
      body: postQueryRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * updatePost
   * @param postUpdateRequest postUpdateRequest
   * @returns BaseResponse_boolean_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static updatePostUsingPost(
    postUpdateRequest: PostUpdateRequest
  ): CancelablePromise<BaseResponse_boolean_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/post/update",
      body: postUpdateRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * doPostFavour
   * @param postFavourAddRequest postFavourAddRequest
   * @returns BaseResponse_int_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static doPostFavourUsingPost(
    postFavourAddRequest: PostFavourAddRequest
  ): CancelablePromise<BaseResponse_int_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/post_favour/",
      body: postFavourAddRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * listFavourPostByPage
   * @param postFavourQueryRequest postFavourQueryRequest
   * @returns BaseResponse_Page_PostVO_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static listFavourPostByPageUsingPost(
    postFavourQueryRequest: PostFavourQueryRequest
  ): CancelablePromise<BaseResponse_Page_PostVO_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/post_favour/list/page",
      body: postFavourQueryRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * listMyFavourPostByPage
   * @param postQueryRequest postQueryRequest
   * @returns BaseResponse_Page_PostVO_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static listMyFavourPostByPageUsingPost(
    postQueryRequest: PostQueryRequest
  ): CancelablePromise<BaseResponse_Page_PostVO_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/post_favour/my/list/page",
      body: postQueryRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * doThumb
   * @param postThumbAddRequest postThumbAddRequest
   * @returns BaseResponse_int_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static doThumbUsingPost(
    postThumbAddRequest: PostThumbAddRequest
  ): CancelablePromise<BaseResponse_int_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/post_thumb/",
      body: postThumbAddRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * setMenu
   * @returns string OK
   * @throws ApiError
   */
  public static setMenuUsingGet(): CancelablePromise<string> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/setMenu",
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * addUser
   * @param userAddRequest userAddRequest
   * @returns BaseResponse_long_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static addUserUsingPost(
    userAddRequest: UserAddRequest
  ): CancelablePromise<BaseResponse_long_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/user/add",
      body: userAddRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * deleteUser
   * @param deleteRequest deleteRequest
   * @returns BaseResponse_boolean_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static deleteUserUsingPost(
    deleteRequest: DeleteRequest
  ): CancelablePromise<BaseResponse_boolean_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/user/delete",
      body: deleteRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getUserById
   * @param id id
   * @returns BaseResponse_SysUser_ OK
   * @throws ApiError
   */
  public static getUserByIdUsingGet(
    id?: number
  ): CancelablePromise<BaseResponse_SysUser_> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/user/get",
      query: {
        id: id,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getLoginUser
   * @returns BaseResponse_LoginUserVO_ OK
   * @throws ApiError
   */
  public static getLoginUserUsingGet(): CancelablePromise<BaseResponse_LoginUserVO_> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/user/get/login",
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getUserVOById
   * @param id id
   * @returns BaseResponse_UserVO_ OK
   * @throws ApiError
   */
  public static getUserVoByIdUsingGet(
    id?: number
  ): CancelablePromise<BaseResponse_UserVO_> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/user/get/vo",
      query: {
        id: id,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * listUserByPage
   * @param userQueryRequest userQueryRequest
   * @returns BaseResponse_Page_SysUser_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static listUserByPageUsingPost(
    userQueryRequest: UserQueryRequest
  ): CancelablePromise<BaseResponse_Page_SysUser_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/user/list/page",
      body: userQueryRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * listUserVOByPage
   * @param userQueryRequest userQueryRequest
   * @returns BaseResponse_Page_UserVO_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static listUserVoByPageUsingPost(
    userQueryRequest: UserQueryRequest
  ): CancelablePromise<BaseResponse_Page_UserVO_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/user/list/page/vo",
      body: userQueryRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * userLogin
   * @param userLoginRequest userLoginRequest
   * @returns BaseResponse_LoginUserVO_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static userLoginUsingPost(
    userLoginRequest: UserLoginRequest
  ): CancelablePromise<BaseResponse_LoginUserVO_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/user/login",
      body: userLoginRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * userLoginByWxOpen
   * @param code code
   * @returns BaseResponse_LoginUserVO_ OK
   * @throws ApiError
   */
  public static userLoginByWxOpenUsingGet(
    code: string
  ): CancelablePromise<BaseResponse_LoginUserVO_> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/user/login/wx_open",
      query: {
        code: code,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * userLogout
   * @returns BaseResponse_boolean_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static userLogoutUsingPost(): CancelablePromise<
    BaseResponse_boolean_ | any
  > {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/user/logout",
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * 注册接口
   * @param userRegisterRequest userRegisterRequest
   * @returns BaseResponse_long_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static userRegisterUsingPost(
    userRegisterRequest: UserRegisterRequest
  ): CancelablePromise<BaseResponse_long_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/user/register",
      body: userRegisterRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * updateUser
   * @param userUpdateRequest userUpdateRequest
   * @returns BaseResponse_boolean_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static updateUserUsingPost(
    userUpdateRequest: UserUpdateRequest
  ): CancelablePromise<BaseResponse_boolean_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/user/update",
      body: userUpdateRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * updateMyUser
   * @param userUpdateMyRequest userUpdateMyRequest
   * @returns BaseResponse_boolean_ OK
   * @returns any Created
   * @throws ApiError
   */
  public static updateMyUserUsingPost(
    userUpdateMyRequest: UserUpdateMyRequest
  ): CancelablePromise<BaseResponse_boolean_ | any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/user/update/my",
      body: userUpdateMyRequest,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }
}

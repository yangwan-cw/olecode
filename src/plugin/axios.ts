// 添加请求拦截器
import axios from "axios";
import { Message } from "@arco-design/web-vue";

axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    if (response.data.code === 0) {
      Message.success("成功");
    }
    return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    if (error.code != 0) {
      Message.error(error.message);
    }
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

import axios from "axios";

axios.defaults.baseURL = "http://naemilham.site";
axios.defaults.withCredentials = true;
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";

// TODO: get cookie for CSRF

export const instance = axios.create();
export const instanceWithToken = axios.create();

// TODO: refactor based on Naemilham user authentification
instanceWithToken.interceptors.request.use(
  // 요청을 보내기전 수행할 일
  // 사실상 이번 세미나에 사용할 부분은 이거밖에 없어요
  (config) => {
    const accessToken = request.body["access_token"];

    if (!accessToken) {
      // token 없으면 리턴
      return;
    } else {
      // token 있으면 헤더에 담아주기 (Authorization은 장고에서 JWT 토큰을 인식하는 헤더 key)
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },

  // 클라이언트 요청 오류 났을 때 처리
  (error) => {
    // 콘솔에 찍어주고, 요청을 보내지 않고 오류를 발생시킴
    console.log("Request Error!!");
    return Promise.reject(error);
  }
);

instanceWithToken.interceptors.response.use(
  (response) => {
    // 서버 응답 데이터를 프론트에 넘겨주기 전 수행할 일
    console.log("Interceptor Response!!");
    return response;
  },
  (error) => {
    // 서버가 오류를 응답했을 때 처리 - 콘솔 찍어주고, 프론트에게 보내지 않고 오류를 발생시킴
    console.log("Response Error!!");
    return Promise.reject(error);
  }
);

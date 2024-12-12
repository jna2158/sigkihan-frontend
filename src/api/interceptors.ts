import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = localStorage.getItem("access");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

// 응답 인터셉터
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config;

    if (error.response?.status === 401) {
      try {
        const refreshToken = localStorage.getItem("refresh");
        if (refreshToken && originalRequest) {
          const { data } = await instance.post("/accounts/refresh", {
            refreshToken,
          });
          const newToken = data.access;

          localStorage.setItem("access", newToken);

          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return instance(originalRequest);
        }
      } catch (refreshError) {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        window.location.href = "/";
      }
    }

    if (error.response?.status === 404) {
      console.error("리소스를 찾을 수 없습니다.");
    }

    if (error.response?.status === 500) {
      console.error("서버 에러가 발생했습니다.");
    }

    return Promise.reject(error);
  },
);

export default instance;

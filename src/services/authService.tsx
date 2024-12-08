import { User } from "../types/User";
import { axiosInstance as axios } from "../api";
import { AUTH_ENDPOINTS } from "../api/endpoints";

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  data: {
    access: string;
    refresh: string;
    user: User;
  };
}

// 로그인
export const login = (
  credentials: LoginCredentials,
): Promise<LoginResponse> => {
  return axios.post(AUTH_ENDPOINTS.LOGIN, credentials);
};

// 로그아웃
export const logout = (): Promise<void> => {
  return axios.post(AUTH_ENDPOINTS.LOGOUT);
};

// 카카오 로그인
export const kakaoLogin = (authCode: string): Promise<LoginResponse> => {
  return axios.post(AUTH_ENDPOINTS.KAKAO_LOGIN, { code: authCode });
};

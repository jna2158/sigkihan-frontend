import { User } from "../types/User";
import { axiosInstance as axios } from "../api";
import { AUTH_ENDPOINTS } from "../api/endpoints";

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: User;
}

export const test = () => {
  return axios.post(AUTH_ENDPOINTS.TEST);
};

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
  // return axios.post(AUTH_ENDPOINTS.KAKAO_LOGIN, { authCode });
  return axios.post(AUTH_ENDPOINTS.TEST, { code: authCode });
};

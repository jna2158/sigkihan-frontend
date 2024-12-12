import { User } from "../types/User";
import { axiosInstance as axios } from "../api";
import { AUTH_ENDPOINTS } from "../api/endpoints";

interface LoginResponse {
  data: {
    access: string;
    refresh: string;
    user: User;
  };
}

// 카카오 로그인
export const kakaoLogin = (authCode: string): Promise<LoginResponse> => {
  return axios.post(AUTH_ENDPOINTS.KAKAO_LOGIN, { code: authCode });
};

// 로그아웃
export const logout = (id: number): Promise<void> => {
  return axios.post(`${AUTH_ENDPOINTS.LOGOUT}/${id}`);
};

// 탈퇴
export const withdraw = (id: number): Promise<void> => {
  return axios.delete(`${AUTH_ENDPOINTS.WITHDRAW}/${id}`);
};

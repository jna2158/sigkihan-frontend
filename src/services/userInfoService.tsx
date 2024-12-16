import { axiosInstance as axios } from "../api";
import { USER_INFO_ENDPOINTS } from "../api/endpoints";
import { UserResponse } from "../types/User";

interface UserInfoResponse {
  data: UserResponse;
}

// 내 정보 조회
export const getUserInfo = (id: number): Promise<UserInfoResponse> => {
  return axios.get(`${USER_INFO_ENDPOINTS.GET_USER_INFO}/${id}`);
};

// 내 정보 수정
export const updateUserInfo = (
  id: number,
  data: { name: string; image_id: number },
): Promise<UserInfoResponse> => {
  return axios.put(`${USER_INFO_ENDPOINTS.UPDATE_USER_INFO}/${id}`, data);
};

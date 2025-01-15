import { axiosInstance as axios } from "../api";
import { USER_INFO_ENDPOINTS } from "../api/endpoints";
import { UserResponse } from "../types/User";

interface UserInfoResponse {
  data: UserResponse;
}

interface RefrigeratorListResponse {
  data: {
    id: number;
    name: string;
  }[];
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
  return axios.patch(`${USER_INFO_ENDPOINTS.UPDATE_USER_INFO}/${id}`, data);
};

// 속한 냉장고 리스트 조회
export const getRefrigeratorList = (): Promise<RefrigeratorListResponse> => {
  return axios.get(`${USER_INFO_ENDPOINTS.GET_REFRIGERATOR_LIST}`);
};

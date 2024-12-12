import { axiosInstance as axios } from "../api";
import { USER_INFO_ENDPOINTS } from "../api/endpoints";
interface UserInfoResponse {
  data: {
    name: string;
    image: {
      id: number;
      name: string;
      image: string;
    };
  };
}

interface ProfileImagesResponse {
  data: {
    id: number;
    name: string;
    image: string;
  }[];
}

// 내 정보 조회
export const getUserInfo = (id: number): Promise<UserInfoResponse> => {
  return axios.get(`${USER_INFO_ENDPOINTS.GET_USER_INFO}/${id}`);
};

// 내 정보 수정
export const updateUserInfo = (
  id: number,
  data: { name: string; image: number },
): Promise<any> => {
  return axios.put(`${USER_INFO_ENDPOINTS.UPDATE_USER_INFO}/${id}`, data);
};

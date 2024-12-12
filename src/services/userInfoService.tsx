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

// 프로필 뷰셋 조회
export const getProfileImages = (): Promise<ProfileImagesResponse> => {
  return axios.get(`${USER_INFO_ENDPOINTS.GET_PROFILE_IMAGES}`);
};

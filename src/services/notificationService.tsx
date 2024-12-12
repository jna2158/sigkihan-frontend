import { axiosInstance as axios } from "../api";
import { NOTIFICATION_ENDPOINTS } from "../api/endpoints";

interface ExpiredFoodListResponse {
  data: { id: number; content: string; date: string }[];
}

// 소비기한 임박한 식품 알림 조회
export const getExpiredFoodList = (
  refrigerator_id: number,
  user_id: number,
): Promise<ExpiredFoodListResponse> => {
  return axios.get(NOTIFICATION_ENDPOINTS.GET_EXPIRED_FOOD_LIST, {
    params: {
      refrigerator_id,
      user_id,
    },
  });
};

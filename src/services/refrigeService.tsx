import { axiosInstance as axios } from "../api";
import { REFRIGERATOR_ENDPOINTS } from "../api/endpoints";

interface FoodListResponse {
  data: {
    id: number;
    name: string;
    default_food_name: string;
    purchase_date: Date;
    expiration_date: Date;
    quantity: number;
  }[];
}

// 특정 냉장고 음식 리스트 조회
export const getFoodList = (id: number): Promise<FoodListResponse> => {
  return axios.get(`${REFRIGERATOR_ENDPOINTS.GET_FOOD_LIST}/${id}/foods`);
};

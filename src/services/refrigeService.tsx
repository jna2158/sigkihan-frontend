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

interface DefaultFoodListResponse {
  data: {
    default_foods: {
      id: number;
      name: string;
      image: string;
    }[];
    direct_add_image: string;
  };
}

// 특정 냉장고 음식 리스트 조회
export const getFoodList = (id: number): Promise<FoodListResponse> => {
  return axios.get(`${REFRIGERATOR_ENDPOINTS.GET_FOOD_LIST}/${id}/foods`);
};

// 기본으로 제공하는 디폴트 음식 조회
export const getDefaultFoodList = (): Promise<DefaultFoodListResponse> => {
  return axios.get(`${REFRIGERATOR_ENDPOINTS.GET_DEFAULT_FOOD_LIST}`);
};

// 냉장고에 음식 추가
export const addFoodList = (id: number, data: any) => {
  return axios.post(`${REFRIGERATOR_ENDPOINTS.ADD_FOOD}/${id}/foods`, data);
};

// 냉장고 음식 수정
export const modifyFoodList = (
  refrigeratorId: number,
  foodId: number,
  data: any,
) => {
  return axios.patch(
    `${REFRIGERATOR_ENDPOINTS.MODIFY_FOOD}/${refrigeratorId}/foods/${foodId}`,
    data,
  );
};

// 냉장고 음식 삭제
export const deleteFoodList = (refrigeratorId: number, foodId: number) => {
  return axios.delete(
    `${REFRIGERATOR_ENDPOINTS.DELETE_FOOD}/${refrigeratorId}/foods/${foodId}`,
  );
};

// 냉장고 음식 소비
export const eatFood = (
  refrigeratorId: number,
  foodId: number,
  data: { action: string; quantity: number },
) => {
  return axios.post(
    `${REFRIGERATOR_ENDPOINTS.EAT_FOOD}/${refrigeratorId}/foods/${foodId}/history`,
    data,
  );
};

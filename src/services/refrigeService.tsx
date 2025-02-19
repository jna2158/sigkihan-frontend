import { axiosInstance as axios } from "../api";
import { REFRIGERATOR_ENDPOINTS } from "../api/endpoints";
import { Food } from "../types/Food";
import { DefaultFood } from "../types/Food";
import { AI_ENDPOINTS } from "../api/endpoints";

interface FoodListResponse {
  data: Food[];
}

interface DefaultFoodListResponse {
  data: {
    default_foods: DefaultFood[];
    direct_add_image: string;
  };
}

interface RefrigeratorInfoResponse {
  data: {
    id: number;
    name: string;
    owner: {
      id: number;
      name: string;
      profile_image: string;
      profile_image_id: number;
    };
    member: {
      id: number;
      name: string;
      profile_image: string;
      profile_image_id: number;
    }[];
  };
}

// 냉장고 정보 조회
export const getRefrigeratorInfo = (
  id: number,
): Promise<RefrigeratorInfoResponse> => {
  return axios.get(`${REFRIGERATOR_ENDPOINTS.GET_REFRIGERATOR_INFO}/${id}`);
};

// 특정 냉장고 음식 리스트 조회
export const getFoodList = (
  refrigerator_id: number,
): Promise<FoodListResponse> => {
  return axios.get(
    `${REFRIGERATOR_ENDPOINTS.GET_FOOD_LIST}/${refrigerator_id}/foods`,
  );
};

// 기본으로 제공하는 디폴트 음식 조회
export const getDefaultFoodList = (): Promise<DefaultFoodListResponse> => {
  return axios.get(`${REFRIGERATOR_ENDPOINTS.GET_DEFAULT_FOOD_LIST}`);
};

// 냉장고에 음식 추가
export const addFoodList = (refrigerator_id: number, data: any) => {
  return axios.post(
    `${REFRIGERATOR_ENDPOINTS.ADD_FOOD}/${refrigerator_id}/foods`,
    data,
  );
};

// 냉장고 음식 수정
export const modifyFoodList = (
  refrigerator_id: number,
  foodId: number,
  data: any,
) => {
  return axios.patch(
    `${REFRIGERATOR_ENDPOINTS.MODIFY_FOOD}/${refrigerator_id}/foods/${foodId}`,
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

// 냉장고 초대 코드 생성
export const generateInviteCode = (refrigeratorId: number) => {
  return axios.post(
    `${REFRIGERATOR_ENDPOINTS.GENERATE_INVITE_CODE}/${refrigeratorId}/invitations`,
  );
};

// 냉장고 초대 코드 수락/거절
export const changeInviteStatus = (
  invitation_code: string,
  status: "accepted" | "declined",
) => {
  return axios.post(
    `${REFRIGERATOR_ENDPOINTS.CHANGE_INVITE_STATUS}/invitations/${invitation_code}`,
    { status },
  );
};

// 냉장고 스스로 나가기
export const getOutSelf = (refrigeratorId: number) => {
  return axios.delete(
    `${REFRIGERATOR_ENDPOINTS.GET_OUT_SELF}/${refrigeratorId}/members/self`,
  );
};

// 냉장고 멤버 추방
export const getOutMember = (refrigeratorId: number, memberId: number) => {
  return axios.delete(
    `${REFRIGERATOR_ENDPOINTS.GET_OUT_MEMBER}/${refrigeratorId}/members/${memberId}`,
  );
};

// Ai 추천 소비기한 조회
export const getRecommendExpirationDate = (data: any) => {
  return axios.get(`${AI_ENDPOINTS.GET_RECOMMEND_EXPIRATION_DATE}/expiration`, {
    params: data,
  });
};

// Ai 추천 레시피 조회
export const getRecommendRecipe = (refrigeratorId: number) => {
  return axios.get(
    `${AI_ENDPOINTS.GET_RECOMMEND_RECIPE}/${refrigeratorId}/recipes`,
    { timeout: 100000 },
  );
};

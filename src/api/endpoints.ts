// 인증
export const AUTH_ENDPOINTS = {
  KAKAO_LOGIN: "/auth/kakao/login",
  LOGOUT: "/api/accounts/logout",
  REFRESH: "/accounts/refresh",
} as const;

// 내 정보
export const USER_INFO_ENDPOINTS = {
  GET_USER_INFO: "/api/users",
  GET_PROFILE_IMAGES: "/api/users/profile-images",
};

// 냉장고 정보
export const REFRIGERATOR_ENDPOINTS = {
  GET_FOOD_LIST: "/api/refrigerators",
  GET_DEFAULT_FOOD_LIST: "/api/default-foods",
  ADD_FOOD: "/api/refrigerators",
  MODIFY_FOOD: "/api/refrigerators",
  DELETE_FOOD: "/api/refrigerators",
};

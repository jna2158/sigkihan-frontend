// 인증
export const AUTH_ENDPOINTS = {
  KAKAO_LOGIN: "/auth/kakao/login",
  LOGOUT: "/api/accounts/logout",
  WITHDRAW: "/api/users",
  REFRESH: "/accounts/refresh",
} as const;

// 내 정보
export const USER_INFO_ENDPOINTS = {
  GET_USER_INFO: "/api/users",
  UPDATE_USER_INFO: "/api/users",
};

// 냉장고 정보
export const REFRIGERATOR_ENDPOINTS = {
  GET_FOOD_LIST: "/api/refrigerators",
  GET_DEFAULT_FOOD_LIST: "/api/default-foods",
  ADD_FOOD: "/api/refrigerators",
  MODIFY_FOOD: "/api/refrigerators",
  DELETE_FOOD: "/api/refrigerators",
  EAT_FOOD: "/api/refrigerators",
};

// 알림
export const NOTIFICATION_ENDPOINTS = {
  GET_EXPIRED_FOOD_LIST: "/api/refrigerators",
  GET_NOTIFICATION_LIST: "/api/refrigerators",
  READ_NOTIFICATION: "/api/refrigerators",
};

// 메모
export const MEMO_ENDPOINTS = {
  GET_MEMO_LIST: "/api/refrigerators",
  CREATE_MEMO: "/api/refrigerators",
  DELETE_MEMO: "/api/refrigerators",
  UPDATE_MEMO: "/api/refrigerators",
};

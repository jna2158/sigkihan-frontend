// 인증
export const AUTH_ENDPOINTS = {
  LOGIN: "/accounts/login",
  KAKAO_LOGIN: "/auth/kakao/login",
  LOGOUT: "/accounts/logout",
  REFRESH: "/accounts/refresh",
  SIGNUP: "accounts/signup",
} as const;

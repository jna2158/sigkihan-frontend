import { axiosInstance as axios } from "../api";
import { NOTIFICATION_ENDPOINTS } from "../api/endpoints";

interface ExpiredFoodListResponse {
  data: { id: number; content: string; date: string }[];
}

interface NotificationListResponse {
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

// 알림 목록 조회
export const getNotificationList = (
  refrigerator_id: number,
  user_id: number,
): Promise<NotificationListResponse> => {
  return axios.get(NOTIFICATION_ENDPOINTS.GET_NOTIFICATION_LIST, {
    params: { refrigerator_id, user_id },
  });
};

// 알림 읽음 처리
export const readNotification = (notification_id: number): Promise<void> => {
  return axios.post(
    `${NOTIFICATION_ENDPOINTS.READ_NOTIFICATION}/${notification_id}`,
  );
};

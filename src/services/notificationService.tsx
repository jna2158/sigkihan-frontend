import { axiosInstance as axios } from "../api";
import { NOTIFICATION_ENDPOINTS } from "../api/endpoints";
import { Notification } from "../types/Notification";

interface ExpiredFoodListResponse {
  data: Notification[];
}

// 알림센터 알림 조회
export const getNotificationCenterList = (
  refrigerator_id: number,
): Promise<ExpiredFoodListResponse> => {
  return axios.get(
    `${NOTIFICATION_ENDPOINTS.GET_EXPIRED_FOOD_LIST}/${refrigerator_id}/notifications`,
  );
};

// 냉장고 식품 알림 읽음 처리
export const notificationCenterMarkAsRead = (
  refrigerator_id: number,
): Promise<void> => {
  return axios.post(
    `${NOTIFICATION_ENDPOINTS.READ_NOTIFICATION}/${refrigerator_id}/notifications/mark-as-read`,
  );
};

// 팝업 식품 알림 조회
export const getPopupNotificationList = (
  refrigerator_id: number,
): Promise<ExpiredFoodListResponse> => {
  return axios.get(
    `${NOTIFICATION_ENDPOINTS.GET_NOTIFICATION_LIST}/${refrigerator_id}/notifications/popup`,
  );
};

// 팝업 식품 알림 읽음 처리
export const readPopupNotification = (
  refrigerator_id: number,
): Promise<void> => {
  return axios.post(
    `${NOTIFICATION_ENDPOINTS.READ_NOTIFICATION}/${refrigerator_id}/notifications/popup/mark-as-read`,
  );
};

import {
  getNotificationCenterList,
  getPopupNotificationList,
  notificationCenterMarkAsRead,
} from "../notificationService";
import { Notification } from "../../types/Notification";

class NotificationManager {
  private static instance: NotificationManager;
  private notificationList: Notification[] = []; // 알림 목록
  private subscribers: ((notifications: Notification[]) => void)[] = [];

  private constructor() {}

  public static getInstance(): NotificationManager {
    if (!NotificationManager.instance) {
      NotificationManager.instance = new NotificationManager();
    }
    return NotificationManager.instance;
  }

  // 알림 구독
  public subscribe(callback: (notifications: Notification[]) => void) {
    this.subscribers.push(callback);
  }

  // 알림 구독 해제
  public unsubscribe(callback: (notifications: Notification[]) => void) {
    this.subscribers = this.subscribers.filter((sub) => sub !== callback);
  }

  // 알림 발송
  private notifySubscribers() {
    this.subscribers.forEach((callback) => callback(this.notificationList));
  }

  // 팝업 알림 조회
  public async fetchPopupNotifications(refrigeratorId: number) {
    try {
      const res = await getPopupNotificationList(refrigeratorId);
      this.notificationList = res.data;
      this.notifySubscribers();
    } catch (error) {
      console.error("팝업 알림 조회 실패:", error);
      this.notificationList = [];
      this.notifySubscribers();
    }
  }

  // 알림센터 알림 조회
  public async fetchNotificationCenterList(refrigeratorId: number) {
    try {
      const res = await getNotificationCenterList(refrigeratorId);
      return res.data;
    } catch (error) {
      console.error("알림센터 알림 조회 실패:", error);
      return [];
    }
  }

  // 알림센터 알림 읽음 처리
  public async notificationCenterMarkAsRead(refrigeratorId: number) {
    try {
      await notificationCenterMarkAsRead(refrigeratorId);
    } catch (error) {
      console.error("알림센터 알림 읽음 처리 실패:", error);
    }
  }
}

export default NotificationManager.getInstance();

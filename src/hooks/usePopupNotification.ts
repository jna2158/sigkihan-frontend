import { useEffect, useState } from "react";
import { Notification } from "../types/Notification";
import notificationManager from "../services/managers/NotificationManager";

export const usePopupNotification = (refrigeratorId: number | null) => {
  const [notiList, setNotiList] = useState<Notification[]>([]);

  useEffect(() => {
    if (!refrigeratorId) return;

    const handlePopupNotifications = (notifications: Notification[]) => {
      setNotiList(notifications);
    };

    notificationManager.subscribe(handlePopupNotifications);
    notificationManager.fetchPopupNotifications(refrigeratorId);

    return () => {
      notificationManager.unsubscribe(handlePopupNotifications);
    };
  }, [refrigeratorId]);

  return { notiList, setNotiList };
};

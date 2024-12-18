import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useModalStore from "../../../../store/useModalStore";
import useUserStore from "../../../../store/useUserStore";
import { useState, useEffect } from "react";
import { Notification } from "../../../../types/Notification";
import notificationManager from "../../../../services/managers/NotificationManager";
import { useUser } from "../../../../hooks/useUserInfo";
import { useModalControl } from "../../../../hooks/useModalControl";

export default function AlarmIcon() {
  const [notificationList, setNotificationList] = useState<Notification[]>([]);
  const { handleOpenModal } = useModalControl("ALARM_DRAWER", notificationList);
  const { refrigeratorId } = useUser();

  useEffect(() => {
    const handleNotifications = (notifications: Notification[]) => {
      setNotificationList(notifications);
    };

    notificationManager.subscribe(handleNotifications);
    if (refrigeratorId) {
      notificationManager.fetchNotificationCenterList(refrigeratorId);
    }

    return () => {
      notificationManager.unsubscribe(handleNotifications);
    };
  }, [refrigeratorId]);

  return (
    <div className="relative cursor-pointer">
      <FontAwesomeIcon
        icon={faBell}
        className="h-[1.8rem] w-[1.8rem]"
        style={{ color: "#EBEBEB" }}
        onClick={handleOpenModal}
      />
      {notificationList.some((notification) => !notification.is_read) && (
        <div className="absolute right-1 top-0 h-[0.4rem] w-[0.4rem] rounded-full bg-primary"></div>
      )}
    </div>
  );
}

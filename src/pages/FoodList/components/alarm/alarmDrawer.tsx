import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AlarmItem from "./alarmItem";
import { faBellSlash } from "@fortawesome/free-solid-svg-icons";
import { Notification } from "../../../../types/Notification";
import notificationManager from "../../../../services/managers/NotificationManager";
import ModalCloseBtn from "../../../../components/common/modal/modalCloseBtn";
import { useUser } from "../../../../hooks/useUserInfo";
import { useModalControl } from "../../../../hooks/useModalControl";

export default function AlarmDrawer({ data }: any) {
  const { handleCloseModal } = useModalControl("ALARM_DRAWER");
  const { refrigeratorId } = useUser();
  const [isClosing, setIsClosing] = useState(false);
  const [isOpening, setIsOpening] = useState(true);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      handleCloseModal();
      setIsClosing(false);
    }, 300);
  };

  // 알림센터 알림 읽음 처리
  const setAlarmListRead = async () => {
    if (
      refrigeratorId &&
      data.data.some((food: Notification) => !food.is_read)
    ) {
      try {
        await notificationManager.notificationCenterMarkAsRead(refrigeratorId);
      } catch (error) {
        console.error("알림 읽음 처리 중 오류 발생:", error);
      }
    }
  };

  useEffect(() => {
    setIsOpening(false);
    setAlarmListRead();
  }, []);

  return (
    <section className="absolute inset-0 z-[60] mx-auto w-layout overflow-hidden">
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isClosing ? "opacity-0" : "opacity-100"} ${isOpening ? "opacity-0" : "opacity-100"}`}
        onClick={handleClose}
      />
      <article
        className={`absolute right-0 top-0 h-full w-[18rem] bg-white pt-[8.6rem] shadow-lg transition-transform duration-300 ease-out ${
          isClosing ? "translate-x-full" : "translate-x-0"
        } ${isOpening ? "translate-x-full" : "translate-x-0"}`}
      >
        <ModalCloseBtn handleCloseModal={handleClose} />

        {data && data.data.length === 0 ? (
          <div className="flex h-[calc(100%-4rem)] flex-col items-center justify-center px-6">
            <div className="center mb-4 h-24 w-24 rounded-full bg-gray-50">
              <FontAwesomeIcon
                icon={faBellSlash}
                className="text-3xl text-gray-300"
              />
            </div>
            <p className="mb-2 text-center font-medium text-gray-600">
              현재 알림이 없습니다
            </p>
            <p className="px-4 text-center text-sm text-gray-400">
              소비기한에 임박한 식품이 있다면
              <br />
              여기에서 알려드릴게요
            </p>
          </div>
        ) : (
          data &&
          data.data.map((item: Notification) => (
            <AlarmItem key={item.id} item={item} />
          ))
        )}
      </article>
    </section>
  );
}

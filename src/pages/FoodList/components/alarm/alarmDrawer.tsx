import { useState, useEffect } from "react";
import useModalStore from "../../../../store/useModalStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import AlarmItem from "./alarmItem";
import { faBellSlash } from "@fortawesome/free-solid-svg-icons";
import { readNotification } from "../../../../services/notificationService";
import useUserStore from "../../../../store/useUserStore";

interface ExpiredFood {
  id: number;
  message: string;
  d_day: string;
  is_read: boolean;
  created_at: string;
}

export default function AlarmDrawer({
  expiredFoodList,
}: {
  expiredFoodList: ExpiredFood[];
}) {
  const { setModalOpen } = useModalStore();
  const [isClosing, setIsClosing] = useState(false);
  const [isOpening, setIsOpening] = useState(true);
  const { userInfo } = useUserStore();
  const refrigeratorId = userInfo?.refrigerator_id;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setModalOpen("ALARM_DRAWER", false);
      setIsClosing(false);
    }, 300);
  };

  const setAlarmListRead = async () => {
    if (expiredFoodList && expiredFoodList.some((food) => !food.is_read)) {
      try {
        await readNotification(refrigeratorId || 0);
      } catch (error) {
        console.error(error);
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
        <button
          className="absolute right-4 top-20 text-gray-500 hover:text-gray-700"
          onClick={() => handleClose()}
          aria-label="모달 닫기"
        >
          <FontAwesomeIcon icon={faX} />
        </button>

        {expiredFoodList && expiredFoodList.length === 0 ? (
          <div className="flex h-[calc(100%-4rem)] flex-col items-center justify-center px-6">
            <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gray-50">
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
          expiredFoodList &&
          expiredFoodList.map((item) => <AlarmItem key={item.id} item={item} />)
        )}
      </article>
    </section>
  );
}

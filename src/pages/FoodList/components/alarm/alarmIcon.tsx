import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useModalStore from "../../../../store/useModalStore";
import useUserStore from "../../../../store/useUserStore";
import { getExpiredFoodList } from "../../../../services/notificationService";
import { useState, useEffect } from "react";

interface ExpiredFood {
  id: number;
  message: string;
  d_day: string;
  is_read: boolean;
  created_at: string;
}

export default function AlarmIcon() {
  const { setModalOpen } = useModalStore();
  const { userInfo } = useUserStore();
  const refrigeratorId = userInfo?.refrigerator_id;
  const [expiredFoodList, setExpiredFoodList] = useState<ExpiredFood[]>([]);

  // 알림 목록 조회
  const getAlarmList = async () => {
    try {
      if (refrigeratorId) {
        const res = await getExpiredFoodList(refrigeratorId);
        setExpiredFoodList(res.data);
      }
    } catch (error) {
      console.error(error);
      setExpiredFoodList([]);
    }
  };

  useEffect(() => {
    getAlarmList();
  }, [refrigeratorId]);

  return (
    <div className="relative cursor-pointer">
      <FontAwesomeIcon
        icon={faBell}
        className="h-[1.8rem] w-[1.8rem]"
        style={{ color: "#EBEBEB" }}
        onClick={() => setModalOpen("ALARM_DRAWER", true, expiredFoodList)}
      />
      {expiredFoodList.some((food) => !food.is_read) && (
        <div className="absolute -right-1 top-0 h-[0.4rem] w-[0.4rem] rounded-full bg-primary"></div>
      )}
    </div>
  );
}

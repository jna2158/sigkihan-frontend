import profile from "../../../../assets/alarm_profile.png";
import { motion, PanInfo } from "framer-motion";
import { readPopupNotification } from "../../../../services/notificationService";
import useUserStore from "../../../../store/useUserStore";
import { Notification } from "../../../../types/Notification";
import { Dispatch, SetStateAction } from "react";

export default function ExpiredAlarmModal({
  notiList,
  setNotiList,
}: {
  notiList: Notification[];
  setNotiList: Dispatch<SetStateAction<Notification[]>>;
}) {
  const { userInfo } = useUserStore();
  const refrigeratorId = userInfo?.refrigerator_id;

  const handleDragEnd = async (event: Event, info: PanInfo) => {
    if (info.offset.y < -50) {
      try {
        await readPopupNotification(refrigeratorId || 0);
        setNotiList([]);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex justify-center bg-black/40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="mt-[1rem] flex h-[6.6rem] w-[22rem] flex-row items-center rounded-2xl bg-[#F5F6F8] shadow-[2px_2px_10px_0px_rgba(0,0,0,0.1)]"
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        onDragEnd={handleDragEnd}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
      >
        <img
          src={profile}
          alt="profile"
          className="mt-[19.3px] h-[5.5rem] w-[3.6rem]"
        />
        <div className="ml-4">
          <h2 className="mb-2 text-[14px] font-medium text-gray-500">
            앗! 소비기한에 임박한 식품이 있어!
            <br />
            맛있게 먹었어?
          </h2>
          <section className="flex flex-row">
            <div className="center h-[1.6rem] w-[2.6rem] rounded-[1.5rem] bg-primary text-[14px] text-white">
              {notiList[0].d_day}
            </div>
            <p className="ml-[0.6rem] w-[11rem] truncate text-[14px] font-semibold text-primary">
              {notiList.map((item) => item.message).join(", ")}
            </p>
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
}

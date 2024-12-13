import FoodBottomSheet from "../../components/FoodBottomSheet/foodBottomSheet";
import Search from "../../components/common/search";
import FoodGrid from "./components/food/foodGrid";
import Header from "./components/header";
import AddFoodBtn from "./components/food/addFoodBtn";
import useModalStore from "../../store/useModalStore";
import ExpiredAlarmModal from "./components/alarmmodal/expiredAlarmModal";
import NoFood from "./components/food/noFood";
import { getFoodList } from "../../services/refrigeService";
import { useEffect } from "react";
import useUserStore from "../../store/useUserStore";
import useRefrigeStore from "../../store/useRefrigeStore";
import { getNotificationList } from "../../services/notificationService";
import { useState } from "react";

export default function FoodListPage() {
  const { modals, setModalOpen } = useModalStore();
  const { setFood } = useRefrigeStore();
  const { userInfo } = useUserStore.getState();
  const { foodItems } = useRefrigeStore.getState();
  const [notiList, setNotiList] = useState<any[]>([]);

  // 냉장고 음식 리스트 조회
  useEffect(() => {
    if (!userInfo) return;

    getFoodList(userInfo.refrigerator_id)
      .then((res) => {
        setFood(res.data);
      })
      .catch((err) => {
        console.error(err);
        setFood([]);
      });
    getNotiList();
  }, [userInfo]);

  // 알림 목록 조회
  const getNotiList = async () => {
    if (!userInfo) return;

    try {
      const res = await getNotificationList(
        userInfo.refrigerator_id,
        userInfo.id,
      );
      setNotiList(res.data);
    } catch (err) {
      setNotiList([]);
      setNotiList([
        { id: 1, content: "오이", date: "2024-12-13" },
        { id: 2, content: "당근", date: "2024-12-13" },
      ]);
      console.error(err);
    }
  };

  return (
    <main className="flex h-full flex-col px-[1.3rem]">
      <Header />

      <article className="relative flex flex-1 flex-col">
        {foodItems.length !== 0 ? (
          <div className="flex-1">
            <FoodGrid />
          </div>
        ) : (
          <NoFood />
        )}
        <div className="sticky bottom-4">
          <AddFoodBtn />
        </div>
      </article>

      <FoodBottomSheet
        isOpen={modals.FOOD_BOTTOM_SHEET_MODAL?.isOpen || false}
      />

      <div
        className={`overlay z-[60] mx-auto w-layout transition-opacity duration-500 ${
          modals.FOOD_BOTTOM_SHEET_MODAL?.isOpen
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setModalOpen("FOOD_BOTTOM_SHEET_MODAL", false)}
      />

      {notiList.length !== 0 && <ExpiredAlarmModal notiList={notiList} setNotiList={setNotiList} />}
    </main>
  );
}

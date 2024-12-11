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

export default function FoodListPage() {
  const { modals, setModalOpen } = useModalStore();
  const { addFood } = useRefrigeStore();
  const { userInfo } = useUserStore.getState();
  const { foodItems } = useRefrigeStore.getState();

  useEffect(() => {
    if (!userInfo) return;

    getFoodList(userInfo.refrigerator_id)
      .then((res) => {
        addFood(res.data);
      })
      .catch((err) => {
        console.error(err);
        addFood([]);
      });
  }, [userInfo]);

  return (
    <main className="px-[1.3rem]">
      <Header />

      <article className="relative flex-1">
        {foodItems.length !== 0 ? <FoodGrid /> : <NoFood />}
        <AddFoodBtn />
      </article>

      <FoodBottomSheet isOpen={modals.FOOD_BOTTOM_SHEET_MODAL} />

      <div
        className={`overlay z-[60] mx-auto w-layout transition-opacity duration-500 ${
          modals.FOOD_BOTTOM_SHEET_MODAL
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setModalOpen("FOOD_BOTTOM_SHEET_MODAL", false)}
      />

      {/* <ExpiredAlarmModal /> */}
    </main>
  );
}

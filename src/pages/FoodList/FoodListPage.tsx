import { useEffect } from "react";
import FoodBottomSheet from "../../components/FoodBottomSheet/foodBottomSheet";
import FoodGrid from "./components/food/foodGrid";
import Header from "./components/header";
import AddFoodBtn from "./components/food/addFoodBtn";
import ExpiredAlarmModal from "./components/alarmmodal/expiredAlarmModal";
import NoFood from "./components/food/noFood";
import { useFoodData } from "../../hooks/useFoodData";
import { useModalControl } from "../../hooks/useModalControl";
import { usePopupNotification } from "../../hooks/usePopupNotification";
import { useUser } from "../../hooks/useUserInfo";

export default function FoodListPage() {
  const { userInfo, refrigeratorId } = useUser();
  const { foodItems, fetchFoodList } = useFoodData();
  const { notiList, setNotiList } = usePopupNotification(
    refrigeratorId || null,
  );
  const { isOpen, handleCloseModal } = useModalControl(
    "FOOD_BOTTOM_SHEET_MODAL",
  );

  useEffect(() => {
    if (refrigeratorId) {
      fetchFoodList();
    }
  }, [userInfo, refrigeratorId]);

  return (
    <main className="flex h-full flex-col px-[1.3rem]">
      <header>
        <Header />
      </header>

      <section className="relative flex flex-1 flex-col">
        {foodItems.length !== 0 ? (
          <article className="flex-1">
            <FoodGrid />
          </article>
        ) : (
          <article>
            <NoFood />
          </article>
        )}

        <nav className="sticky bottom-4">
          <AddFoodBtn />
        </nav>
      </section>

      <aside>
        <FoodBottomSheet isOpen={isOpen} />

        <div
          role="presentation"
          className={`overlay z-[60] mx-auto w-layout transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={handleCloseModal}
        />

        {notiList.length !== 0 && (
          <ExpiredAlarmModal notiList={notiList} setNotiList={setNotiList} />
        )}
      </aside>
    </main>
  );
}

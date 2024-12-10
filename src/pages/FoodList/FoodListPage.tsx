import FoodBottomSheet from "../../components/FoodBottomSheet/foodBottomSheet";
import Search from "../../components/common/search";
import FoodGrid from "./components/food/foodGrid";
import Header from "./components/header";
import AddFoodBtn from "./components/food/addFoodBtn";
import useModalStore from "../../store/useModalStore";

export default function FoodListPage() {
  const { modals } = useModalStore();

  return (
    <main className="px-[1.3rem]">
      <Header />

      <article className="relative flex-1">
        <FoodGrid />
        <AddFoodBtn />
      </article>

      <FoodBottomSheet isOpen={modals.FOOD_BOTTOM_SHEET_MODAL} />

      {modals.FOOD_BOTTOM_SHEET_MODAL && (
        <div className="overlay z-[60] mx-auto w-layout" />
      )}
    </main>
  );
}

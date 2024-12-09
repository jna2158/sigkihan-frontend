import FoodBottomSheet from "../../components/FoodBottomSheet/foodBottomSheet";
import Search from "../../components/common/search";
import FoodGrid from "./components/food/foodGrid";
import Header from "./components/header";
import AddFoodBtn from "./components/food/addFoodBtn";
import useModalStore from "../../store/useModalStore";

export default function FoodListPage() {
  const { modals } = useModalStore();

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <article className="relative flex-1 px-[1.3rem] pt-[1.4rem]">
        <section className="h-full">
          {/* <Search /> */}
          <FoodGrid />
          <AddFoodBtn />
        </section>
      </article>

      <FoodBottomSheet isOpen={modals.FOOD_BOTTOM_SHEET_MODAL} />
      {modals.FOOD_BOTTOM_SHEET_MODAL && (
        <div className="overlay z-[60] mx-auto w-layout" />
      )}
    </main>
  );
}

import { useState } from "react";
import FoodBottomSheet from "../../components/FoodBottomSheet/foodBottomSheet";
import Search from "../../components/common/search";
import Footer from "../../components/common/footer";
import FoodGrid from "./components/food/foodGrid";
import Header from "./components/header";
import AddFoodBtn from "./components/food/addFoodBtn";
import useModalStore from "../../store/useModalStore";

export default function FoodListPage() {
  const { modals } = useModalStore();

  return (
    <main>
      <Header />
      <article className="relative h-full flex-1 bg-slate-300 px-[1.2rem] pt-[1.4rem]">
        <section className="h-[50rem] overflow-y-auto pb-20">
          <Search />
          <FoodGrid />
          <AddFoodBtn />
        </section>
      </article>

      <Footer />
      <FoodBottomSheet isOpen={modals.FOOD_BOTTOM_SHEET_MODAL} />
      {modals.FOOD_BOTTOM_SHEET_MODAL && (
        <div className="overlay z-[60] mx-auto w-layout" />
      )}
    </main>
  );
}

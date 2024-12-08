import { useState } from "react";
import FoodBottomSheet from "../../components/FoodBottomSheet/foodBottomSheet";
import Search from "../../components/common/search";
import Footer from "../../components/common/footer";
import FoodGrid from "./components/food/foodGrid";
import Header from "./components/header";
import AddFoodBtn from "./components/food/addFoodBtn";

export default function FoodListPage() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  return (
    <main>
      <Header />
      <article className="fixed bottom-0 h-[50rem] w-layout bg-slate-300 px-[1.2rem] pt-[1.4rem]">
        <div className="relative h-screen overflow-hidden">
          <section className="h-full overflow-y-auto pb-20">
            <Search />
            <FoodGrid />
            <AddFoodBtn setIsBottomSheetOpen={setIsBottomSheetOpen} />
          </section>
        </div>
      </article>

      <Footer />

      <FoodBottomSheet
        isOpen={isBottomSheetOpen}
        onClose={() => setIsBottomSheetOpen(false)}
      />
      {isBottomSheetOpen && (
        <div className="fixed inset-0 z-[60] mx-auto w-layout bg-black bg-opacity-50" />
      )}
    </main>
  );
}

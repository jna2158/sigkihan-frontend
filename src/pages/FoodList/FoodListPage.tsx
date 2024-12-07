import { useState } from "react";
import FoodCard from "./components/FoodCard";
import FoodBottomSheet from "../../components/FoodBottomSheet/foodBottomSheet";
import MyFridgeName from "../../components/common/myFridgeName";
import logo from "../../assets/logo.png";
import Search from "../../components/common/search";
export default function FoodListPage() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <header className="flex px-[1.3rem] py-4">
        <div className="flex-1">
          <MyFridgeName />
        </div>
        <nav className="flex gap-[0.5rem]">
          <img src={logo} alt="로고 이미지" className="h-[24px] w-[24px]" />
          <img src={logo} alt="로고 이미지" className="h-[24px] w-[24px]" />
        </nav>
      </header>

      <article className="fixed bottom-0 h-[45rem] w-layout bg-slate-300 px-[1.2rem] pt-[1.4rem]">
        <div className="relative h-screen overflow-hidden">
          <div className="h-full overflow-y-auto pb-20">
            <Search />
            <section
              className="flex flex-wrap gap-[0.5rem] pt-[4.4rem]"
              aria-label="식재료 목록"
            >
              <FoodCard />
              <FoodCard />
              <FoodCard />
              <FoodCard />
              <FoodCard />
              <FoodCard />
            </section>
            <footer className="mt-4">
              <button
                className="basic-button"
                onClick={() => setIsBottomSheetOpen(true)}
                aria-label="재료 추가하기"
              >
                재료 추가하기
              </button>
            </footer>
          </div>
          <FoodBottomSheet
            isOpen={isBottomSheetOpen}
            onClose={() => setIsBottomSheetOpen(false)}
          />
        </div>
      </article>
    </main>
  );
}

import { useEffect, useRef, useState } from "react";
import Search from "../common/search";
import SearchResultGrid from "./components/searchResultGrid";

export default function FoodBottomSheet({ isOpen }: { isOpen: boolean }) {
  const sheetRef = useRef<HTMLElement>(null);
  const [startY, setStartY] = useState<number>(0);
  const [currentHeight, setCurrentHeight] = useState<number>(400);
  const minHeight = 200;
  const maxHeight = window.innerHeight * 0.8;
  const [isDragging, setIsDragging] = useState(false);

  // 포인터 클릭 시작
  const handlePointerDown = (e: React.PointerEvent | React.TouchEvent) => {
    setIsDragging(true);
    if ("touches" in e) {
      setStartY(e.touches[0].clientY);
    } else {
      setStartY(e.clientY);
    }
  };

  // 포인터 클릭 후 이동
  const handlePointerMove = (e: PointerEvent | TouchEvent) => {
    if (!isDragging || !sheetRef.current) return;

    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    const deltaY = startY - clientY;
    const newHeight = currentHeight + deltaY;

    if (newHeight >= minHeight && newHeight <= maxHeight) {
      sheetRef.current.style.height = `${newHeight}px`;
    }
  };

  // 포인터 클릭 해제
  const handlePointerUp = () => {
    if (!isDragging || !sheetRef.current) return;
    setIsDragging(false);
    setCurrentHeight(sheetRef.current.offsetHeight);
  };

  // 검색창에 포커스 온 했을 때
  const handleFocus = () => {
    setCurrentHeight(window.innerHeight * 0.95);
  };

  // window 이벤트 리스너 등록/제거
  useEffect(() => {
    if (isOpen) {
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", handlePointerUp);
      window.addEventListener("touchmove", handlePointerMove);
      window.addEventListener("touchend", handlePointerUp);
    }

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("touchend", handlePointerUp);
    };
  }, [isOpen, isDragging, startY, currentHeight]);

  if (!isOpen) return null;

  return (
    <aside
      className="fixed bottom-0 left-1/2 z-[70] w-layout -translate-x-1/2 rounded-t-3xl bg-white"
      style={{ height: currentHeight }}
      ref={sheetRef}
    >
      <header
        className="center h-10 w-full cursor-grab active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onTouchStart={handlePointerDown}
        onPointerUp={handlePointerUp}
        onTouchEnd={handlePointerUp}
      >
        <div className="bg-lightGray h-1 w-16 rounded-full" />
      </header>
      <main
        className="overflow-y-auto bg-white p-4"
        style={{ height: "calc(100% - 40px)" }}
      >
        <input
          type="text"
          placeholder="검색어를 입력해주세요 ex) 먹다 남은 햄버거"
          className="bg-lightLightGray h-[3rem] w-[22rem] rounded-[0.6rem] pl-[0.8rem] text-[14px] text-[#9BA5B7]"
          onFocus={handleFocus}
        />
        <SearchResultGrid />
      </main>
    </aside>
  );
}

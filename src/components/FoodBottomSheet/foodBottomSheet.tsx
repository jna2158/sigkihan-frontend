import { useEffect, useRef, useState } from "react";
import SearchResultGrid from "./components/searchResultGrid";
import useModalStore from "../../store/useModalStore";
import {
  PointerEvent as ReactPointerEvent,
  TouchEvent as ReactTouchEvent,
} from "react";

export default function FoodBottomSheet({ isOpen }: { isOpen: boolean }) {
  const sheetRef = useRef<HTMLElement>(null);
  const [startY, setStartY] = useState<number>(0);
  const [currentHeight, setCurrentHeight] = useState<number>(400);
  const minHeight = 200;
  const maxHeight = window.innerHeight * 0.8;
  const [isDragging, setIsDragging] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isOpening, setIsOpening] = useState(true);
  const { setModalOpen } = useModalStore();
  const dismissThreshold = 150;
  const initialY = useRef<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handlePointerDown = (e: ReactPointerEvent | ReactTouchEvent) => {
    setIsDragging(true);
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    setStartY(clientY);
    initialY.current = clientY;
  };

  const handlePointerMove = (
    e: globalThis.PointerEvent | globalThis.TouchEvent,
  ) => {
    if (!isDragging || !sheetRef.current) return;

    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    const deltaY = startY - clientY;
    const newHeight = currentHeight + deltaY;

    if (newHeight >= minHeight && newHeight <= maxHeight) {
      sheetRef.current.style.height = `${newHeight}px`;
      setCurrentHeight(newHeight);
      setStartY(clientY);
    }
  };

  const handlePointerUp = (e: ReactPointerEvent | ReactTouchEvent) => {
    if (!isDragging || !sheetRef.current) return;

    const clientY =
      "touches" in e
        ? (e as ReactTouchEvent).changedTouches[0].clientY
        : (e as ReactPointerEvent).clientY;
    const totalDragDistance = clientY - initialY.current;

    if (
      totalDragDistance > dismissThreshold &&
      currentHeight <= minHeight + 50
    ) {
      setIsClosing(true);
      setTimeout(() => {
        setModalOpen("FOOD_BOTTOM_SHEET_MODAL", false);
        setIsClosing(false);
        setCurrentHeight(400);
        setStartY(0);
        initialY.current = 0;
        setIsDragging(false);
      }, 200);
    } else {
      sheetRef.current.style.height = `${currentHeight}px`;
    }

    setIsDragging(false);
  };

  const handleFocus = () => {
    const targetHeight = window.innerHeight * 0.95;
    if (sheetRef.current) {
      sheetRef.current.style.height = `${targetHeight}px`;
      setCurrentHeight(targetHeight);
    }
  };

  const handleGlobalPointerMove = (
    e: globalThis.PointerEvent | globalThis.TouchEvent,
  ) => {
    handlePointerMove(e);
  };

  const handleGlobalPointerUp = (
    e: globalThis.PointerEvent | globalThis.TouchEvent,
  ) => {
    handlePointerUp(e as any);
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("pointermove", handleGlobalPointerMove);
      window.addEventListener("pointerup", handleGlobalPointerUp);
      window.addEventListener("touchmove", handleGlobalPointerMove);
      window.addEventListener("touchend", handleGlobalPointerUp);
    }

    return () => {
      window.removeEventListener("pointermove", handleGlobalPointerMove);
      window.removeEventListener("pointerup", handleGlobalPointerUp);
      window.removeEventListener("touchmove", handleGlobalPointerMove);
      window.removeEventListener("touchend", handleGlobalPointerUp);
    };
  }, [isOpen, isDragging, startY, currentHeight]);

  useEffect(() => {
    if (isOpen) {
      if (sheetRef.current) {
        sheetRef.current.style.height = "400px";
      }
      setCurrentHeight(400);
      setIsDragging(false);
      setStartY(0);
      initialY.current = 0;

      requestAnimationFrame(() => {
        setIsOpening(true);
        requestAnimationFrame(() => {
          setIsOpening(false);
        });
      });
      setSearchQuery("");
    }
  }, [isOpen]);

  if (!isOpen && !isClosing) return null;

  return (
    <aside
      className={`bottom-sheet-container ${
        isClosing ? "translate-y-full" : "translate-y-0"
      } ${isOpening ? "translate-y-full" : "translate-y-0"}`}
      style={{
        height: currentHeight,
        transition: isDragging
          ? "none"
          : "height 0.2s ease-out, transform 0.2s ease-out",
      }}
      ref={sheetRef}
    >
      <header
        className="center h-10 w-full cursor-grab active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onTouchStart={(e: ReactTouchEvent) => handlePointerDown(e)}
        onPointerUp={(e: ReactPointerEvent) => handlePointerUp(e)}
        onTouchEnd={(e: ReactTouchEvent) => handlePointerUp(e)}
      >
        <div className="h-1 w-16 rounded-full bg-[#96A2A9]" />
      </header>
      <main
        className="overflow-y-auto bg-white p-4"
        style={{ height: "calc(100% - 40px)" }}
      >
        <input
          type="text"
          placeholder="검색어를 입력하세요 ex) 먹다 남은 햄버거"
          className="h-[3rem] w-[22rem] rounded-[0.6rem] bg-gray-50 pl-[0.8rem] text-[14px] text-[#9BA5B7]"
          onFocus={handleFocus}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchResultGrid searchQuery={searchQuery} />
      </main>
    </aside>
  );
}

import { useRef, useState, useCallback, useEffect } from "react";
import useModalStore from "../../store/useModalStore";
import { useDraggableSheet } from "../../hooks/useDraggableSheet";
import { useGlobalPointerEvents } from "../../hooks/useGlobalPointerEvents";
import { useBottomSheetInit } from "../../hooks/useBottomSheetInit";
import { SearchInput } from "./components/bottomSheet/searchInput";
import { BottomSheetHeader } from "./components/bottomSheet/bottomSheetHeader";
import { ChangeEvent } from "react";
import SearchResultGrid from "./components/searchResultGrid";

export default function FoodBottomSheet({ isOpen }: { isOpen: boolean }) {
  const { setModalOpen } = useModalStore();
  const sheetRef = useRef<HTMLElement>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isClosing, setIsClosing] = useState(false);
  const [isOpening, setIsOpening] = useState(true);
  const heightRef = useRef<number>(400);

  const {
    currentHeight,
    isDragging,
    handlePointerDown,
    handlePointerUp,
    handlePointerMove,
    setCurrentHeight,
  } = useDraggableSheet(heightRef.current, () =>
    setModalOpen("FOOD_BOTTOM_SHEET_MODAL", false),
  );

  useEffect(() => {
    if (currentHeight > 0) {
      heightRef.current = currentHeight;
    }
  }, [currentHeight]);

  const handleFocus = useCallback(() => {
    const targetHeight = window.innerHeight * 0.95;
    if (sheetRef.current) {
      sheetRef.current.style.height = `${targetHeight}px`;
      setCurrentHeight(targetHeight);
      heightRef.current = targetHeight;
    }
  }, [setCurrentHeight]);

  useGlobalPointerEvents({
    isOpen,
    isDragging,
    handlePointerMove,
    handlePointerUp,
  });

  useBottomSheetInit({
    isOpen,
    sheetRef,
    setCurrentHeight,
    setIsOpening,
    setSearchQuery,
  });

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
      <BottomSheetHeader
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      />
      <main
        className="overflow-y-auto bg-white p-4"
        style={{ height: "calc(100% - 40px)" }}
      >
        <SearchInput
          value={searchQuery}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchQuery(e.target.value)
          }
          onFocus={handleFocus}
        />
        <SearchResultGrid searchQuery={searchQuery} />
      </main>
    </aside>
  );
}

import { useEffect } from "react";

interface BottomSheetInitProps {
  isOpen: boolean;
  sheetRef: React.RefObject<HTMLElement>;
  setCurrentHeight: (height: number) => void;
  setIsOpening: (isOpening: boolean) => void;
  setSearchQuery: (query: string) => void;
}

export const useBottomSheetInit = ({
  isOpen,
  sheetRef,
  setCurrentHeight,
  setIsOpening,
  setSearchQuery,
}: BottomSheetInitProps) => {
  useEffect(() => {
    if (!isOpen) return;

    if (sheetRef.current) {
      sheetRef.current.style.height = "400px";
    }
    setCurrentHeight(400);

    requestAnimationFrame(() => {
      setIsOpening(true);
      requestAnimationFrame(() => {
        setIsOpening(false);
      });
    });

    // 검색어 초기화
    setSearchQuery("");
  }, [isOpen, sheetRef, setCurrentHeight, setIsOpening, setSearchQuery]);
};

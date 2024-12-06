import { useEffect, useRef, useState } from "react";

export default function FoodBottomSheet({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const sheetRef = useRef<HTMLElement>(null);
  const [startY, setStartY] = useState<number>(0);
  const [currentHeight, setCurrentHeight] = useState<number>(400);
  const minHeight = 200;
  const maxHeight = window.innerHeight * 0.8;
  const [isDragging, setIsDragging] = useState(false);

  // 포인터 클릭 시작
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setStartY(e.clientY);
  };

  // 포인터 클릭 후 이동
  const handlePointerMove = (e: PointerEvent) => {
    if (!isDragging || !sheetRef.current) return;

    const deltaY = startY - e.clientY;
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

  // window 이벤트 리스너 등록/제거
  useEffect(() => {
    if (isOpen) {
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", handlePointerUp);
    }

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isOpen, isDragging, startY, currentHeight]);

  if (!isOpen) return null;

  return (
    <aside
      className="absolute inset-x-0 bottom-0 bg-white"
      style={{ height: currentHeight }}
      ref={sheetRef}
    >
      <header
        className="center h-10 w-full cursor-grab active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        <div className="h-1 w-16 rounded-full bg-gray-300" />
      </header>
      <main
        className="overflow-y-auto bg-gray-100 p-4"
        style={{ height: "calc(100% - 40px)" }}
      >
        bottomsheet
      </main>
    </aside>
  );
}

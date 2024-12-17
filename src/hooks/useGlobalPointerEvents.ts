import { useEffect } from "react";

interface GlobalPointerEventsProps {
  isOpen: boolean;
  isDragging: boolean;
  handlePointerMove: (e: PointerEvent | TouchEvent) => void;
  handlePointerUp: (e: PointerEvent | TouchEvent) => void;
}

export const useGlobalPointerEvents = ({
  isOpen,
  isDragging,
  handlePointerMove,
  handlePointerUp,
}: GlobalPointerEventsProps) => {
  useEffect(() => {
    if (!isOpen) return;

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("touchmove", handlePointerMove);
    window.addEventListener("touchend", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("touchend", handlePointerUp);
    };
  }, [isOpen, isDragging, handlePointerMove, handlePointerUp]);
};

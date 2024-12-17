import { useState } from "react";
import {
  PointerEvent as ReactPointerEvent,
  TouchEvent as ReactTouchEvent,
} from "react";

export const useDraggableSheet = (
  initialHeight: number,
  onClose: () => void,
) => {
  const [currentHeight, setCurrentHeight] = useState(initialHeight);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startHeight, setStartHeight] = useState(0);

  const handlePointerDown = (e: ReactPointerEvent | ReactTouchEvent) => {
    setIsDragging(true);
    setStartY(
      "touches" in e ? e.touches[0].clientY : (e as ReactPointerEvent).clientY,
    );
    setStartHeight(currentHeight);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    if (currentHeight < initialHeight * 0.5) {
      onClose();
    } else {
      setCurrentHeight(initialHeight);
    }
  };

  const handlePointerMove = (e: PointerEvent | TouchEvent) => {
    if (!isDragging) return;
    const currentY = e instanceof TouchEvent ? e.touches[0].clientY : e.clientY;
    const deltaY = currentY - startY;
    const newHeight = Math.max(0, startHeight - deltaY);
    setCurrentHeight(newHeight);
  };

  return {
    currentHeight,
    isDragging,
    setCurrentHeight,
    handlePointerDown,
    handlePointerUp,
    handlePointerMove,
  };
};

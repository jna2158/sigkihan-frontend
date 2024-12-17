import {
  PointerEvent as ReactPointerEvent,
  TouchEvent as ReactTouchEvent,
} from "react";

interface BottomSheetHeaderProps {
  onPointerDown: (e: ReactPointerEvent | ReactTouchEvent) => void;
  onPointerUp: (e: ReactPointerEvent | ReactTouchEvent) => void;
}

export function BottomSheetHeader({
  onPointerDown,
  onPointerUp,
}: BottomSheetHeaderProps) {
  return (
    <header
      className="center h-10 w-full cursor-grab active:cursor-grabbing"
      onPointerDown={onPointerDown}
      onTouchStart={onPointerDown}
      onPointerUp={onPointerUp}
      onTouchEnd={onPointerUp}
    >
      <div className="h-1 w-16 rounded-full bg-[#96A2A9]" />
    </header>
  );
}

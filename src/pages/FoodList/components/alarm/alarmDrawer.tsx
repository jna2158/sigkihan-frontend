import { useState, useEffect } from "react";
import useModalStore from "../../../../store/useModalStore";

export default function AlarmDrawer() {
  const { setModalOpen } = useModalStore();
  const [isClosing, setIsClosing] = useState(false);
  const [isOpening, setIsOpening] = useState(true);

  useEffect(() => {
    setIsOpening(false);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setModalOpen("ALARM_DRAWER", false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <section className="absolute inset-0 z-[60]">
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isClosing ? "opacity-0" : "opacity-100"} ${isOpening ? "opacity-0" : "opacity-100"}`}
        onClick={handleClose}
      />
      <article
        className={`absolute right-0 top-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 ease-out ${isClosing ? "translate-x-full" : "translate-x-0"} ${isOpening ? "translate-x-full" : "translate-x-0"}`}
      >
        <button className="mb-4" onClick={handleClose}>
          닫기
        </button>
        <h2 className="text-lg font-bold">알림</h2>
      </article>
    </section>
  );
}

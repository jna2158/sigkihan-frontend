import { useState, useEffect } from "react";
import useModalStore from "../../../../store/useModalStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import AlarmItem from "./alarmItem";
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
    <section className="absolute inset-0 z-[60] mx-auto w-layout overflow-hidden">
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isClosing ? "opacity-0" : "opacity-100"} ${isOpening ? "opacity-0" : "opacity-100"}`}
        onClick={handleClose}
      />
      <article
        className={`absolute right-0 top-0 h-full w-[18rem] bg-white pt-[8.6rem] shadow-lg transition-transform duration-300 ease-out ${isClosing ? "translate-x-full" : "translate-x-0"} ${isOpening ? "translate-x-full" : "translate-x-0"}`}
      >
        <button
          className="absolute right-4 top-20 text-gray-500 hover:text-gray-700"
          onClick={() => handleClose()}
          aria-label="모달 닫기"
        >
          <FontAwesomeIcon icon={faX} />
        </button>

        <AlarmItem />
        <AlarmItem />
        <AlarmItem />
        <AlarmItem />
      </article>
    </section>
  );
}

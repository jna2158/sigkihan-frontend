import { useState } from "react";
import logo from "../../../../assets/logo.png";

export default function AlarmIcon() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative">
      <img
        src={logo}
        alt="알림 아이콘"
        className="h-[24px] w-[24px] cursor-pointer hover:opacity-80"
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          <div
            className={`absolute right-0 top-0 z-50 h-screen w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="p-4">
              <button className="mb-4" onClick={() => setIsOpen(false)}>
                닫기
              </button>
              <h2 className="text-lg font-bold">알림</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

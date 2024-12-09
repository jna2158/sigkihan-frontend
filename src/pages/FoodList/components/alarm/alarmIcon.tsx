import { useState } from "react";
import logo from "../../../../assets/logo.png";

export default function AlarmIcon() {
  const [isOpen, setIsOpen] = useState(false);

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
            className="absolute inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            style={{
              width: "100vw",
              height: "100vh",
              transform: "translateX(-50%)",
            }}
          />

          {/* Drawer 내용 */}
          <div className="absolute right-[-10rem] top-0 z-50 w-80 transform bg-white shadow-lg">
            <div className="p-4">
              <button className="mb-4" onClick={() => setIsOpen(false)}>
                닫기
              </button>
              <h2 className="text-lg font-bold">알림</h2>
              {/* 여기에 drawer 내용을 추가하세요 */}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareNodes,
  faUser,
  faHouse,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function BottomNavigation() {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);

  const handleShareClick = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <>
      {showToast && (
        <aside className="fixed bottom-24 left-1/2 z-50 w-[20rem] -translate-x-1/2 transform">
          <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-6 py-4 shadow-lg">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50">
              <FontAwesomeIcon
                icon={faToolbox}
                className="text-lg text-gray-300"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-medium text-gray-600">
                서비스 준비중입니다.
              </p>
              <p className="text-xs text-gray-400">
                곧 새로운 기능으로 찾아뵙겠습니다.
              </p>
            </div>
          </div>
        </aside>
      )}

      <footer className="fixed bottom-0 z-50 h-16 w-layout border-t border-[#EEF1F4] bg-white">
        <nav className="flex h-full items-center justify-around">
          <button
            className="flex flex-1 flex-col items-center gap-1"
            onClick={() => navigate("/share")}
          >
            <FontAwesomeIcon icon={faShareNodes} style={{ color: "#3BD273" }} />
            <span className="text-[13px] text-gray-500">냉장고 공유</span>
          </button>

          <button
            className="flex flex-1 flex-col items-center gap-1"
            onClick={() => navigate("/foodlist")}
          >
            <FontAwesomeIcon icon={faHouse} style={{ color: "#3BD273" }} />
            <span className="text-[13px] text-gray-500">홈화면</span>
          </button>

          <button
            className="flex flex-1 flex-col items-center gap-1"
            onClick={() => navigate("/user/profile")}
          >
            <FontAwesomeIcon icon={faUser} style={{ color: "#3BD273" }} />
            <span className="text-[13px] text-gray-500">개인설정</span>
          </button>
        </nav>
      </footer>
    </>
  );
}

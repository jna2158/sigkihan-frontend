import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function BottomNavigation() {
  const navigate = useNavigate();

  return (
    <footer className="fixed bottom-0 z-50 h-[4rem] w-layout border-t border-[#EEF1F4] bg-white">
      <nav className="flex h-full items-center justify-around">
        <button className="flex flex-col items-center gap-1">
          <FontAwesomeIcon icon={faShareNodes} style={{ color: "#3BD273" }} />
          <span className="text-[13px] text-gray-500">냉장고 공유</span>
        </button>

        <button className="flex flex-col items-center gap-1">
          <FontAwesomeIcon icon={faHouse} style={{ color: "#3BD273" }} />
          <span className="text-[13px] text-gray-500">홈화면</span>
        </button>

        <button className="flex flex-col items-center gap-1">
          <FontAwesomeIcon icon={faGear} style={{ color: "#3BD273" }} />
          <span
            className="text-[13px] text-gray-500"
            onClick={() => navigate("/user/profile")}
          >
            설정
          </span>
        </button>
      </nav>
    </footer>
  );
}

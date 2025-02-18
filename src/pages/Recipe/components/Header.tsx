import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = () => {
    if (location.pathname.includes("/recipe/")) {
      navigate("/recipe");
    } else {
      navigate("/foodlist");
    }
  };

  return (
    <header className="center mt-[2.9rem] flex items-center justify-between py-4">
      <FontAwesomeIcon
        icon={faChevronLeft}
        className="cursor-pointer text-gray-300"
        onClick={handleNavigation}
      />
      <h1 className="flex-grow text-center text-2xl font-semibold text-black">
        AI 냉장고 레시피
      </h1>
    </header>
  );
}

import { useNavigate } from "react-router-dom";

export default function GoToFoodListButton() {
  const navigate = useNavigate();

  return (
    <button className="primary-button" onClick={() => navigate("/foodlist")}>
      <span className="font-inter text-base font-semibold">
        신선한 하루를 열어보세요!
      </span>
    </button>
  );
}

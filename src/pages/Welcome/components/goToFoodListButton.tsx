import { useNavigate } from "react-router-dom";

export default function GoToFoodListButton() {
  const navigate = useNavigate();

  return (
    <button
      className="basic-button bg-primary"
      onClick={() => navigate("/foodlist")}
    >
      신선한 하루를 열어보세요!
    </button>
  );
}

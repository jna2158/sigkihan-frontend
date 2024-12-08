import { useNavigate } from "react-router-dom";

export default function GoToFoodListButton() {
  const navigate = useNavigate();

  return (
    <button
      className="basic-button bg-green-400"
      onClick={() => navigate("/foodlist")}
    >
      신선한 하루를 열어보세요!
    </button>
  );
}

import { useNavigate } from "react-router-dom";

export default function RecommandRecipe() {
  const navigate = useNavigate();

  return (
    <button
      className="basic-button mt-[1.8rem] w-[10.8rem] cursor-pointer bg-primary"
      onClick={() => {
        navigate("/recipe");
      }}
      aria-label="AI 냉장고 레시피"
    >
      AI 냉장고 레시피
    </button>
  );
}

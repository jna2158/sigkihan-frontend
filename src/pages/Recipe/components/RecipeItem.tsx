import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import useRecipeStore from "../../../store/useRecipeStore";

export default function RecipeItem({ recipe }: { recipe: any }) {
  const navigate = useNavigate();
  const { setSelectedRecipe } = useRecipeStore();

  // 레시피 상세 페이지로 이동
  const handleClickRecipe = (title: string) => {
    navigate(`/recipe/${title}`);
    setSelectedRecipe(recipe);
  };

  return (
    <div
      className="h-[9.9rem] w-[21.9rem] cursor-pointer rounded-3xl bg-gray-50 px-[2rem] py-[1.5rem]"
      onClick={() => handleClickRecipe(recipe.title)}
    >
      <p className="text-semibold text-[16px] text-gray-500">{recipe.title}</p>

      <div className="mt-[0.5rem] text-[14px] text-gray-400">
        <p>있는 재료 : {recipe.available_ingredients.join(", ")}</p>
        <p>없는 재료 : {recipe.missing_ingredients.join(", ")}</p>
      </div>

      <div className="mt-4 flex justify-between">
        <p className="text-[14px] font-semibold text-primary">
          조리시간 : {recipe.cooking_time}
        </p>
        <p className="center gap-2 text-[14px] font-semibold text-primary">
          난이도
          <span className="flex gap-1">
            <FontAwesomeIcon
              icon={faCircle}
              className={
                recipe.difficulty === "상" ||
                recipe.difficulty === "중" ||
                recipe.difficulty === "하"
                  ? "text-primary"
                  : "text-gray-100"
              }
            />
            <FontAwesomeIcon
              icon={faCircle}
              className={
                recipe.difficulty === "상" || recipe.difficulty === "중"
                  ? "text-primary"
                  : "text-gray-100"
              }
            />
            <FontAwesomeIcon
              icon={faCircle}
              className={
                recipe.difficulty === "상" ? "text-primary" : "text-gray-100"
              }
            />
          </span>
        </p>
      </div>
    </div>
  );
}

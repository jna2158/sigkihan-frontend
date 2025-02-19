import { useParams } from "react-router-dom";
import Header from "../Recipe/components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import useRecipeStore from "../../store/useRecipeStore";

export default function RecipeDetailPage() {
  const { id } = useParams();
  const { recipe, selectedRecipe } = useRecipeStore();

  return (
    <main className="flex h-full flex-col px-[1.3rem]">
      <header>
        <Header />
        <div className="h-[29.6rem] w-[21.9rem] cursor-pointer overflow-y-auto rounded-3xl bg-gray-50 p-[2rem]">
          <p className="text-semibold text-[16px] text-gray-500">
            {selectedRecipe?.title}
          </p>

          <div className="mt-[0.5rem] text-[14px] text-gray-400">
            <p>
              있는 재료 : {selectedRecipe?.available_ingredients.join(", ")}
            </p>
            <p>없는 재료 : {selectedRecipe?.missing_ingredients.join(", ")}</p>
          </div>

          <div className="mt-4 flex justify-between">
            <p className="text-[14px] font-semibold text-primary">
              조리시간 : {selectedRecipe?.cooking_time}
            </p>
            <p className="center gap-2 text-[14px] font-semibold text-primary">
              난이도
              <span className="flex gap-1">
                <FontAwesomeIcon
                  icon={faCircle}
                  className={
                    selectedRecipe?.difficulty === "상" ||
                    selectedRecipe?.difficulty === "중" ||
                    selectedRecipe?.difficulty === "하"
                      ? "text-primary"
                      : "text-gray-100"
                  }
                />
                <FontAwesomeIcon
                  icon={faCircle}
                  className={
                    selectedRecipe?.difficulty === "상" ||
                    selectedRecipe?.difficulty === "중"
                      ? "text-primary"
                      : "text-gray-100"
                  }
                />
                <FontAwesomeIcon
                  icon={faCircle}
                  className={
                    selectedRecipe?.difficulty === "상"
                      ? "text-primary"
                      : "text-gray-100"
                  }
                />
              </span>
            </p>
          </div>

          <hr className="my-[2rem] text-gray-200" />

          <div className="flex flex-col gap-[0.5rem]">
            {selectedRecipe?.cooking_steps.map((step: any, index: number) => {
              const [title, description] = step.split(": ");
              return (
                <div key={index} className="flex flex-col gap-2">
                  <p className="text-[14px] text-gray-500">{title}</p>
                  <p className="text-[14px] text-gray-400">{description}</p>
                </div>
              );
            })}
          </div>

          {selectedRecipe?.cooking_tips && (
            <div className="mt-4 rounded-lg bg-gray-100 p-4">
              <h3 className="text-[16px] font-semibold text-primary">
                조리 팁
              </h3>
              <ul className="list-disc text-[14px] text-gray-500">
                {selectedRecipe.cooking_tips.map((tip: any, index: number) => (
                  <p key={index} className="mb-2">{tip}</p>
                ))}
              </ul>
            </div>
          )}
        </div>
      </header>
    </main>
  );
}

import Header from "./components/Header";
import RecipeItem from "./components/RecipeItem";
import { useState, useEffect } from "react";
import RecipeLoading from "./components/RecipeLoading";
import { getRecommendRecipe } from "../../services/refrigeService";
import { useUser } from "../../hooks/useUserInfo";
import useRecipeStore from "../../store/useRecipeStore";
export default function RecipePage() {
  const [isLoading, setIsLoading] = useState(true);
  const { setRefrigeratorId, refrigeratorId, updateUser, userInfo } = useUser();
  const [item, setItem] = useState<any>([]);
  const { recipe, setRecipe } = useRecipeStore();

  useEffect(() => {
    // 냉장고 레시피 조회
    if (refrigeratorId) {
      setIsLoading(true);
      getRecommendRecipe(refrigeratorId).then((res) => {
        setIsLoading(false);
        setRecipe(res.data.recipes);
        setItem(res.data.recipes);
      });
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <RecipeLoading />
      ) : (
        <main className="flex h-full flex-col px-[1.3rem]">
          <header>
            <Header />
          </header>
          <article className="flex flex-wrap gap-[1.5rem]">
            {item.map((item: any) => (
              <RecipeItem key={item.id} recipe={item} />
            ))}
          </article>
        </main>
      )}
    </>
  );
}

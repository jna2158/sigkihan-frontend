import Header from "./components/Header";
import RecipeItem from "./components/RecipeItem";
import { useState, useEffect } from "react";
import RecipeLoading from "./components/RecipeLoading";

interface Recipe {
  id: number;
  name: string;
  description: string;
  image: string;
}

export default function RecipePage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 냉장고 레시피 조회
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
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
            <RecipeItem />
            <RecipeItem />
            <RecipeItem />
          </article>
        </main>
      )}
    </>
  );
}

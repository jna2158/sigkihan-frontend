import { create } from "zustand";
import { persist } from "zustand/middleware";

export type RecipeStore = {
  recipe: any[];
  selectedRecipe: any;
  setRecipe: (recipe: any[]) => void;
  setSelectedRecipe: (recipe: any) => void;
};

const useRecipeStore = create(
  persist<RecipeStore>(
    (set) => ({
      recipe: [],
      selectedRecipe: null,

      // 레시피 목록 전체 설정
      setRecipe: (recipe) =>
        set(() => ({
          recipe: recipe,
        })),
      setSelectedRecipe: (recipe: any) =>
        set(() => ({
          selectedRecipe: recipe,
        })),
    }),
    {
      name: "recipe-storage",
    },
  ),
);

export default useRecipeStore;

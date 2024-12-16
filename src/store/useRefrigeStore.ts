import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Food } from "../types/Food";

export type RefrigeStore = {
  foodItems: Food[];

  setFood: (food: Food[]) => void;
  addFood: (food: Food[]) => void;
  removeFood: (id: number) => void;
  updateFoodQuantity: (id: number, quantity: number) => void;
  updateFood: (id: number, updates: Partial<Food>) => void;
};

const useRefrigeStore = create(
  persist<RefrigeStore>(
    (set) => ({
      foodItems: [],

      // 식품 목록 전체 설정
      setFood: (food) =>
        set(() => ({
          foodItems: food,
        })),

      // 새로운 식품 목록 추가
      addFood: (food) =>
        set((state) => ({
          foodItems: [...state.foodItems, ...food],
        })),

      // 식품 수량 업데이트
      updateFoodQuantity: (id, quantity) =>
        set((state) => ({
          foodItems: state.foodItems.map((item) =>
            item.id === id ? { ...item, quantity } : item,
          ),
        })),

      // 식품 정보 업데이트
      updateFood: (id, updates) =>
        set((state) => ({
          foodItems: state.foodItems.map((item) =>
            item.id === id ? { ...item, ...updates } : item,
          ),
        })),

      // 식품 삭제
      removeFood: (id) =>
        set((state) => ({
          foodItems: state.foodItems.filter((item) => item.id !== id),
        })),
    }),
    {
      name: "refrige-storage",
    },
  ),
);

export default useRefrigeStore;

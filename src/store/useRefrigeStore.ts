import { create } from "zustand";
import { persist } from "zustand/middleware";

export type FoodItem = {
  id: number;
  name: string;
  default_food_name: string;
  purchase_date: Date;
  expiration_date: Date;
  quantity: number;
  image?: string;
};

export type RefrigeStore = {
  foodItems: FoodItem[];

  setFood: (food: FoodItem[]) => void;
  addFood: (food: FoodItem[]) => void;
  removeFood: (id: number) => void;
  // updateFoodQuantity: (id: number, quantity: number) => void;
  updateFood: (id: number, updates: Partial<FoodItem>) => void;
};

const useRefrigeStore = create(
  persist<RefrigeStore>(
    (set) => ({
      foodItems: [],
      setFood: (food) =>
        set(() => ({
          foodItems: food,
        })),
      addFood: (food) =>
        set((state) => ({
          foodItems: [...state.foodItems, ...food],
        })),

      // updateFoodQuantity: (id, quantity) =>
      //   set((state) => ({
      //     foodItems: state.foodItems.map((item) =>
      //       item.id === id ? { ...item, quantity } : item,
      //     ),
      //   })),

      updateFood: (id, updates) =>
        set((state) => ({
          foodItems: state.foodItems.map((item) =>
            item.id === id ? { ...item, ...updates } : item,
          ),
        })),

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

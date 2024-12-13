import { create } from "zustand";
import { persist } from "zustand/middleware";

export type UserInfo = {
  id: number;
  email: string;
  name: string;
  profileImage: {
    name: string;
    image: number;
  };
  refrigerator_id: number;
};

export type UserStore = {
  userInfo: UserInfo | null;

  setUserInfo: (user: UserInfo) => void;
  updateUser: (updates: Partial<UserInfo>) => void;
  clearUserInfo: () => void;
};

const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      userInfo: null,

      setUserInfo: (user) => {
        console.log("user", user);
        set({ userInfo: user });
      },

      updateUser: (updates) =>
        set((state) => ({
          userInfo: state.userInfo ? { ...state.userInfo, ...updates } : null,
        })),

      clearUserInfo: () => set({ userInfo: null }),
    }),
    {
      name: "user-storage",
    },
  ),
);

export default useUserStore;

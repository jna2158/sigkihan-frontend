import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserProfile } from "../types/User";

export type UserStore = {
  userInfo: UserProfile | null;

  setUserInfo: (user: UserProfile) => void;
  updateUser: (updates: UserProfile) => void;
};

const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      userInfo: null,

      // 유저 정보 설정
      setUserInfo: (user) => {
        set({ userInfo: user });
      },

      // 유저 정보 업데이트
      updateUser: (updates) =>
        set((state) => ({
          userInfo: state.userInfo ? { ...state.userInfo, ...updates } : null,
        })),
    }),
    {
      name: "user-storage",
    },
  ),
);

export default useUserStore;

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Memo } from "../types/Memo";

export type MemoStore = {
  memoList: Memo[];

  setMemoList: (memo: Memo[]) => void;
  // updateMemo: (updates: Memo) => void;
};

const useUserStore = create(
  persist<MemoStore>(
    (set) => ({
      memoList: [],

      // 메모 리스트 생성
      setMemoList: (memo) => {
        set({ memoList: memo });
      },

      // 메모 업데이트
      // updateMemo: (updates) =>
      //   set((state) => ({
      //     memoList: state.memoList.map((memo) =>
      //       memo.id === updates.id ? { ...memo, ...updates } : memo,
      //     ),
      //   })),
    }),
    {
      name: "memo-storage",
    },
  ),
);

export default useUserStore;

import { create } from "zustand";

interface ModalState {
  modals: {
    [key: string]: {
      isOpen: boolean;
      data?: any;
    };
  };
  setModalOpen: (name: string, isOpen: boolean, data?: any) => void;
}

const useModalStore = create<ModalState>((set) => ({
  modals: {},

  // 모달 열기, 닫기
  setModalOpen: (name, isOpen, data) =>
    set((state) => ({
      modals: {
        ...state.modals,
        [name]: { isOpen, data },
      },
    })),
}));

export default useModalStore;

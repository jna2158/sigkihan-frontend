import { create } from "zustand";

interface ModalState {
  modals: { [key: string]: boolean };
  setModalOpen: (name: string, isOpen: boolean) => void;
}

const useModalStore = create<ModalState>((set) => ({
  modals: {},
  setModalOpen: (name, isOpen) =>
    set((state) => ({ modals: { ...state.modals, [name]: isOpen } })),
}));

export default useModalStore;

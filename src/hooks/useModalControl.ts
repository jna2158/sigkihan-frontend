import useModalStore from "../store/useModalStore";

export const useModalControl = (modalName: string) => {
  const { modals, setModalOpen } = useModalStore();

  const handleOpenModal = () => {
    setModalOpen(modalName, true);
  };

  const handleCloseModal = () => {
    setModalOpen(modalName, false);
  };

  return {
    isOpen: modals[modalName]?.isOpen || false,
    handleCloseModal,
    handleOpenModal,
  };
};

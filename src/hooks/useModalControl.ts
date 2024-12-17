import useModalStore from "../store/useModalStore";

export const useModalControl = (modalName: string, data?: any) => {
  const { modals, setModalOpen } = useModalStore();

  const handleOpenModal = () => {
    setModalOpen(modalName, true, data);
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

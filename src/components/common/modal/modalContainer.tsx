import useModalStore from "../../../store/useModalStore";
import AddFoodModal from "../../Modal/addFoodModal";

const MODAL_COMPONENTS = {
  ADD_FOOD_MODAL: AddFoodModal,
};

export default function ModalContainer() {
  const { modals } = useModalStore();
  return (
    <>
      {Object.entries(modals).map(([modalName, isOpen]) => {
        if (!isOpen) return null;

        const ModalComponent =
          MODAL_COMPONENTS[modalName as keyof typeof MODAL_COMPONENTS];
        if (!ModalComponent) return null;

        return <ModalComponent key={modalName} />;
      })}
    </>
  );
}

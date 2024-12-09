import AlarmDrawer from "../../../pages/FoodList/components/alarm/alarmDrawer";
import useModalStore from "../../../store/useModalStore";
import AddFoodModal from "../../Modal/addFoodModal";
import ModifyFoodModal from "../../Modal/modifyFoodModal";
import ConfirmCancelModal from "./confirmCancelModal";

const MODAL_COMPONENTS = {
  ADD_FOOD_MODAL: AddFoodModal,
  MODIFY_FOOD_MODAL: ModifyFoodModal,
  ALARM_DRAWER: AlarmDrawer,
  CONFIRM_CANCEL_MODAL: ConfirmCancelModal,
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

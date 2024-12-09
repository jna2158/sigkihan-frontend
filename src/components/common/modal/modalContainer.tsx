import AlarmDrawer from "../../../pages/FoodList/components/alarm/alarmDrawer";
import useModalStore from "../../../store/useModalStore";
import AddFoodModal from "../../Modal/addFoodModal";

const MODAL_COMPONENTS = {
  ADD_FOOD_MODAL: AddFoodModal,
  ALARM_DRAWER: AlarmDrawer,
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

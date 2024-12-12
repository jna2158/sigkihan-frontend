import AlarmDrawer from "../../../pages/FoodList/components/alarm/alarmDrawer";
import useModalStore from "../../../store/useModalStore";
import AddFoodModal from "../../Modal/addFoodModal";
import ModifyFoodModal from "../../Modal/modifyFoodModal";
import ConfirmCancelModal from "./confirmCancelModal";
import SelectProfileModal from "../../../pages/User/components/selectProfileModal";
import ExpiredAlarmModal from "../../../pages/FoodList/components/alarmmodal/expiredAlarmModal";
import SelectEatCountModal from "../../../pages/FoodList/components/food/selectEatCountModal";
import SelectDiscardCountModal from "../../../pages/FoodList/components/food/selectDiscardCountModal";
import { WithDrawConfirmModal } from "../../../pages/User/components/withDrawConfirmModal";

const MODAL_COMPONENTS = {
  ADD_FOOD_MODAL: AddFoodModal,
  MODIFY_FOOD_MODAL: ModifyFoodModal,
  ALARM_DRAWER: AlarmDrawer,
  CONFIRM_CANCEL_MODAL: ConfirmCancelModal,
  SELECT_PROFILE_MODAL: SelectProfileModal,
  EXPIRED_ALARM_MODAL: ExpiredAlarmModal,
  SELECT_EAT_COUNT_MODAL: SelectEatCountModal,
  SELECT_DISCARD_COUNT_MODAL: SelectDiscardCountModal,
  WITHDRAW_CONFIRM_MODAL: WithDrawConfirmModal,
};

export default function ModalContainer() {
  const { modals } = useModalStore();
  return (
    <>
      {Object.entries(modals).map(([modalName, modalState]) => {
        if (!modalState.isOpen) return null;

        const ModalComponent =
          MODAL_COMPONENTS[modalName as keyof typeof MODAL_COMPONENTS];
        if (!ModalComponent) return null;

        return <ModalComponent key={modalName} data={modalState.data} />;
      })}
    </>
  );
}

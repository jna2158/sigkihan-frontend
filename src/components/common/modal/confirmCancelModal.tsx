import useModalStore from "../../../store/useModalStore";
import useRefrigeStore from "../../../store/useRefrigeStore";
import { deleteFoodList } from "../../../services/refrigeService";
import useUserStore from "../../../store/useUserStore";
import { useNavigate } from "react-router-dom";

interface ConfirmCancelModalProps {
  data?: {
    id: number;
  };
}

export default function ConfirmCancelModal({ data }: ConfirmCancelModalProps) {
  const { setModalOpen } = useModalStore();
  const { removeFood } = useRefrigeStore();
  const { userInfo } = useUserStore();
  const navigate = useNavigate();
  const handleDeleteBtn = async () => {
    if (!data?.id || !userInfo?.refrigerator_id) return;

    try {
      const res = await deleteFoodList(userInfo.refrigerator_id, data.id);
      removeFood(res.data.iď);
      setModalOpen("CONFIRM_CANCEL_MODAL", false);
      navigate("/foodlist");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section
      className="center overlay z-[70]"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <div
        className="relative h-[10rem] w-[21rem] rounded-3xl bg-white p-6 pt-[2.3rem]"
        role="document"
      >
        <p className="center font-semibold mb-[1.7rem] text-[20px]">
        해당 식품을 삭제하시겠습니까?
        </p>

        <footer className="mt-4 flex justify-end gap-2">
          <button
            className="basic-button h-[3.3rem] w-[9.3rem] bg-gray-100 text-gray-400"
            onClick={() => setModalOpen("CONFIRM_CANCEL_MODAL", false)}
          >
            아니오
          </button>
          <button
            className="basic-button h-[3.3rem] w-[9.3rem] bg-primary text-white"
            onClick={handleDeleteBtn}
          >
            삭제
          </button>
        </footer>
      </div>
    </section>
  );
}

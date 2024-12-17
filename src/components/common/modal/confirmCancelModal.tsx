import useRefrigeStore from "../../../store/useRefrigeStore";
import { deleteFoodList } from "../../../services/refrigeService";
import { useNavigate } from "react-router-dom";
import { Food } from "../../../types/Food";
import { useUser } from "../../../hooks/useUserInfo";
import { useModalControl } from "../../../hooks/useModalControl";
export default function ConfirmCancelModal({ data }: { data: Food }) {
  const { handleCloseModal } = useModalControl("CONFIRM_CANCEL_MODAL");
  const { removeFood } = useRefrigeStore();
  const { refrigeratorId } = useUser();
  const navigate = useNavigate();

  const handleDeleteBtn = async () => {
    if (!data?.id || !refrigeratorId) return;

    try {
      const res = await deleteFoodList(refrigeratorId, data.id);
      removeFood(res.data.iď);
      handleCloseModal();
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
        <p className="center mb-[1.7rem] text-[20px] font-semibold">
          해당 식품을 삭제하시겠습니까?
        </p>

        <footer className="mt-4 flex justify-end gap-2">
          <button
            className="basic-button h-[3.3rem] w-[9.3rem] bg-gray-100 text-gray-400"
            onClick={handleCloseModal}
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

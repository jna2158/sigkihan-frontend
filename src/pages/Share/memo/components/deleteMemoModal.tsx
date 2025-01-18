import { useUser } from "../../../../hooks/useUserInfo";
import { useModalControl } from "../../../../hooks/useModalControl";
import { deleteMemo } from "../../../../services/memoService";
import { Memo } from "../../../../types/Memo";
import useMemoStore from "../../../../store/useMemoStore";

export default function DeleteMemoModal(data: { data: Memo }) {
  const { handleCloseModal } = useModalControl("DELETE_MEMO_MODAL");
  const { refrigeratorId } = useUser();
  const { deleteMemoItem } = useMemoStore();

  // 메모 삭제
  const handleDeleteBtn = async () => {
    if (!data.data.id || !refrigeratorId) return;

    try {
      await deleteMemo(refrigeratorId, data.data.id);
      deleteMemoItem(data.data.id);
      handleCloseModal();
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
          메모를 삭제하시겠습니까?
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
            예
          </button>
        </footer>
      </div>
    </section>
  );
}

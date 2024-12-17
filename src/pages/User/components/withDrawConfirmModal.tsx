import { withdraw } from "../../../services/authService";
import { useModalControl } from "../../../hooks/useModalControl";
import { useUser } from "../../../hooks/useUserInfo";
import { clearStorageAndRedirect } from "../../../shared/utils/clearStorageAndRedirect";

export const WithDrawConfirmModal = () => {
  const { handleCloseModal } = useModalControl("WITHDRAW_CONFIRM_MODAL");
  const { userInfo } = useUser();

  // 탈퇴 버튼 클릭 시
  const handleClickWithDrawBtn = async () => {
    try {
      if (!userInfo) return;

      await withdraw(userInfo.id);
      handleCloseModal();
      clearStorageAndRedirect();
    } catch (error) {
      console.error("탈퇴 실패", error);
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
          정말로 탈퇴하시겠습니까?
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
            onClick={handleClickWithDrawBtn}
          >
            예
          </button>
        </footer>
      </div>
    </section>
  );
};

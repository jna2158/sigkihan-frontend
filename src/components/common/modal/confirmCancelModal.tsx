import useModalStore from "../../../store/useModalStore";

export default function ConfirmCancelModal() {
  const { setModalOpen } = useModalStore();

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
        <p className="center text-semibold text-[20px] mb-[1.7rem]">
          해당 제품을 삭제하시겠습니까?
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
            onClick={() => setModalOpen("CONFIRM_CANCEL_MODAL", false)}
          >
            삭제
          </button>
        </footer>
      </div>
    </section>
  );
}

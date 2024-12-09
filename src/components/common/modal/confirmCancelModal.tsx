import useModalStore from "../../../store/useModalStore";

export default function ConfirmCancelModal() {
  const { setModalOpen } = useModalStore();

  return (
    <section
      className="center overlay z-[70]"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <div className="relative rounded-lg bg-white p-6" role="document">
        <header>
          <h2 id="dialog-title" className="sr-only">
            삭제 확인
          </h2>
        </header>

        <div id="dialog-description">
          <p>해당 제품을 삭제하시겠습니까?</p>
        </div>

        <footer className="mt-4 flex justify-end gap-2">
          <button
            className="rounded bg-red-500 px-4 py-2 text-white"
            onClick={() => setModalOpen("CONFIRM_CANCEL_MODAL", false)}
          >
            아니요
          </button>
          <button
            className="rounded bg-gray-500 px-4 py-2 text-white"
            onClick={() => setModalOpen("CONFIRM_CANCEL_MODAL", false)}
          >
            예
          </button>
        </footer>
      </div>
    </section>
  );
}

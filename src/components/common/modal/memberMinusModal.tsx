import { useModalControl } from "../../../hooks/useModalControl";

export default function MemberMinusModal({ data }: { data: { name: string } }) {
  const { handleCloseModal } = useModalControl("MEMBER_MINUS_MODAL");

  const handleDeleteBtn = async () => {
    handleCloseModal();
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
          {data.name}님을 방출하시겠습니까?
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
            확인
          </button>
        </footer>
      </div>
    </section>
  );
}

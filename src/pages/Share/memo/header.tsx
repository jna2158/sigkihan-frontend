import { useModalControl } from "../../../hooks/useModalControl";

export default function Header() {
  const { handleOpenModal } = useModalControl("ADD_MEMO_MODAL");

  return (
    <header className="flex items-center pb-[1.9rem] pt-[3.3rem]">
      <span className="text-[22px] font-semibold text-black">냉장고 메모</span>
      <div className="absolute right-[2.1rem] flex gap-4">
        <button
          onClick={handleOpenModal}
          className="text-[16px] font-medium text-gray-500"
        >
          추가
        </button>
      </div>
    </header>
  );
}

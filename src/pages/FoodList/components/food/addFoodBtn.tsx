import { useModalControl } from "../../../../hooks/useModalControl";

export default function AddFoodBtn() {
  const { handleOpenModal } = useModalControl("FOOD_BOTTOM_SHEET_MODAL");

  return (
    <button
      className="basic-button mt-[1.8rem] bg-primary"
      onClick={handleOpenModal}
      aria-label="식품 추가하기"
    >
      식품 추가하기
    </button>
  );
}

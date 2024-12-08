import useModalStore from "../../../../store/useModalStore";

export default function AddFoodBtn() {
  const { setModalOpen } = useModalStore();
  return (
    <button
      className="basic-button bg-green-500"
      onClick={() => setModalOpen("FOOD_BOTTOM_SHEET_MODAL", true)}
      aria-label="식품 추가하기"
    >
      식품 추가하기
    </button>
  );
}

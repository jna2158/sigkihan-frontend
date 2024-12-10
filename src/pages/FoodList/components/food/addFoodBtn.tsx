import useModalStore from "../../../../store/useModalStore";

export default function AddFoodBtn() {
  const { setModalOpen } = useModalStore();
  return (
    <button
      className="basic-button mt-[1.8rem] bg-primary"
      onClick={() => setModalOpen("FOOD_BOTTOM_SHEET_MODAL", true)}
      aria-label="재료 추가하기"
    >
      재료 추가하기
    </button>
  );
}

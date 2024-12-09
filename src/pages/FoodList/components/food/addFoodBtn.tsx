import useModalStore from "../../../../store/useModalStore";

export default function AddFoodBtn() {
  const { setModalOpen } = useModalStore();
  return (
    <button
      className="primary-button fixed bottom-[6.5rem]"
      onClick={() => setModalOpen("FOOD_BOTTOM_SHEET_MODAL", true)}
      aria-label="재료 추가하기"
    >
      재료 추가하기
    </button>
  );
}

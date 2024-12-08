export default function AddFoodBtn({
  setIsBottomSheetOpen,
}: {
  setIsBottomSheetOpen: (isOpen: boolean) => void;
}) {
  return (
    <button
      className="basic-button bg-green-500"
      onClick={() => setIsBottomSheetOpen(true)}
      aria-label="재료 추가하기"
    >
      재료 추가하기
    </button>
  );
}

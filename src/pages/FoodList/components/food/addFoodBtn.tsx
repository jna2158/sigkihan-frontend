import { useModalControl } from "../../../../hooks/useModalControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function AddFoodBtn() {
  const { handleOpenModal } = useModalControl("FOOD_BOTTOM_SHEET_MODAL");

  return (
    <button
      className="mb-[2rem] ml-[16rem] h-[4rem] w-[4rem] rounded-full bg-primary text-2xl text-white"
      onClick={handleOpenModal}
      aria-label="식품 추가하기"
    >
      <FontAwesomeIcon icon={faPlus} />
    </button>
  );
}

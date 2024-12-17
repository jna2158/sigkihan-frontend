import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function ModalCloseBtn({
  handleCloseModal,
}: {
  handleCloseModal: () => void;
}) {
  return (
    <button
      className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
      onClick={handleCloseModal}
      aria-label="모달 닫기"
    >
      <FontAwesomeIcon icon={faX} />
    </button>
  );
}

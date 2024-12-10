import useModalStore from "../../../store/useModalStore";
import apple from "../../../assets/apple.svg";

export default function SearchResultCard() {
  const { setModalOpen } = useModalStore();

  return (
    <>
      <button
        className="center h-[5rem] w-[5rem] rounded-3xl bg-gray-50"
        onClick={() => setModalOpen("ADD_FOOD_MODAL", true)}
      >
        <div className="center cursor-pointer flex-col gap-[0.6rem] rounded-3xl">
          <img src={apple} alt="사과" className="h-[1.7rem] w-[2.5rem]" />
          <p className="text-center text-[14px] font-semibold text-gray-500">
            사과
          </p>
        </div>
      </button>
    </>
  );
}

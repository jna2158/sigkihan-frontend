import useModalStore from "../../../store/useModalStore";

export default function SearchResultCard() {
  const { setModalOpen } = useModalStore();

  return (
    <>
      <button
        className="center h-[5rem] w-[5rem] rounded-3xl bg-slate-400"
        onClick={() => setModalOpen("ADD_FOOD_MODAL", true)}
      >
        result
      </button>
    </>
  );
}

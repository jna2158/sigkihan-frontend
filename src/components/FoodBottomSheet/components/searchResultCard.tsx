import useModalStore from "../../../store/useModalStore";

export default function SearchResultCard({
  item,
}: {
  item: { id: number; name: string; image: string };
}) {
  const { setModalOpen } = useModalStore();

  return (
    <>
      <button
        className="center h-[5rem] w-[5rem] rounded-3xl bg-gray-50"
        onClick={() => setModalOpen("ADD_FOOD_MODAL", true, item)}
      >
        <div className="center cursor-pointer flex-col gap-[0.6rem] rounded-3xl">
          <img
            src={item.image}
            alt="음식 사진"
            className="h-[1.7rem] w-[2.5rem]"
          />
          <p
            className="truncate text-center text-[14px] font-semibold text-gray-500"
            style={{ maxWidth: "5ch" }}
          >
            {item.name}
          </p>
        </div>
      </button>
    </>
  );
}

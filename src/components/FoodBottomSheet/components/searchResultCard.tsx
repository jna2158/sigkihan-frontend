import { Food, NewFood } from "../../../types/Food";
import { useModalControl } from "../../../hooks/useModalControl";

export default function SearchResultCard({ item }: { item: Food | NewFood }) {
  const { handleOpenModal } = useModalControl("ADD_FOOD_MODAL", item);
  return (
    <>
      <button
        className="center h-[5rem] w-[5rem] rounded-3xl bg-gray-50"
        onClick={handleOpenModal}
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

import nofood from "../../../assets/nofood.png";

export default function NoContent() {
  return (
    <article className="center h-[calc(100dvh-280px)]" aria-label="식재료 목록">
      <div className="flex flex-col items-center gap-[1.8rem]">
        <img
          src={nofood}
          className="h-auto w-auto opacity-70 grayscale"
          alt="빈 냉장고"
        />
        <p className="text-[20px] font-semibold text-gray-300">
          소비한 식품이 없어요...
        </p>
      </div>
    </article>
  );
}

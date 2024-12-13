import nofood from "../../../../assets/nofood.png";

export default function NoFood() {
  return (
    <section
      className="flex h-[calc(100dvh-280px)] items-center justify-center"
      aria-label="식재료 목록"
    >
      <div className="flex flex-col items-center gap-[1.8rem]">
        <img
          src={nofood}
          className="h-auto w-auto opacity-70 grayscale"
          alt="빈 냉장고"
        />
        <p className="text-[20px] font-semibold text-gray-300">
          냉장고가 텅 비어있어요...
        </p>
      </div>
    </section>
  );
}

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
          className="opacity-70 grayscale w-auto h-auto" 
          alt="빈 냉장고"
        />
        <p className="text-semibold text-[20px] text-gray-300">
          냉장고가 텅 비어있어요...
        </p>
      </div>
    </section>
  );
}

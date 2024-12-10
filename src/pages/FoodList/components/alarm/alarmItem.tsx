export default function AlarmItem() {
  return (
    <div className="flex h-[5rem] w-full border-[1px] border-[#E7E7E7] px-[1.2rem] py-[1.4rem] text-[13px]">
      <span>
        유효기간에 임박한 재료가 있어
        <br /> 맛있게 먹었어?
      </span>

      <span className="absolute right-[0.9rem] text-[12px] text-gray-500">
        1시간 전
      </span>
    </div>
  );
}

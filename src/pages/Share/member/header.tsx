import thumbnail from "../../../../assets/thumbnail.png";

export default function Header({
  isEditMode,
  setIsEditMode,
}: {
  isEditMode: boolean;
  setIsEditMode: (isEditMode: boolean) => void;
}) {
  return (
    <header className="flex items-center pb-[1.9rem] pt-[2.2rem]">
      <span className="text-[22px] font-semibold text-black">
        냉장고 구성원
      </span>
      <div className="absolute right-[2.1rem] flex gap-4">
        <button
          onClick={() => setIsEditMode(!isEditMode)}
          className="text-[16px] font-medium text-gray-500"
        >
          편집
        </button>
      </div>
    </header>
  );
}

/*
내가 냉장고 주인이다.
-> 편집 버튼 클릭 -> 나를 제외한 다른 멤버에게 minus 버튼 표시


내가 냉장고 주인이 아니다.
-> 편집 버튼 클릭 -> 000님 냉장고를 나가시겠습니까? 팝업 표시

*/

import profile1 from "../../../../assets/default_profile.svg";

export default function MemoItem() {
  return (
    <div className="center h-[10.6rem] w-[9.1rem] flex-col rounded-2xl bg-gray-50 px-[1.3rem]">
      <img
        src={profile1}
        alt="profile"
        className="mb-[0.4rem] h-[2.1rem] w-[2.1rem]"
      />
      <span className="text-[12px] font-medium text-gray-300">김철수</span>
      <div className="mb-[1rem] line-clamp-2 h-[2.7rem] w-[6.4rem] overflow-hidden text-ellipsis text-[13px] text-gray-500">
        올 때 집 앞에서 메로나 아이스크림 사와
      </div>
      <div className="w-full text-right text-[12px] text-gray-200">6일 전</div>
    </div>
  );
}

import profile1 from "../../../../assets/default_profile.svg";

export default function MemberItem() {
  return (
    <div className="flex h-[4.9rem] items-center gap-[1.2rem]">
      <img
        src={profile1}
        alt={`프로필 사진 ${profile1}`}
        className="h-[42px] w-[42px]"
      />
      <span className="text-[20px] font-medium text-gray-500">김철수</span>
    </div>
  );
}

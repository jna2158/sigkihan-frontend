import checkBadge from "../../../assets/badge-check.png";
import minusBadge from "../../../assets/badge-minus.png";
import { PROFILE_IMAGES } from "../../../shared/constants/profileImages";
import { useModalControl } from "../../../hooks/useModalControl";
import { MemberType } from "../../../types/Member";

export default function MemberItem({
  member,
  isEditMode,
  currentUser,
  isRefrigeratorOwner,
}: {
  member: MemberType;
  isEditMode: boolean;
  currentUser: MemberType | null;
  isRefrigeratorOwner: boolean;
}) {
  const { handleOpenModal } = useModalControl("MEMBER_MINUS_MODAL", { member });

  // 냉장고 멤버 방출 뱃지 클릭
  const handleClickMinusBadge = () => {
    handleOpenModal();
  };

  // 프로필 이미지
  const profileImage = PROFILE_IMAGES.find(
    (profile) => profile.image === member.profile_image_id,
  )?.url;

  return (
    <div className="flex h-[5.2rem] min-w-[5.2rem] flex-col items-center gap-[1.2rem]">
      <div className="relative">
        <img
          src={profileImage}
          alt="프로필"
          className={`h-[5.3rem] w-[5.3rem] rounded-full ${
            member.name === currentUser?.name
              ? "border-4 border-white shadow-[0_2px_3px_rgba(0,0,0,0.25)]"
              : ""
          }`}
        />
        {member.role === "owner" && (
          <img
            src={checkBadge}
            alt="인증 뱃지"
            className="absolute bottom-0 right-0 h-[1.8rem] w-[1.8rem]"
          />
        )}
        {isEditMode && isRefrigeratorOwner && member.role === "member" && (
          <img
            src={minusBadge}
            alt="방출 뱃지"
            className="absolute left-0 top-0 h-[1.5rem] w-[1.5rem] cursor-pointer"
            onClick={handleClickMinusBadge}
          />
        )}
      </div>
      <span className="text-[14px] font-medium text-gray-500">
        {member.name}
      </span>
    </div>
  );
}

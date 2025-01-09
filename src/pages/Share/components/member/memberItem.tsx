import checkBadge from "../../../../assets/badge-check.png";
import minusBadge from "../../../../assets/badge-minus.png";
import { PROFILE_IMAGES } from "../../../../shared/constants/profileImages";
import { useModalControl } from "../../../../hooks/useModalControl";

type Member = {
  name: string;
  isOwner: boolean;
  isCurrentUser: boolean;
};

export default function MemberItem({
  member,
  isEditMode,
}: {
  member: Member;
  isEditMode: boolean;
}) {
  const { handleOpenModal } = useModalControl("MEMBER_MINUS_MODAL", {
    name: member.name,
  });
  const handleClickMinusBadge = () => {
    handleOpenModal();
  };

  return (
    <div className="flex h-[5.2rem] min-w-[5.2rem] flex-col items-center gap-[1.2rem]">
      <div className="relative">
        <img
          src={PROFILE_IMAGES[0].url}
          alt={`프로필 사진 ${PROFILE_IMAGES[0].name}`}
          className={`h-[5.3rem] w-[5.3rem] rounded-full ${
            member.isCurrentUser
              ? "border-4 border-white shadow-[0_2px_3px_rgba(0,0,0,0.25)]"
              : ""
          }`}
        />
        {member.isOwner && (
          <img
            src={checkBadge}
            alt="인증 뱃지"
            className="absolute bottom-0 right-0 h-[1.8rem] w-[1.8rem]"
          />
        )}
        {isEditMode && (
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

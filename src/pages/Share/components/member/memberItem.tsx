import badge from "../../../../assets/badge-check.png";
import { PROFILE_IMAGES } from "../../../../shared/constants/profileImages";

export default function MemberItem({
  name,
  isOwner,
  isCurrentUser,
}: {
  name: string;
  isOwner: boolean;
  isCurrentUser: boolean;
}) {
  return (
    <div className="flex h-[4.9rem] flex-col items-center gap-[1.2rem]">
      <div className="relative">
        <img
          src={PROFILE_IMAGES[0].url}
          alt={`프로필 사진 ${PROFILE_IMAGES[0].name}`}
          className={`h-[5.3rem] w-[5.3rem] rounded-full ${
            isCurrentUser
              ? "border-4 border-white shadow-[0_2px_3px_rgba(0,0,0,0.25)]"
              : ""
          }`}
        />
        {isOwner && (
          <img
            src={badge}
            alt="인증 뱃지"
            className="absolute bottom-0 right-0 h-[1.8rem] w-[1.8rem]"
          />
        )}
      </div>
      <span className="text-[14px] font-medium text-gray-500">{name}</span>
    </div>
  );
}

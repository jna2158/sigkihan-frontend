import { useModalControl } from "../../../hooks/useModalControl";
import { PROFILE_IMAGES } from "../../../shared/constants/profileImages";
import { MemberType } from "../../../types/Member";
import { useUser } from "../../../hooks/useUserInfo";
import { getOutMember } from "../../../services/refrigeService";
import { useNavigate } from "react-router-dom";

export default function MemberMinusModal({
  data,
}: {
  data: { member: MemberType };
}) {
  const { handleCloseModal } = useModalControl("MEMBER_MINUS_MODAL");
  const { refrigeratorId } = useUser();
  const navigate = useNavigate();

  // 냉장고 멤버 추방
  const handleDeleteBtn = async () => {
    getOutMember(refrigeratorId, data.member.id).then(() => {
      handleCloseModal();
      window.location.reload();
    });
  };

  // 프로필 이미지
  const profileImage = PROFILE_IMAGES.find(
    (profile) => profile.image === data.member.profile_image_id,
  )?.url;

  return (
    <section
      className="center overlay z-[70]"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <div
        className="relative h-[15.2rem] w-[21rem] rounded-3xl bg-white p-6 pt-[2.3rem]"
        role="document"
      >
        <div className="center mb-[1.1rem]">
          <img
            src={profileImage}
            alt="프로필"
            className="h-[4rem] w-[4rem] rounded-full"
          />
        </div>
        <p className="center mb-[1.7rem] text-[20px] font-semibold">
          {data.member.name}님을 방출하시겠습니까?
        </p>

        <footer className="mt-4 flex justify-end gap-2">
          <button
            className="basic-button h-[3.3rem] w-[9.3rem] bg-gray-100 text-gray-400"
            onClick={handleCloseModal}
          >
            아니오
          </button>
          <button
            className="basic-button h-[3.3rem] w-[9.3rem] bg-primary text-white"
            onClick={handleDeleteBtn}
          >
            확인
          </button>
        </footer>
      </div>
    </section>
  );
}

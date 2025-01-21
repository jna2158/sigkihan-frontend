import useRefrigeStore from "../../../../store/useRefrigeStore";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../../hooks/useUserInfo";
import { useModalControl } from "../../../../hooks/useModalControl";
import { MemberType } from "../../../../types/Member";
import { PROFILE_IMAGES } from "../../../../shared/constants/profileImages";
import { getOutSelf } from "../../../../services/refrigeService";

export default function GetOutSelfModal({ data }: any) {
  const { handleCloseModal } = useModalControl("GET_OUT_SELF_MODAL");
  const { removeFood } = useRefrigeStore();
  const { refrigeratorId } = useUser();
  const navigate = useNavigate();

  // 냉장고 나가기
  const handleConfirmBtn = async () => {
    await getOutSelf(refrigeratorId).then(() => {
      handleCloseModal();
      navigate("/foodlist");
    });
  };

  // 프로필 이미지
  const profileImage = PROFILE_IMAGES.find(
    (profile) => profile.image === data.data.profile_image_id,
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
          {data.data.name}님의 냉장고를 나가겠습니까?
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
            onClick={handleConfirmBtn}
          >
            확인
          </button>
        </footer>
      </div>
    </section>
  );
}

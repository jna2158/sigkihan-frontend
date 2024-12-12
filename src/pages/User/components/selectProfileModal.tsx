import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import useModalStore from "../../../store/useModalStore";
import { useState } from "react";
import { PROFILE_IMAGES } from "../../../shared/constants/profileImages";
import { updateUserInfo } from "../../../services/userInfoService";
import useUserStore from "../../../store/useUserStore";

export default function SelectProfileModal() {
  const { setModalOpen } = useModalStore();
  const [selectedProfile, setSelectedProfile] = useState(PROFILE_IMAGES[0]);
  const { userInfo, updateUser } = useUserStore();

  const handleCloseModal = async () => {
    if (!userInfo) return;

    const data = {
      name: userInfo.name,
      image: selectedProfile.image,
    };

    try {
      const res = await updateUserInfo(userInfo.id, data);
      updateUser({
        ...userInfo,
        profileImage: res.data.image.image,
      });
      setModalOpen("SELECT_PROFILE_MODAL", false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="center overlay z-[70]">
      <article className="relative w-[22.1rem] rounded-[1.3rem] bg-white p-6">
        <button
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          onClick={() => handleCloseModal()}
          aria-label="모달 닫기"
        >
          <FontAwesomeIcon icon={faX} />
        </button>
        <header className="center mb-[0.6rem] mt-[0.4rem] flex-col">
          <h1 className="text-[22px] font-semibold text-black">
            프로필 사진 선택
          </h1>
          <p className="font-regular pb-[1.5rem] text-[14px] text-gray-300">
            나를 표현할 이미지를 골라보세요!
          </p>

          <img
            src={selectedProfile.url}
            alt="프로필 사진"
            className="mb-[0.5rem] h-[7rem] w-[7rem]"
          />

          <p className="pb-[1.6rem] text-[20px] font-semibold text-gray-500">
            냉부심
          </p>

          <div className="flex gap-4">
            {PROFILE_IMAGES.map((image) => (
              <button
                key={image.image}
                onClick={() => setSelectedProfile(image)}
              >
                <img
                  src={image.url}
                  alt={`프로필 사진 ${image.image}`}
                  className={`rounded-full p-[2px] ${selectedProfile.url === image.url ? "ring-2 ring-green-500" : ""}`}
                />
              </button>
            ))}
          </div>
        </header>

        <main></main>
      </article>
    </section>
  );
}

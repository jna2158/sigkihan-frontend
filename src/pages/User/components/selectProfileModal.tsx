import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import useModalStore from "../../../store/useModalStore";
import profile from "../../../assets/default_profile.svg";
import { useEffect, useState } from "react";
import { getProfileImages } from "../../../services/userInfoService";

interface ProfileImage {
  id: number;
  name: string;
  image: string;
}

export default function SelectProfileModal() {
  const { setModalOpen } = useModalStore();
  const [selectedProfile, setSelectedProfile] = useState(profile);
  const [profileImages, setProfileImages] = useState<ProfileImage[]>([]);

  useEffect(() => {
    getProfileImages().then((res) => {
      setProfileImages(res.data);
    });
  }, []);

  return (
    <section className="center overlay z-[70]">
      <article className="relative w-[22.1rem] rounded-[1.3rem] bg-white p-6">
        <button
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          onClick={() => setModalOpen("SELECT_PROFILE_MODAL", false)}
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
            src={selectedProfile}
            alt="프로필 사진"
            className="h-[7rem] w-[7rem]"
          />

          <p className="pb-[1.6rem] text-[20px] font-semibold text-gray-500">
            냉부심
          </p>

          <div className="flex gap-4">
            {profileImages.map((image) => (
              <button
                key={image.id}
                onClick={() => setSelectedProfile(image.image)}
              >
                <img
                  src={image.image}
                  alt={`프로필 사진 ${image.id}`}
                  className="h-[3.4rem] w-[3.4rem]"
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

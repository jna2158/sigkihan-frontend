import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import useModalStore from "../../../store/useModalStore";
import profile from "../../../assets/default_profile.svg";
import profile1 from "../../../assets/profile_01.svg";
import profile2 from "../../../assets/profile_02.svg";
import profile3 from "../../../assets/profile_03.svg";
import profile4 from "../../../assets/profile_04.svg";
import { useState } from "react";

export default function SelectProfileModal() {
  const { setModalOpen } = useModalStore();
  const [selectedProfile, setSelectedProfile] = useState(profile);

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
            <button
              onClick={() => setSelectedProfile(profile1)}
              className={`rounded-full p-[2px] ${
                selectedProfile === profile1 ? "ring-2 ring-green-500" : ""
              }`}
            >
              <img
                src={profile1}
                alt="프로필 사진1"
                className="h-[3.4rem] w-[3.4rem]"
              />
            </button>
            <button
              onClick={() => setSelectedProfile(profile2)}
              className={`rounded-full p-[2px] ${
                selectedProfile === profile2 ? "ring-2 ring-green-500" : ""
              }`}
            >
              <img
                src={profile2}
                alt="프로필 사진2"
                className="h-[3.4rem] w-[3.4rem]"
              />
            </button>
            <button
              onClick={() => setSelectedProfile(profile3)}
              className={`rounded-full p-[2px] ${
                selectedProfile === profile3 ? "ring-2 ring-green-500" : ""
              }`}
            >
              <img
                src={profile3}
                alt="프로필 사진3"
                className="h-[3.4rem] w-[3.4rem]"
              />
            </button>
            <button
              onClick={() => setSelectedProfile(profile4)}
              className={`rounded-full p-[2px] ${
                selectedProfile === profile4 ? "ring-2 ring-green-500" : ""
              }`}
            >
              <img
                src={profile4}
                alt="프로필 사진4"
                className="h-[3.4rem] w-[3.4rem]"
              />
            </button>
          </div>
        </header>

        <main></main>
      </article>
    </section>
  );
}

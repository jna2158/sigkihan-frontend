import useModalStore from "../../store/useModalStore";
import { useEffect, useState } from "react";
import { getUserInfo } from "../../services/userInfoService";
import useUserStore from "../../store/useUserStore";
import { PROFILE_IMAGES } from "../../shared/constants/profileImages";

interface UserInfo {
  name: string;
  email?: string;
  image: {
    id: number;
    name: string;
    image: string;
  };
  profileImage: {
    name: string;
    image: number;
  };
}

export default function MyProfilePage() {
  const { setModalOpen } = useModalStore();
  const { userInfo } = useUserStore();
  const [info, setInfo] = useState<UserInfo | null>(null);

  const profileImageUrl = PROFILE_IMAGES.find(
    (item) => item.image === userInfo?.profileImage?.image,
  )?.url;

  // 로그아웃
  const handleClickLogoutBtn = async () => {
    try {
      localStorage.clear();
      window.location.href = "/";
    } catch (error) {
      console.error("로그아웃 실패", error);
    }
  };

  // 탈퇴
  const handleClickWithdrawBtn = async () => {
    setModalOpen("WITHDRAW_CONFIRM_MODAL", true);
  };

  // 내 정보 조회
  const getInfo = async () => {
    if (!userInfo) return;

    const res = await getUserInfo(userInfo.id);
    setInfo({
      ...res.data,
      profileImage: {
        name: res.data.image.name,
        image: res.data.image.id,
      },
    });
  };

  useEffect(() => {
    getInfo();
  }, [userInfo]);

  return (
    <main className="relative">
      <article className="flex flex-col p-8">
        <header className="flex items-center pb-[1.9rem] pt-[2.2rem]">
          <span className="ml-[0.8rem] text-[22px] font-semibold text-black">
            마이 프로필
          </span>
          <div className="absolute right-[2.1rem] flex gap-4">
            <button
              onClick={() => setModalOpen("SELECT_PROFILE_MODAL", true)}
              className="text-[16px] font-medium text-gray-500"
            >
              편집
            </button>
          </div>
        </header>

        <section className="flex items-center gap-6 rounded-3xl bg-gray-50 px-[1.7rem] py-[1.6rem]">
          <div className="">
            <img
              src={profileImageUrl}
              alt="사용자 프로필"
              className="h-[4.2rem]"
            />
          </div>
          <div className="gap-2">
            <p className="text-[20px] font-semibold text-black">{info?.name}</p>
            <p className="text-regular text-[16px] text-gray-300">
              {info?.email}
            </p>
          </div>
        </section>

        <section className="mt-[2.5rem] flex flex-col gap-[0.9rem] px-[1.7rem]">
          <a
            href="https://chiseled-magician-e00.notion.site/159e17688efe80d2af5ad36cfacbc0a3?pvs=4"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-[16px] font-medium text-gray-500"
          >
            이용약관
          </a>
          <hr />
          <a
            href="https://chiseled-magician-e00.notion.site/159e17688efe80aca204e783e4833a2a"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-[16px] font-medium text-gray-500"
          >
            개인정보처리방침
          </a>
          <hr />
          <p
            className="cursor-pointer text-[16px] font-medium text-gray-500"
            onClick={handleClickLogoutBtn}
          >
            로그아웃
          </p>
          <hr />
          <p
            className="cursor-pointer text-[16px] font-medium text-gray-500"
            onClick={handleClickWithdrawBtn}
          >
            탈퇴하기
          </p>
        </section>
      </article>
    </main>
  );
}

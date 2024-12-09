import useModalStore from "../../store/useModalStore";
import profile from "../../assets/default_profile.svg";

export default function MyProfilePage() {
  const { setModalOpen } = useModalStore();

  return (
    <main className="relative">
      <article className="flex flex-col p-8">
        <header className="flex items-center pb-[1.9rem] pt-[2.2rem]">
          <span className="ml-[0.8rem] text-[22px] text-black">
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
            <img src={profile} alt="사용자 프로필" className="h-[4.2rem]" />
          </div>
          <div className="gap-2">
            <p className="text-semibold text-[20px] text-black">식기한</p>
            <p className="text-regular text-[16px] text-gray-300">
              12345@gmail.com
            </p>
          </div>
        </section>

        <section className="mt-[2.5rem] flex flex-col gap-[0.9rem] px-[1.7rem]">
          <p className="text-[16px] font-medium text-black">개인정보처리방침</p>
          <hr />
          <p className="text-[16px] font-medium text-black">로그아웃</p>
          <hr />
          <p className="text-[16px] font-medium text-black">탈퇴하기</p>
        </section>
      </article>
    </main>
  );
}

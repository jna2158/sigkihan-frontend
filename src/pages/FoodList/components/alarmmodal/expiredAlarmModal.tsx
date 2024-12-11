import profile from "../../../../assets/alarm_profile.png";
import useModalStore from "../../../../store/useModalStore";

export default function ExpiredAlarmModal() {
  const { setModalOpen } = useModalStore();

  return (
    <div className="fixed inset-0 z-[70] flex justify-center bg-black/40">
      <div className="mt-10 flex h-[6.6rem] w-[22rem] flex-row items-center overflow-hidden rounded-2xl bg-[#F5F6F8] pt-[0.9rem] shadow-[2px_2px_10px_0px_rgba(0,0,0,0.1)]">
        <img
          src={profile}
          alt="profile"
          className="mt-[36px] h-[5.5rem] w-[3.6rem]"
        />
        <div className="ml-4">
          <h2 className="mb-2 text-[14px] font-medium text-gray-500">
            소비기한에 임박한 식품이 있어!
            <br />
            맛있게 먹었어?
          </h2>
          <section className="center flex flex-row">
            <p className="text-decoration-line: text-[14px] font-semibold text-gray-300 underline">
              오이, 당근, 사과
            </p>
            <div className="ml-14">
              <button
                className="h-[1.8rem] w-[3.8rem] rounded-3xl bg-primary text-[14px] font-semibold text-white"
                onClick={() => setModalOpen("EXPIRED_ALARM_MODAL", false)}
              >
                당연!
              </button>
              <button className="h-[1.8rem] w-[3.8rem] rounded-3xl text-[14px] font-semibold text-primary">
                아니ㅠ
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

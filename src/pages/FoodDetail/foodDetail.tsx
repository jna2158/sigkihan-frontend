import { useParams } from "react-router-dom";
import apple from "../../assets/apple.svg";
import useModalStore from "../../store/useModalStore";
import ExpiredDateBadge from "../../components/common/expiredDateBadge";
export default function FoodDetail() {
  const { id } = useParams();
  const { setModalOpen } = useModalStore();

  return (
    <main className="relative">
      <article className="flex flex-col gap-6 p-8">
        <header className="flex items-center pb-[1.9rem] pt-[2.2rem]">
          <ExpiredDateBadge />
          <span className="ml-[0.8rem] text-[22px] text-black">빨간 사과</span>
          <div className="absolute right-[2.1rem] flex gap-4">
            <button
              onClick={() => setModalOpen("MODIFY_FOOD_MODAL", true)}
              className="text-[16px] font-medium text-gray-500"
            >
              편집
            </button>
            <button
              onClick={() => setModalOpen("CONFIRM_CANCEL_MODAL", true)}
              className="text-[16px] font-medium text-gray-500"
            >
              삭제
            </button>
          </div>
        </header>

        <section className="flex gap-6 rounded-3xl bg-gray-50 px-[2.2rem] py-[1.9rem]">
          <img src={apple} alt="빨간 사과" className="h-[5.6rem]" />
          <div className="flex flex-col gap-2">
            <p>
              <span className="text-[14px] font-semibold text-gray-500">
                수량
              </span>
              <span className="font-regular ml-[3.6rem] text-[14px] text-gray-400">
                2
              </span>
            </p>
            <p>
              <span className="text-[14px] font-semibold text-gray-500">
                구매 일자
              </span>
              <span className="font-regular ml-[1.9rem] text-[14px] text-gray-400">
                2024.01.01
              </span>
            </p>
            <p>
              <span className="text-[14px] font-semibold text-gray-500">
                유효 기간
              </span>
              <span className="font-regular ml-[1.9rem] text-[14px] text-gray-400">
                2024.01.03
              </span>
            </p>
          </div>
        </section>

        <div className="flex gap-4">
          <button className="basic-button bg-primary">맛있게 먹었어요</button>
          <button className="basic-button bg-primary">폐기했어요</button>
        </div>
      </article>
    </main>
  );
}

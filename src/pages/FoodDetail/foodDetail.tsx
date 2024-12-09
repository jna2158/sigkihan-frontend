import { useParams } from "react-router-dom";
import logo from "../../assets/logo.png";
import useModalStore from "../../store/useModalStore";
export default function FoodDetail() {
  const { id } = useParams();
  const { setModalOpen } = useModalStore();

  return (
    <main className="min-h-screen">
      <article className="flex flex-col gap-6 p-8">
        <header className="flex justify-between">
          <h1 className="text-xl">빨간 사과</h1>
          <div className="flex gap-4">
            <button onClick={() => setModalOpen("MODIFY_FOOD_MODAL", true)}>
              수정
            </button>
            <button onClick={() => setModalOpen("CONFIRM_CANCEL_MODAL", true)}>
              삭제
            </button>
          </div>
        </header>

        <section className="flex gap-6">
          <img src={logo} alt="빨간 사과" className="h-28 w-28" />
          <div className="flex flex-col gap-2">
            <p>D-n 남은 날짜</p>
            <p>구매일 2024.01.01</p>
            <p>소비기한 2024.01.03</p>
            <p>수량 2</p>
          </div>
        </section>

        <div className="flex gap-4">
          <button className="basic-button bg-green-500">맛있게 먹었어요</button>
          <button className="basic-button bg-red-500">폐기했어요</button>
        </div>
      </article>
    </main>
  );
}

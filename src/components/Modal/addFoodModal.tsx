import logo from "../../assets/logo.png";
import useModalStore from "../../store/useModalStore";

export default function AddFoodModal() {
  const { setModalOpen } = useModalStore();

  return (
    <section className="center overlay z-[70]">
      <article className="relative rounded-lg bg-white p-6">
        <button
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          onClick={() => setModalOpen("ADD_FOOD_MODAL", false)}
          aria-label="모달 닫기"
        >
          X
        </button>
        <header className="flex items-center justify-between">
          <img src={logo} alt="음식 이미지" className="h-24 w-24" />
        </header>

        <main>
          <form className="flex flex-col">
            <div>
              <label htmlFor="foodName">식품명</label>
              <input type="text" id="foodName" />
            </div>
            <div>
              <label htmlFor="purchaseDate">구매일</label>
              <input type="text" id="purchaseDate" />
            </div>
            <div>
              <label htmlFor="expiryDate">소비기한</label>
              <input type="text" id="expiryDate" />
            </div>
            <div>
              <label htmlFor="quantity">수량</label>
              <input type="text" id="quantity" />
            </div>
            <footer>
              <button
                type="submit"
                className="basic-button"
                aria-label="식품 등록하기"
                onClick={() => setModalOpen("FOOD_BOTTOM_SHEET_MODAL", false)}
              >
                식품 등록하기
              </button>
            </footer>
          </form>
        </main>
      </article>
    </section>
  );
}

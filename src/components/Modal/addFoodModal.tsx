import useModalStore from "../../store/useModalStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Calendar from "../common/calendar";
import { onlyNumbers } from "../../shared/utils/onlyNumber";
import { addFoodList } from "../../services/refrigeService";
import useUserStore from "../../store/useUserStore";
import useRefrigeStore from "../../store/useRefrigeStore";

export default function AddFoodModal({ data }: { data: any }) {
  const { setModalOpen } = useModalStore();
  const { addFood } = useRefrigeStore();
  const { userInfo } = useUserStore.getState();
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarType, setCalendarType] = useState<"purchase" | "expiry">(
    "purchase",
  );
  const [purchaseDate, setPurchaseDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [quantity, setQuantity] = useState("");

  // 날짜 선택 시 날짜 포맷팅
  const handleDateSelect = (date: Date) => {
    const formattedDate = date.toISOString().split("T")[0];
    if (calendarType === "purchase") {
      setPurchaseDate(formattedDate);
    } else {
      setExpiryDate(formattedDate);
    }
    setShowCalendar(false);
  };

  // 재료 등록 버튼 클릭 시
  const handleClickAddFoodBtn = () => {
    if (!userInfo) return;

    const food = {
      refrigerator_id: userInfo.refrigerator_id,
      default_food_id: data.id,
      name: data.name,
      purchase_date: purchaseDate,
      expiration_date: expiryDate,
      quantity: Number(quantity),
    };

    addFoodList(userInfo.refrigerator_id, food)
      .then((res) => {
        addFood([res.data]);
        setModalOpen("ADD_FOOD_MODAL", false);
        setModalOpen("FOOD_BOTTOM_SHEET_MODAL", false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section className="center overlay z-[70]">
      <article className="relative w-[16.8rem] rounded-[1.3rem] bg-white p-6">
        <button
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          onClick={() => setModalOpen("ADD_FOOD_MODAL", false)}
          aria-label="모달 닫기"
        >
          <FontAwesomeIcon icon={faX} />
        </button>
        <header className="mb-[0.6rem] mt-[0.4rem] flex items-center justify-center">
          <img src={data.image} alt="음식 이미지" className="w-20" />
        </header>

        <main>
          <form
            className="flex flex-col gap-[0.6rem]"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="center mb-[1.3rem]">
              <label htmlFor="foodName" className="text-semibold text-[20px]">
                {data.name}
              </label>
              {/* <input type="text" id="foodName" /> */}
            </div>
            <div>
              <label
                htmlFor="quantity"
                className="text-center text-[13px] text-gray-500"
              >
                수량
              </label>
              <input
                type="text"
                id="quantity"
                className="absolute right-[2.3rem] h-[1.5rem] w-[8.3rem] bg-gray-50"
                onChange={(e) => {
                  e.target.value = onlyNumbers(e.target.value);
                  setQuantity(e.target.value);
                }}
              />
            </div>
            <div>
              <label
                htmlFor="purchaseDate"
                className="text-center text-[13px] text-gray-500"
              >
                구매일자
              </label>
              <input
                type="text"
                id="purchaseDate"
                value={purchaseDate}
                onClick={() => setShowCalendar(true)}
                readOnly
                className="absolute right-[2.3rem] h-[1.5rem] w-[8.3rem] cursor-pointer bg-gray-50"
              />
            </div>
            <div>
              <label
                htmlFor="expiryDate"
                className="text-center text-[13px] text-gray-500"
              >
                유효기간
              </label>
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onClick={() => {
                  setCalendarType("expiry");
                  setShowCalendar(true);
                }}
                readOnly
                className="absolute right-[2.3rem] h-[1.5rem] w-[8.3rem] cursor-pointer bg-gray-50"
              />
            </div>

            <footer className="flex justify-center">
              <button
                type="submit"
                className="basic-button mt-[1.6rem] h-[2.5rem] w-[10rem] bg-primary"
                aria-label="식품 등록하기"
                onClick={() => handleClickAddFoodBtn()}
              >
                재료 등록하기
              </button>
            </footer>
          </form>
        </main>
      </article>

      {showCalendar && (
        <>
          <div
            className="fixed inset-0 z-[60] bg-black bg-opacity-40"
            onClick={() => setShowCalendar(false)}
          />
          <Calendar
            onSelect={handleDateSelect}
            onClose={() => setShowCalendar(false)}
          />
        </>
      )}
    </section>
  );
}

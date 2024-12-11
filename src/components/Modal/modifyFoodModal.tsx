import useModalStore from "../../store/useModalStore";
import apple from "../../assets/apple.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Calendar from "../common/calendar";

export default function ModifyFoodModal() {
  const { setModalOpen } = useModalStore();
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarType, setCalendarType] = useState<"purchase" | "expiry">("purchase");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const handleDateSelect = (date: Date) => {
    const formattedDate = date.toISOString().split("T")[0];
    if (calendarType === "purchase") {
      setPurchaseDate(formattedDate);
    } else {
      setExpiryDate(formattedDate);
    }
    setShowCalendar(false);
  };

  return (
    <section className="center overlay z-[70]">
      <article className="relative w-[16.8rem] rounded-[1.3rem] bg-white p-6">
        <button
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          onClick={() => setModalOpen("MODIFY_FOOD_MODAL", false)}
          aria-label="모달 닫기"
        >
          <FontAwesomeIcon icon={faX} />
        </button>
        <header className="mb-[0.6rem] mt-[0.4rem] flex items-center justify-center">
          <img src={apple} alt="음식 이미지" className="w-20" />
        </header>

        <main>
          <form className="flex flex-col gap-[0.6rem]">
            <div className="center mb-[1.3rem]">
              <label htmlFor="foodName" className="text-semibold text-[20px]">
                {"소고기"}
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
                onClick={() => {
                  setCalendarType("purchase");
                  setShowCalendar(true);
                }}
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
                onClick={() => setModalOpen("MODIFY_FOOD_MODAL", false)}
              >
                수정하기
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

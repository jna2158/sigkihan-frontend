import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import useModalStore from "../../store/useModalStore";
import useUserStore from "../../store/useUserStore";
import useRefrigeStore from "../../store/useRefrigeStore";
import Calendar from "../common/calendar";
import { onlyNumbers } from "../../shared/utils/onlyNumber";
import { addFoodList, getFoodList } from "../../services/refrigeService";

interface FoodData {
  id: number | null;
  name: string;
  image: string;
}

interface AddFoodModalProps {
  data: FoodData;
}

interface FoodForm {
  name: string;
  quantity: string;
  purchaseDate: string;
  expiryDate: string;
}

export default function AddFoodModal({ data }: AddFoodModalProps) {
  const { setModalOpen } = useModalStore();
  const { addFood, setFood } = useRefrigeStore();
  const { userInfo } = useUserStore.getState();

  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarType, setCalendarType] = useState<"purchase" | "expiry">(
    "purchase",
  );

  const [formData, setFormData] = useState<FoodForm>({
    name: data.name,
    quantity: "",
    purchaseDate: new Date().toISOString().split("T")[0],
    expiryDate: "",
  });

  const handleFormChange = (field: keyof FoodForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleDateSelect = (date: Date) => {
    const formattedDate = date.toISOString().split("T")[0];
    const field = calendarType === "purchase" ? "purchaseDate" : "expiryDate";
    handleFormChange(field, formattedDate);
    setShowCalendar(false);
  };

  const handleSubmit = async () => {
    if (!userInfo) return;

    const food = {
      refrigerator_id: userInfo.refrigerator_id,
      default_food_id: data.id,
      name: formData.name,
      purchase_date: formData.purchaseDate,
      expiration_date: formData.expiryDate,
      quantity: Number(formData.quantity),
    };

    try {
      const res = await addFoodList(userInfo.refrigerator_id, food);
      // addFood([res.data]);
      getFood();
      setModalOpen("ADD_FOOD_MODAL", false);
      setModalOpen("FOOD_BOTTOM_SHEET_MODAL", false);
    } catch (err) {
      console.error(err);
    }
  };

  const getFood = async () => {
    if (!userInfo) return;

    await getFoodList(userInfo.refrigerator_id)
      .then((res) => {
        setFood(res.data);
      })
      .catch((err) => {
        console.error(err);
        setFood([]);
      });
  };

  const isFormValid =
    formData.name &&
    formData.quantity &&
    formData.purchaseDate &&
    formData.expiryDate;

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
              {data.id === null ? (
                <input
                  type="text"
                  id="foodName"
                  className="h-[2rem] w-[7.5rem] rounded-[13rem] bg-gray-50 text-center text-[20px] font-semibold"
                  value={formData.name}
                  onChange={(e) => handleFormChange("name", e.target.value)}
                />
              ) : (
                <label htmlFor="foodName" className="text-[20px] font-semibold">
                  {data.name}
                </label>
              )}
            </div>

            <div>
              <label
                htmlFor="purchaseDate"
                className="text-center text-[13px] text-gray-500"
              >
                구매 일자
              </label>
              <input
                type="text"
                id="purchaseDate"
                value={formData.purchaseDate}
                onClick={() => {
                  setCalendarType("purchase");
                  setShowCalendar(true);
                }}
                readOnly
                className="absolute right-[2.3rem] h-[1.5rem] w-[8.3rem] cursor-pointer rounded-[13rem] bg-gray-50"
              />
            </div>

            <div>
              <label
                htmlFor="expiryDate"
                className="text-center text-[13px] text-gray-500"
              >
                소비 기한
              </label>
              <input
                type="text"
                id="expiryDate"
                value={formData.expiryDate}
                onClick={() => {
                  setCalendarType("expiry");
                  setShowCalendar(true);
                }}
                readOnly
                className="absolute right-[2.3rem] h-[1.5rem] w-[8.3rem] cursor-pointer rounded-[13rem] bg-gray-50"
              />
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
                className="absolute right-[2.3rem] h-[1.5rem] w-[8.3rem] rounded-[13rem] bg-gray-50"
                value={formData.quantity}
                onChange={(e) =>
                  handleFormChange("quantity", onlyNumbers(e.target.value))
                }
              />
            </div>

            <footer className="flex justify-center">
              <button
                type="submit"
                className={`basic-button mt-[1.6rem] h-[2.5rem] w-[10rem] ${
                  !isFormValid ? "bg-gray-300" : "bg-primary"
                }`}
                aria-label="식품 등록하기"
                onClick={handleSubmit}
                disabled={!isFormValid}
              >
                식품 등록하기
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

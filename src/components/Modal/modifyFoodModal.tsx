import useModalStore from "../../store/useModalStore";
import apple from "../../assets/apple.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Calendar from "../common/calendar";
import { onlyNumbers } from "../../shared/utils/onlyNumber";
import useRefrigeStore from "../../store/useRefrigeStore";
import { modifyFoodList } from "../../services/refrigeService";
import useUserStore from "../../store/useUserStore";

interface FoodForm {
  name: string;
  quantity: string;
  purchase_date: string;
  expiration_date: string;
}

interface ModifyFoodModalProps {
  data: {
    id: number;
    name: string;
    quantity: number;
    purchase_date: string;
    expiration_date: string;
    default_food_name?: number;
  };
}

export default function ModifyFoodModal({ data }: ModifyFoodModalProps) {
  console.log(data);
  const { setModalOpen } = useModalStore();
  const { updateFood } = useRefrigeStore();
  const { foodItems } = useRefrigeStore();
  const { userInfo } = useUserStore();
  const currentFood = foodItems.find((item) => item.id === data.id);

  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarType, setCalendarType] = useState<"purchase" | "expiry">(
    "purchase",
  );

  const [formData, setFormData] = useState<FoodForm>({
    name: currentFood?.name || "",
    quantity: currentFood?.quantity.toString() || "",
    purchase_date: currentFood?.purchase_date.toString() || "",
    expiration_date: currentFood?.expiration_date.toString() || "",
  });

  const handleFormChange = (field: keyof FoodForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleDateSelect = (date: Date) => {
    const formattedDate = date.toISOString().split("T")[0];
    const field =
      calendarType === "purchase" ? "purchase_date" : "expiration_date";
    handleFormChange(field, formattedDate);
    setShowCalendar(false);
  };

  const handleSubmit = async () => {
    try {
      if (!userInfo) return;

      const res = await modifyFoodList(
        userInfo.refrigerator_id,
        data.id,
        formData,
      );
      updateFood(res.data.id, res.data);
      setModalOpen("MODIFY_FOOD_MODAL", false);
    } catch (err) {
      console.error(err);
    }
  };

  const isFormValid =
    formData.name &&
    formData.quantity &&
    formData.purchase_date &&
    formData.expiration_date;

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
          <form
            className="flex flex-col gap-[0.6rem]"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="center mb-[1.3rem]">
              {data.default_food_name ? (
                <label htmlFor="foodName" className="text-semibold text-[20px]">
                  {formData.name}
                </label>
              ) : (
                <input
                  type="text"
                  id="foodName"
                  className="text-semibold h-[2rem] w-[7.5rem] rounded-[13rem] bg-gray-50 text-center text-[20px]"
                  value={formData.name}
                  onChange={(e) => handleFormChange("name", e.target.value)}
                />
              )}
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
                value={formData.quantity}
                onChange={(e) =>
                  handleFormChange("quantity", onlyNumbers(e.target.value))
                }
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
                value={formData.purchase_date}
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
                value={formData.expiration_date}
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
                className={`basic-button mt-[1.6rem] h-[2.5rem] w-[10rem] ${
                  !isFormValid ? "bg-gray-300" : "bg-primary"
                }`}
                aria-label="식품 수정하기"
                onClick={handleSubmit}
                disabled={!isFormValid}
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

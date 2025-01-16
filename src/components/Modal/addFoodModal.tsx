import { useState } from "react";
import Calendar from "../common/calendar";
import { onlyNumbers } from "../../shared/utils/onlyNumber";
import { addFoodList } from "../../services/refrigeService";
import { Food, FoodForm } from "../../types/Food";
import { useFoodData } from "../../hooks/useFoodData";
import { useUser } from "../../hooks/useUserInfo";
import { useModalControl } from "../../hooks/useModalControl";
import { useCalendarControl } from "../../hooks/useCalendarControl";
import ModalCloseBtn from "../common/modal/modalCloseBtn";

export default function AddFoodModal({ data }: { data: Food }) {
  const { handleCloseModal: handleCloseAddFoodModal } =
    useModalControl("ADD_FOOD_MODAL");
  const { handleCloseModal: handleCloseBottomSheetModal } = useModalControl(
    "FOOD_BOTTOM_SHEET_MODAL",
  );
  const { fetchFoodList } = useFoodData();
  const { userInfo } = useUser();
  const [formData, setFormData] = useState<FoodForm>({
    name: data.name,
    quantity: 1,
    purchase_date: new Date().toISOString().split("T")[0],
    expiration_date: "",
  });

  const handleFormChange = (field: keyof FoodForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const { showCalendar, setShowCalendar, setCalendarType, handleDateSelect } =
    useCalendarControl(handleFormChange);

  const isFormValid =
    formData.name &&
    formData.quantity &&
    formData.purchase_date &&
    formData.expiration_date;

  const handleSubmit = async () => {
    if (!userInfo) return;

    const food = {
      refrigerator_id: userInfo.refrigerator_id,
      default_food_id: data.id,
      name: formData.name,
      storage_type: "refrigerated",
      purchase_date: formData.purchase_date,
      expiration_date: formData.expiration_date,
      quantity: Number(formData.quantity),
    };

    try {
      await addFoodList(userInfo.refrigerator_id, food);
      fetchFoodList();
      handleCloseAddFoodModal();
      handleCloseBottomSheetModal();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="center overlay z-[70]">
      <article className="relative w-[16.8rem] rounded-[1.3rem] bg-white p-6">
        <ModalCloseBtn handleCloseModal={handleCloseAddFoodModal} />
        <header className="center mb-[0.6rem] mt-[0.4rem]">
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
              <label htmlFor="purchase_date" className="form-label">
                구매 일자
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
                className="form-input"
              />
            </div>

            <div>
              <label htmlFor="expiryDate" className="form-label">
                소비 기한
              </label>
              <input
                type="text"
                id="expiration_date"
                value={formData.expiration_date}
                onClick={() => {
                  setCalendarType("expiry");
                  setShowCalendar(true);
                }}
                readOnly
                className="form-input"
              />
            </div>

            <div>
              <label htmlFor="quantity" className="form-label">
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

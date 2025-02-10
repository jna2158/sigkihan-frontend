import { useState } from "react";
import Calendar from "../common/calendar";
import { onlyNumbers } from "../../shared/utils/onlyNumber";
import useRefrigeStore from "../../store/useRefrigeStore";
import {
  modifyFoodList,
  getRecommendExpirationDate,
} from "../../services/refrigeService";
import { Food } from "../../types/Food";
import ModalCloseBtn from "../common/modal/modalCloseBtn";
import { useModalControl } from "../../hooks/useModalControl";
import { useUser } from "../../hooks/useUserInfo";
import { useCalendarControl } from "../../hooks/useCalendarControl";

export default function ModifyFoodModal({ data }: { data: Food }) {
  const { handleCloseModal } = useModalControl("MODIFY_FOOD_MODAL");
  const { updateFood } = useRefrigeStore();
  const { foodItems } = useRefrigeStore();
  const { userInfo, refrigeratorId } = useUser();
  const currentFood = foodItems.find((item) => item.id === data.id);

  const [formData, setFormData] = useState<Food>({
    id: currentFood?.id || 0,
    name: currentFood?.name || "",
    quantity: currentFood?.quantity || 0,
    purchase_date: currentFood?.purchase_date?.toString() || "",
    expiration_date: currentFood?.expiration_date?.toString() || "",
    storage_type: currentFood?.storage_type || "refrigerated",
  });

  const handleFormChange = (field: keyof Food, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const { showCalendar, setShowCalendar, setCalendarType, handleDateSelect } =
    useCalendarControl(handleFormChange);

  const isFormValid =
    formData.name &&
    formData.quantity &&
    formData.purchase_date &&
    formData.expiration_date;

  //
  const handleSubmit = async () => {
    if (!userInfo) return;

    try {
      const res = await modifyFoodList(refrigeratorId, data.id, formData);
      updateFood(res.data.id, res.data);
      handleCloseModal();
    } catch (err) {
      console.error(err);
    }
  };

  const handleClickRecommendBtn = async () => {
    setFormData((prev) => ({
      ...prev,
      expiration_date: "",
    }));
    const response = await getRecommendExpirationDate(formData);
    setFormData((prev) => ({
      ...prev,
      expiration_date: response.data.expiration,
    }));
  };

  return (
    <section className="center overlay z-[70]">
      <article className="relative w-[16.8rem] rounded-[1.3rem] bg-white p-6">
        <ModalCloseBtn handleCloseModal={handleCloseModal} />
        <header className="center mb-[0.6rem] mt-[0.4rem]">
          <img
            src={currentFood?.image_url}
            alt="음식 이미지"
            className="w-20"
          />
        </header>

        <main>
          <form
            className="flex flex-col gap-[0.6rem]"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="center mb-[1.3rem]">
              {data.default_food_name ? (
                <label htmlFor="foodName" className="text-[20px] font-semibold">
                  {formData.name}
                </label>
              ) : (
                <input
                  type="text"
                  id="foodName"
                  className="h-[2rem] w-[7.5rem] rounded-[13rem] bg-gray-50 text-center text-[20px] font-semibold"
                  value={formData.name}
                  onChange={(e) => handleFormChange("name", e.target.value)}
                />
              )}
            </div>

            <div className="flex gap-[0.6rem]">
              <label htmlFor="storage" className="form-label">
                보관 방법
              </label>
              <div className="ml-[1rem] flex w-[8.3rem] gap-[0.3rem]">
                <button
                  type="button"
                  className={`storage-button ${
                    formData.storage_type === "refrigerated" ? "active" : ""
                  }`}
                  onClick={() =>
                    handleFormChange("storage_type", "refrigerated")
                  }
                >
                  냉장
                </button>
                <button
                  type="button"
                  className={`storage-button ${
                    formData.storage_type === "frozen" ? "active" : ""
                  }`}
                  onClick={() => handleFormChange("storage_type", "frozen")}
                >
                  냉동
                </button>
                <button
                  type="button"
                  className={`storage-button ${
                    formData.storage_type === "room_temp" ? "active" : ""
                  }`}
                  onClick={() => handleFormChange("storage_type", "room_temp")}
                >
                  실온
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="quantity" className="form-label">
                수량
              </label>
              <input
                type="text"
                id="quantity"
                value={formData.quantity}
                onChange={(e) =>
                  handleFormChange("quantity", onlyNumbers(e.target.value))
                }
                className="form-input"
              />
            </div>

            <div>
              <label htmlFor="purchaseDate" className="form-label">
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
                id="expiryDate"
                value={formData.expiration_date}
                onClick={() => {
                  setCalendarType("expiry");
                  setShowCalendar(true);
                }}
                readOnly
                className="form-input"
              />
              <button
                type="button"
                className="absolute right-[45px] mt-[3px] h-[1.1rem] w-[2.6rem] rounded-[9px] bg-gradient-to-r from-[#3BD273] to-[#85F42C]"
                onClick={handleClickRecommendBtn}
              >
                <span className="center text-[12px] font-semibold text-white">
                  Ai 추천
                </span>
              </button>
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
                식품 수정하기
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

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import useRefrigeStore from "../../../../store/useRefrigeStore";
import { eatFood } from "../../../../services/refrigeService";
import { Food } from "../../../../types/Food";
import { useUser } from "../../../../hooks/useUserInfo";
import { useModalControl } from "../../../../hooks/useModalControl";

export default function SelectEatCountModal({ data }: { data: Food }) {
  const { handleCloseModal } = useModalControl("SELECT_EAT_COUNT_MODAL");
  const [count, setCount] = useState(1);
  const { userInfo } = useUser();
  const { updateFoodQuantity } = useRefrigeStore();

  const handleIncrement = () => {
    if (count < data.quantity) {
      setCount((prev: number) => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prev: number) => prev - 1);
    }
  };

  const handleClickConfirmBtn = async () => {
    if (!userInfo) return;

    const res = await eatFood(userInfo.refrigerator_id, data.id, {
      action: "consumed",
      quantity: count,
    });
    updateFoodQuantity(data.id, res.data.remaining_quantity);
    handleCloseModal();
  };

  return (
    <section
      className="center overlay z-[70]"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <div
        className="relative h-[14rem] w-[21rem] rounded-3xl bg-white px-[1.1rem] pt-8"
        role="document"
      >
        <p className="center text-regular mb-6 text-[14px] text-gray-500">
          소비한 수량을 선택해 주세요!
        </p>

        <div className="mb-8 flex items-center justify-center gap-4">
          <button
            onClick={handleDecrement}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white"
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className="text-xl">{count}</span>
          <button
            onClick={handleIncrement}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        <footer className="mt-4 flex justify-end gap-2">
          <button
            className="basic-button h-[3.3rem] w-[9.3rem] bg-gray-100 text-gray-400"
            onClick={handleCloseModal}
          >
            아니오
          </button>
          <button
            className="basic-button h-[3.3rem] w-[9.3rem] bg-primary text-white"
            onClick={handleClickConfirmBtn}
          >
            확인
          </button>
        </footer>
      </div>
    </section>
  );
}

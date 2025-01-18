import useUserStore from "../store/useUserStore";
import { getFoodList } from "../services/refrigeService";
import useRefrigeStore from "../store/useRefrigeStore";
import { useUser } from "./useUserInfo";

export const useFoodData = () => {
  const { userInfo } = useUser();
  const { foodItems, setFood } = useRefrigeStore();
  const { refrigeratorId } = useUser();
  // 음식 리스트 조회
  const fetchFoodList = async (refrigerator_id?: number) => {
    if (!userInfo) return;

    try {
      if (refrigerator_id) {
        const res = await getFoodList(refrigerator_id);
        setFood(res.data);
      } else {
        const res = await getFoodList(refrigeratorId);
        setFood(res.data);
      }
    } catch (err) {
      console.error(err);
      setFood([]);
    }
  };

  return { foodItems, fetchFoodList };
};

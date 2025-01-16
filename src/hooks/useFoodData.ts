import useUserStore from "../store/useUserStore";
import { getFoodList } from "../services/refrigeService";
import useRefrigeStore from "../store/useRefrigeStore";
import { useUser } from "./useUserInfo";

export const useFoodData = () => {
  const { userInfo } = useUser();
  const { foodItems, setFood } = useRefrigeStore();

  // 음식 리스트 조회
  const fetchFoodList = async () => {
    console.log("fetchFoodList", userInfo);
    if (!userInfo) return;

    try {
      const res = await getFoodList(userInfo.refrigerator_id);
      setFood(res.data);
    } catch (err) {
      console.error(err);
      setFood([]);
    }
  };

  return { foodItems, fetchFoodList };
};

import { useEffect, useState } from "react";
import { getRefrigeratorList } from "../../services/userInfoService";
import { useFoodData } from "../../hooks/useFoodData";
import { useUser } from "../../hooks/useUserInfo";

export default function MyFridgeName() {
  const { fetchFoodList } = useFoodData();
  const { setRefrigeratorId, refrigeratorId, updateUser, userInfo } = useUser();
  const [fridgeList, setFridgeList] = useState<{ id: number; name: string }[]>(
    [],
  );

  // 속한 냉장고 리스트 조회
  useEffect(() => {
    getRefrigeratorList().then((res) => {
      setFridgeList(res.data);
      if (!fridgeList.find((fridge) => fridge.id === refrigeratorId)) {
        setRefrigeratorId(res.data[0].id);
        if (userInfo) {
          updateUser({
            ...userInfo,
            refrigerator_id: res.data[0].id,
          });
        }
      }
    });
  }, []);

  useEffect(() => {
    if (refrigeratorId) {
      fetchFoodList(Number(refrigeratorId));
    }
  }, [refrigeratorId]);

  // 냉장고 선택 시 유저 정보 업데이트
  const handleFridgeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFridgeId = Number(event.target.value);
    setRefrigeratorId(selectedFridgeId);

    // userInfo 업데이트
    if (userInfo) {
      updateUser({
        ...userInfo,
        refrigerator_id: selectedFridgeId,
      });
    }
  };

  return (
    <select
      className="p-2 text-[24px] font-semibold text-black"
      onChange={handleFridgeChange}
      value={refrigeratorId}
    >
      {fridgeList.map((fridge, index) => (
        <option key={index} value={fridge.id}>
          {fridge.name}
        </option>
      ))}
    </select>
  );
}

import { useEffect, useState } from "react";
import { getRefrigeratorList } from "../../services/userInfoService";

export default function MyFridgeName() {
  const [fridgeList, setFridgeList] = useState<{ id: number; name: string }[]>(
    [],
  );

  // 속한 냉장고 리스트 조회
  useEffect(() => {
    getRefrigeratorList().then((res) => {
      setFridgeList(res.data);
    });
  }, []);

  return (
    <select className="p-2 text-[24px] font-semibold text-black">
      {fridgeList.map((fridge, index) => (
        <option key={index} value={fridge.id}>
          {fridge.name}
        </option>
      ))}
    </select>
  );
}

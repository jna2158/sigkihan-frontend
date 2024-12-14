import SearchResultCard from "./searchResultCard";
import { getDefaultFoodList } from "../../../services/refrigeService";
import { useEffect, useState } from "react";

export default function SearchResultGrid({
  searchQuery,
}: {
  searchQuery: string;
}) {
  const [defaultList, setDefaultList] = useState<any>([]);
  const [otherItem, setOtherItem] = useState<any>("");

  // 기본 제공하는 default 음식 리스트 조회
  const getDefaultList = async () => {
    await getDefaultFoodList()
      .then((res) => {
        const defaultFood = res.data.default_foods;
        const otherFoods = res.data.direct_add_image;

        setDefaultList(defaultFood);
        setOtherItem(otherFoods);
      })
      .catch((err) => {
        console.error(err);
        setDefaultList([]);
        setOtherItem("");
      });
  };

  const filteredList = defaultList.filter((item: any) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase().trim()),
  );

  useEffect(() => {
    getDefaultList();
  }, []);

  return (
    <section
      className="flex flex-wrap gap-[0.5rem] pt-[1.2rem]"
      aria-label="식재료 검색 결과 목록"
    >
      {filteredList.map((item: any) => (
        <SearchResultCard key={item.id} item={item} />
      ))}

      {filteredList.length === 0 && (
        <SearchResultCard
          key={999}
          item={{ id: null, name: searchQuery, image: otherItem }}
        />
      )}
    </section>
  );
}

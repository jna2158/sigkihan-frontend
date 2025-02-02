import { useEffect } from "react";
import RankingItem from "./rankingItem";
import { getMonthlyRanking } from "../../../../services/statisticService";
import { useUser } from "../../../../hooks/useUserInfo";
import { useState } from "react";

export default function Ranking() {
  const { refrigeratorId } = useUser();
  const [ranking, setRanking] = useState<any[]>([]);
  const [maxQuantity, setMaxQuantity] = useState<number>(0);

  // 월간 소비 랭킹
  useEffect(() => {
    getMonthlyRanking(refrigeratorId).then((res) => {
      setRanking(res.data.consumption_ranking);
      setMaxQuantity(res.data.consumption_ranking?.[0]?.total_quantity);
    });
  }, [refrigeratorId]);

  return ranking.length > 1 ? (
    <section className="my-[0.9rem] h-[18rem] w-[22rem] rounded-3xl bg-white px-[1.9rem] py-[1.7rem]">
      <section className="mb-[1.1rem] text-sm text-gray-400">소비랭킹</section>
      {ranking.map((ranking) => (
        <section className="mt-[0.75rem]">
          <RankingItem ranking={ranking} maxQuantity={maxQuantity} />
        </section>
      ))}
    </section>
  ) : null;
}

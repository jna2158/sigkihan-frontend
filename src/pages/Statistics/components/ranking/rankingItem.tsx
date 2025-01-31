import { PROFILE_IMAGES } from "../../../../shared/constants/profileImages";

export default function RankingItem({
  ranking,
  maxQuantity,
}: {
  ranking: any;
  maxQuantity: number;
}) {
  // 프로필 이미지
  const profileImage = PROFILE_IMAGES.find(
    (profile) => profile.image === ranking.user.image,
  )?.url;

  const progressBarWidth = `${(ranking.total_quantity / maxQuantity) * 100}%`;

  return (
    <section className="flex items-center justify-between">
      <section className="flex items-center gap-[0.5rem]">
        <img
          src={profileImage}
          alt="프로필 이미지"
          className="h-[1.8rem] w-[1.8rem] rounded-full"
        />
        <section className="text-sm">{ranking.user.name}</section>
      </section>
      <section className="h-[0.6rem] w-[9.8rem] rounded-full bg-gray-50">
        <div
          className="h-2.5 rounded-full bg-green-500"
          style={{ width: progressBarWidth }}
        ></div>
      </section>
      <span className="text-xs text-gray-400">
        {ranking.total_quantity}개
      </span>
    </section>
  );
}

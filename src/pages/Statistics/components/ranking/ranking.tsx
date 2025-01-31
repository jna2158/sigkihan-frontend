import RankingItem from "./rankingItem";

export default function Ranking() {
  const member = [
    {
      id: 1,
      name: "김철수1",
      profile_image: "",
      profile_image_id: 1,
      role: "ADMIN",
    },
    {
      id: 2,
      name: "김철수2",
      profile_image: "",
      profile_image_id: 2,
      role: "ADMIN",
    },
    {
      id: 3,
      name: "김철수3",
      profile_image: "",
      profile_image_id: 3,
      role: "ADMIN",
    },
    {
      id: 4,
      name: "김철수4",
      profile_image: "",
      profile_image_id: 4,
      role: "ADMIN",
    },
    {
      id: 5,
      name: "김철수5",
      profile_image: "",
      profile_image_id: 4,
      role: "ADMIN",
    },
  ];

  return (
    <section className="my-[0.9rem] h-[18rem] w-[22rem] rounded-3xl bg-white px-[1.9rem] py-[1.7rem]">
      <section className="mb-[1.1rem] text-sm text-gray-400">소비랭킹</section>
      {member.map((member) => (
        <section className="mt-[0.75rem]">
          <RankingItem member={member} />
        </section>
      ))}
    </section>
  );
}

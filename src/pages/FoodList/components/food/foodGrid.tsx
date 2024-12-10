import FoodCard from "./foodCard";

export default function FoodGrid() {
  const foodList = [
    {
      id: 1,
      name: "사과",
      image: "apple-image-url",
    },
    {
      id: 2,
      name: "오렌지",
      image: "orange-image-url",
    },
    {
      id: 3,
      name: "사과3",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 4,
      name: "사과4",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 5,
      name: "사과5",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 6,
      name: "사과6",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 7,
      name: "사과7",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 8,
      name: "사과8",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 9,
      name: "사과9",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 10,
      name: "사과10",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 11,
      name: "사과11",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 12,
      name: "사과12",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 13,
      name: "사과13",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 14,
      name: "사과14",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 15,
      name: "사과15",
      image: "https://via.placeholder.com/80",
    },
  ];

  // 3개씩 그룹화
  const groupFoodItems = (items: typeof foodList) => {
    const groups = [];
    for (let i = 0; i < items.length; i += 3) {
      groups.push(items.slice(i, i + 3));
    }
    return groups;
  };

  return (
    <section
      className="flex max-h-[calc(100dvh-280px)] flex-col gap-4 overflow-y-auto pt-[1.9rem]"
      aria-label="식재료 목록"
    >
      {groupFoodItems(foodList).map((group, groupIndex) => (
        <div
          key={groupIndex}
          className="mx-auto grid h-[10rem] w-[21rem] grid-cols-3 gap-4 rounded-[1.5rem] bg-gray-50 px-4 py-4"
        >
          {group.map((food) => (
            <FoodCard
              key={food.id}
              id={food.id}
              name={food.name}
              image={food.image}
            />
          ))}
        </div>
      ))}
    </section>
  );
}

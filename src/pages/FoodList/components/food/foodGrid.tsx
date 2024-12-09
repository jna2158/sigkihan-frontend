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
      className="flex flex-col gap-4 pt-[4.4rem]"
      aria-label="식재료 목록"
    >
      {groupFoodItems(foodList).map((group, groupIndex) => (
        <div
          key={groupIndex}
          className="bg-lightLightGray mx-auto grid h-[10rem] w-[22rem] grid-cols-3 gap-4 rounded-[1.5rem] px-4 py-4"
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

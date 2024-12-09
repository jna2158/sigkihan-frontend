import FoodCard from "./foodCard";

export default function FoodGrid() {
  const foodList = [
    {
      id: 1,
      name: "사과1",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 2,
      name: "사과2",
      image: "https://via.placeholder.com/80",
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

  return (
    <section
      className="flex flex-wrap gap-[0.5rem] pt-[4.4rem]"
      aria-label="식재료 목록"
    >
      {foodList.map((food) => (
        <FoodCard
          id={food.id}
          name={food.name}
          image={food.image}
          key={food.id}
        />
      ))}
    </section>
  );
}

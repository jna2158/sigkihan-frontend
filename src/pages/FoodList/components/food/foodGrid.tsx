import FoodCard from "./foodCard";
import useRefrigeStore from "../../../../store/useRefrigeStore";

export default function FoodGrid() {
  const { foodItems } = useRefrigeStore.getState();

  const groupFoodItems = (items: typeof foodItems) => {
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
      {groupFoodItems(foodItems).map((group, groupIndex) => (
        <div
          key={groupIndex}
          className="mx-auto grid h-[10rem] w-[21rem] grid-cols-3 gap-4 rounded-[1.5rem] bg-gray-50 px-4 py-4"
        >
          {group.map((food) => (
            <FoodCard
              key={food.id}
              id={food.id}
              name={food.name}
              image_url={food.image_url || ""}
              expirationDate={food.expiration_date?.toString() || ""}
            />
          ))}
        </div>
      ))}
    </section>
  );
}

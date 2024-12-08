import FoodCard from "./foodCard";

export default function FoodGrid() {
  return (
    <section
      className="flex flex-wrap gap-[0.5rem] pt-[4.4rem]"
      aria-label="식재료 목록"
    >
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
    </section>
  );
}

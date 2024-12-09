import { useNavigate } from "react-router-dom";

export default function FoodCard({
  id,
  name,
  image,
}: {
  id: number;
  name: string;
  image: string;
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/food/${id}`);
  };

  return (
    <div
      className="center h-[7.5rem] w-28 cursor-pointer flex-col rounded-3xl bg-slate-400"
      onClick={handleClick}
    >
      <img src={image} alt={name} className="h-[5rem] w-[5rem]" />
      <p className="text-center text-sm">{name}</p>
    </div>
  );
}

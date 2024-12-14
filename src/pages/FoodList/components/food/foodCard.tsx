import { useNavigate } from "react-router-dom";
import ExpiredDateBadge from "../../../../components/common/expiredDateBadge";

export default function FoodCard({
  id,
  name,
  image_url,
  expirationDate,
}: {
  id: number;
  name: string;
  image_url: string;
  expirationDate: string;
}) {
  console.log("image_url", image_url);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/food/${id}`);
  };

  return (
    <div
      className="center cursor-pointer flex-col gap-[0.6rem] rounded-3xl"
      onClick={handleClick}
    >
      <ExpiredDateBadge expirationDate={expirationDate} />
      <img src={"/media/food_images/beef.svg"} alt={name} className="h-[3rem] w-[2.4rem]" />
      <p className="w-[6.5rem] truncate text-center text-[14px] font-semibold text-gray-500">
        {name}
      </p>
    </div>
  );
}

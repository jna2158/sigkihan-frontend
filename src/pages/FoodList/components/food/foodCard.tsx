import { useNavigate } from "react-router-dom";
import ExpiredDateBadge from "../../../../components/common/expiredDateBadge";
import apple from "../../../../assets/apple.svg";

export default function FoodCard({
  id,
  name,
  image,
  expirationDate,
}: {
  id: number;
  name: string;
  image: string;
  expirationDate: string;
}) {
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
      <img src={image} alt={name} className="h-[3rem] w-[2.4rem]" />
      <p className="text-center text-[14px] font-semibold text-gray-500">
        {name}
      </p>
    </div>
  );
}

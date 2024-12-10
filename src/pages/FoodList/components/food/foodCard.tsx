import { useNavigate } from "react-router-dom";
import ExpiredDateBadge from "../../../../components/common/expiredDateBadge";
import apple from "../../../../assets/apple.svg";

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
      className="center cursor-pointer flex-col gap-[0.6rem] rounded-3xl"
      onClick={handleClick}
    >
      <ExpiredDateBadge />
      <img src={apple} alt={name} className="h-[3rem] w-[2.4rem]" />
      <p className="text-center text-[14px] font-semibold text-gray-500">
        {name}
      </p>
    </div>
  );
}

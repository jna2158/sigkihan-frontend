import { useNavigate } from "react-router-dom";
import ExpiredDateBadge from "../../../../components/common/expiredDateBadge";
import logo from "../../../../assets/logo.png";
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
      <img src={logo} alt={name} className="h-[3rem] w-[2.4rem]" />
      <p className="text-gray text-center text-[14px] font-semibold">{name}</p>
    </div>
  );
}

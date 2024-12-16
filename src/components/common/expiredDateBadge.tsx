import { calculateDday } from "../../shared/utils/calculateDday";

export default function ExpiredDateBadge({
  expirationDate,
}: {
  expirationDate: string;
}) {
  if (!expirationDate) return null;

  return (
    <div className="center h-[1.6rem] w-[2.6rem] rounded-[1.5rem] bg-primary text-[14px] text-white">
      {calculateDday(expirationDate)}
    </div>
  );
}

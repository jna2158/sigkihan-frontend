import { calculateDday } from "../../shared/utils/calculateDday";

interface ExpiredDateBadgeProps {
  expirationDate?: string;
}

export default function ExpiredDateBadge({
  expirationDate,
}: ExpiredDateBadgeProps) {
  if (!expirationDate) return null;

  return (
    <div className="center h-[1.6rem] w-[2.6rem] rounded-[1.5rem] bg-primary text-[14px] text-white">
      {calculateDday(expirationDate)}
    </div>
  );
}

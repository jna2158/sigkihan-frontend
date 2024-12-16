import { Notification } from "../../../../types/Notification";

export default function AlarmItem({ item }: {item: Notification}) {
  return (
    <div className="flex h-[5rem] w-full border-[1px] border-[#E7E7E7] px-[1.2rem] py-[1.4rem] text-[13px]">
      <span className="w-[65%] break-words">{item.message}</span>

      <span className="absolute right-[0.9rem] text-[12px] text-gray-500">
        {item.d_day}
      </span>
    </div>
  );
}

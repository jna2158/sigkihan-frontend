interface ExpiredFood {
  id: number;
  content: string;
  date: string;
}

export default function AlarmItem({ item }: { item: ExpiredFood }) {
  return (
    <div className="flex h-[5rem] w-full border-[1px] border-[#E7E7E7] px-[1.2rem] py-[1.4rem] text-[13px]">
      <span>{item.content}</span>

      <span className="absolute right-[0.9rem] text-[12px] text-gray-500">
        {item.date}
      </span>
    </div>
  );
}

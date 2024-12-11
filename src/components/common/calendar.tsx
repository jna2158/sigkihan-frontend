import { useState } from "react";

interface CalendarProps {
  onSelect: (date: Date) => void;
  onClose: () => void;
}

export default function Calendar({ onSelect, onClose }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(currentDate.getDate());

  const handleDateSelect = (day: number) => {
    setSelectedDay(day);
  };

  const handleConfirm = () => {
    const selectedDate = new Date(currentDate.setDate(selectedDay));
    onSelect(selectedDate);
    onClose();
  };

  const getMonthData = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    return { firstDay, daysInMonth };
  };

  return (
    <aside className="bottom-sheet-container">
      <header className="center h-10 w-full">
        <div className="h-1 w-16 rounded-full bg-[#96A2A9]" />
      </header>

      <main className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() =>
              setCurrentDate(
                new Date(currentDate.setMonth(currentDate.getMonth() - 1)),
              )
            }
            className="text-gray-300"
          >
            &lt;
          </button>
          <h2 className="text-2xl font-semibold text-gray-500">
            {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
          </h2>
          <button
            onClick={() =>
              setCurrentDate(
                new Date(currentDate.setMonth(currentDate.getMonth() + 1)),
              )
            }
            className="text-gray-300"
          >
            &gt;
          </button>
        </div>

        <div className="center h-8 mb-2 grid grid-cols-7 gap-2 text-center">
          {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
            <div key={day} className="text-sm font-medium text-gray-500">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2 text-center">
          {[...Array(getMonthData().firstDay)].map((_, index) => (
            <div key={`empty-${index}`} />
          ))}
          {[...Array(getMonthData().daysInMonth)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handleDateSelect(index + 1)}
              className={`h-8 w-8 rounded-full text-sm ${
                selectedDay === index + 1
                  ? "bg-primary text-white"
                  : "hover:bg-primary hover:text-white"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          onClick={handleConfirm}
          className="mt-6 w-full rounded-lg bg-primary py-3 text-white"
        >
          확인
        </button>
      </main>
    </aside>
  );
}

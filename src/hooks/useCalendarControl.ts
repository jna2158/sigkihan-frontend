import { useState } from "react";
import { FoodForm } from "../types/Food";

export const useCalendarControl = (
  handleFormChange: (field: keyof FoodForm, value: string) => void,
) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarType, setCalendarType] = useState<"purchase" | "expiry">(
    "purchase",
  );

  const handleDateSelect = (date: Date) => {
    const formattedDate = date.toISOString().split("T")[0];
    const field =
      calendarType === "purchase" ? "purchase_date" : "expiration_date";
    handleFormChange(field, formattedDate);
    setShowCalendar(false);
  };

  return {
    showCalendar,
    setShowCalendar,
    calendarType,
    setCalendarType,
    handleDateSelect,
  };
};

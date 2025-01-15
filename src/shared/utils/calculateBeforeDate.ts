export default function calculateBeforeDate(dateString: string): string {
  const currentDate = new Date();
  const memoDate = new Date(dateString);

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  const memoYear = memoDate.getFullYear();
  const memoMonth = memoDate.getMonth();
  const memoDay = memoDate.getDate();

  const diffDays = Math.floor(
    (new Date(currentYear, currentMonth, currentDay).getTime() -
      new Date(memoYear, memoMonth, memoDay).getTime()) /
      (1000 * 60 * 60 * 24),
  );

  if (diffDays > 0) {
    return `${diffDays}일 전`;
  } else {
    return "오늘";
  }
}

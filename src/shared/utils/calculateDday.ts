export const calculateDday = (endDate: string): string => {
  // 현재 날짜와 종료일을 Date 객체로 변환
  const today = new Date();
  const end = new Date(endDate);

  // 시간을 제외한 날짜만 비교하기 위해 시간을 00:00:00으로 설정
  today.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);

  // 날짜 차이 계산 (밀리초 -> 일)
  const diffTime = end.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // D-day 포맷팅
  if (diffDays === 0) return "D-0";
  if (diffDays > 0) return `D-${diffDays}`;
  return `D+${Math.abs(diffDays)}`;
};

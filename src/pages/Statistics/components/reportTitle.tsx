export default function ReportTitle() {
  return (
    <div className="text-2xl font-semibold">
      <span className="text-primary">{new Date().getMonth() + 1}월</span>{" "}
      소비리포트
    </div>
  );
}

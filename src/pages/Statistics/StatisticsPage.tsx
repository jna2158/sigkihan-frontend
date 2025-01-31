import Header from "./components/header";
import Top5 from "./components/top5";
import Ranking from "./components/ranking/ranking";

export default function StatisticsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50 px-[1.3rem]">
      <Header />
      <Top5 />
      <Ranking />
    </main>
  );
}

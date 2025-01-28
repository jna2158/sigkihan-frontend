import Header from "./components/header";
import NoContent from "./components/noContent";

export default function StatisticsPage() {
  return (
    <main className="flex h-full flex-col px-[1.3rem]">
      <Header />
      <section className="text-sm text-gray-400">소비식품 TOP5</section>
      <NoContent />
    </main>
  );
}

import Header from "./components/header";
import Top5 from "./components/top5";
import Ranking from "./components/ranking/ranking";
import { useState } from "react";
import NoContent from "./components/noContent";

export default function StatisticsPage() {
  const [noFood, setNoFood] = useState(false);
  return (
    <main className="flex min-h-screen flex-col bg-gray-50 px-[1.3rem]">
      <Header />
      {noFood ? (
        <NoContent />
      ) : (
        <>
          <Top5 setNoFood={setNoFood} />
          <Ranking />
        </>
      )}
    </main>
  );
}

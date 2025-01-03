import Member from "./components/member/member";
import Memo from "./components/memo/memo";

export default function SharePage() {
  return (
    <main className="relative">
      <article className="flex flex-col p-8">
        <Member />
        <Memo />
      </article>
    </main>
  );
}

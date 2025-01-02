import Header from "./header";
import MemoItem from "./memoItem";

export default function Memo() {
  return (
    <div>
      <Header />
      <div className="flex gap-[0.6rem] overflow-hidden overflow-x-scroll">
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
      </div>
    </div>
  );
}

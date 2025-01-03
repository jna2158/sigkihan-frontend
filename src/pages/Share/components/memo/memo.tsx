import Header from "./header";
import MemoItem from "./memoItem";

export default function Memo() {
  return (
    <div>
      <Header />
      <div className="flex touch-pan-x gap-[0.6rem] overflow-x-scroll overscroll-x-contain">
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
      </div>
    </div>
  );
}

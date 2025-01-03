import Header from "./header";
import MemoItem from "./memoItem";

export default function Memo() {
  return (
    <div className="mt-[3.3rem]">
      <Header />
      <div className="grid grid-cols-2 gap-[0.6rem]">
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
        <MemoItem />
      </div>
    </div>
  );
}

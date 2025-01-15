import { useUser } from "../../../hooks/useUserInfo";
import Header from "./header";
import MemoItem from "./memoItem";
import { getMemoList } from "../../../services/memoService";
import { useEffect } from "react";
import useMemoStore from "../../../store/useMemoStore";

export default function Memo() {
  const { refrigeratorId } = useUser();
  const { memoList, setMemoList } = useMemoStore();

  // 메모 목록 조회
  useEffect(() => {
    if (refrigeratorId) {
      getMemoList(refrigeratorId).then((memos) => {
        setMemoList(memos.data);
      });
    }
  }, [refrigeratorId]);

  return (
    <div className="mt-[3.3rem]">
      <Header />
      <div className="grid grid-cols-2 gap-[0.6rem]">
        {memoList &&
          memoList.map((memo) => <MemoItem key={memo.id} memo={memo} />)}
      </div>
    </div>
  );
}

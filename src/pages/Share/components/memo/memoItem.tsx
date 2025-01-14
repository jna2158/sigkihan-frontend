import profile1 from "../../../../assets/default_profile.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { Memo as MemoType } from "../../../../types/Memo";

export default function MemoItem({ memo }: { memo: MemoType }) {
  return (
    <div className="flex h-[10.5rem] w-[10rem] flex-col gap-[1rem] rounded-2xl bg-gray-50 pl-[1.3rem] pt-[1.7rem]">
      <div className="flex gap-[0.7rem]">
        <img
          src={profile1}
          alt="profile"
          className="mb-[0.4rem] h-[2.1rem] w-[2.1rem]"
        />
        <div className="flex flex-col">
          <span className="text-[14px] font-medium">{memo.user}</span>
          <div className="text-[12px] text-gray-400">6일 전</div>
        </div>
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          className="ml-[1.5rem] text-gray-300"
        />
      </div>

      <div className="mb-[1rem] line-clamp-3 h-[3.4rem] w-[7.4rem] overflow-hidden text-ellipsis text-[13px] text-gray-500">
        올 때 집 앞에서 메로나 아이스크림 사와 올 때 집 앞에서 메로나 아이스크림
        사와 올 때 집 앞에서 메로나 아이스크림 사와 올 때 집 앞에서 메로나
        아이스크림 사와 올 때 집 앞에서 메로나 아이스크림 사와
      </div>
    </div>
  );
}

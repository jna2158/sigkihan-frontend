import _ from "lodash";
import profile1 from "../../../assets/default_profile.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { Memo as MemoType } from "../../../types/Memo";
import { useState, useRef } from "react";
import { useModalControl } from "../../../hooks/useModalControl";
import calculateBeforeDate from "../../../shared/utils/calculateBeforeDate";
import useUserStore from "../../../store/useUserStore";
import { PROFILE_IMAGES } from "../../../shared/constants/profileImages";

export default function MemoItem({ memo }: { memo: MemoType }) {
  const [isOpen, setIsOpen] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);
  const { handleOpenModal } = useModalControl("DELETE_MEMO_MODAL", memo);
  const { handleOpenModal: handleOpenModifyMemoModal } = useModalControl(
    "MODIFY_MEMO_MODAL",
    memo,
  );

  const { userInfo } = useUserStore();

  // 프로필 이미지
  const profileImage = PROFILE_IMAGES.find(
    (profile) => profile.image === memo.user.image.id,
  )?.url;

  // 메모 수정 버튼 클릭
  const handleClickModifyBtn = () => {
    handleOpenModifyMemoModal();
    setIsOpen(false);
  };

  // 메모 삭제 버튼 클릭
  const handleClickDeleteBtn = () => {
    handleOpenModal();
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div className="flex h-[10.5rem] w-[10rem] flex-col gap-[1rem] rounded-2xl bg-gray-50 pl-[1.3rem] pt-[1.7rem]">
        <div className="flex gap-[0.7rem]">
          <img
            src={profileImage}
            alt="profile"
            className="mb-[0.4rem] h-[2.1rem] w-[2.1rem]"
          />
          <div className="flex flex-col">
            <span className="text-[14px] font-medium">{memo.user.name}</span>
            <div className="text-[12px] text-gray-400">
              {calculateBeforeDate(memo.created_at)}
            </div>
          </div>
          {userInfo?.name === memo.user.name && (
            <FontAwesomeIcon
              icon={faEllipsisVertical}
              className="ml-[1.5rem] cursor-pointer text-gray-300"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          )}
        </div>

        <div className="mb-[1rem] line-clamp-3 h-[3.4rem] w-[7.4rem] overflow-hidden text-ellipsis text-[13px] text-gray-500">
          {memo.content}
        </div>
      </div>
      <aside
        className={`bottom-sheet-container ${isOpen ? "translate-y-0" : "translate-y-full"}`}
        style={{
          height: "20%",
          transition: "height 0.2s ease-out, transform 0.2s ease-out",
        }}
        ref={sheetRef}
      >
        <header className="center h-10 w-full cursor-grab active:cursor-grabbing">
          <div className="h-1 w-16 rounded-full bg-[#96A2A9]" />
        </header>
        <main
          className="overflow-y-auto bg-white p-4"
          style={{ height: "calc(100% - 40px)" }}
        >
          <button
            className="px-[2.3rem] py-[1.1rem] text-[16px] font-medium"
            onClick={handleClickModifyBtn}
          >
            수정하기
          </button>
          <hr />
          <button
            className="px-[2.3rem] py-[1.1rem] text-[16px] font-medium text-gray-400"
            onClick={handleClickDeleteBtn}
          >
            삭제하기
          </button>
          <hr />
        </main>
      </aside>
    </>
  );
}

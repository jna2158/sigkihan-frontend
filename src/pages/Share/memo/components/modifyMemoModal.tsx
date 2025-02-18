import { useModalControl } from "../../../../hooks/useModalControl";
import defaultProfile from "../../../../assets/default_profile.svg";
import { useUser } from "../../../../hooks/useUserInfo";
import { useState } from "react";
import useMemoStore from "../../../../store/useMemoStore";
import { updateMemo } from "../../../../services/memoService";
import { Memo } from "../../../../types/Memo";
import { PROFILE_IMAGES } from "../../../../shared/constants/profileImages";

export default function ModifyMemoModal({ data }: { data: Memo }) {
  const { handleCloseModal } = useModalControl("MODIFY_MEMO_MODAL");
  const { userInfo, refrigeratorId } = useUser();
  const { memoList, updateMemoItem } = useMemoStore();
  const [memoContent, setMemoContent] = useState(data.content);

  const userProfileImage =
    PROFILE_IMAGES.find(
      (profile) => profile.image === userInfo?.profileImage.image,
    )?.url || defaultProfile;

  const handleClickConfirmBtn = async () => {
    handleCloseModal();
    await updateMemo(refrigeratorId, data.id, memoContent).then((res) => {
      updateMemoItem(res.data);
    });
  };

  return (
    <section
      className="center overlay z-[70]"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <div
        className="relative flex h-[18.4rem] w-[21rem] flex-col rounded-3xl bg-white p-6 pt-[2.3rem]"
        role="document"
      >
        <div className="flex items-center">
          <img
            src={userProfileImage}
            alt="프로필"
            className="mr-4 h-[2.3rem] w-[2.3rem]"
          />
          <p className="text-[20px] font-semibold">From. {userInfo?.name}</p>
        </div>
        <section className="flex h-[7rem] w-[17rem] flex-col">
          <textarea
            className="mt-2 resize-none border-gray-300 p-2 text-[16px] text-gray-500 underline underline-offset-[0.8rem] focus:outline-none"
            placeholder="올 때 집 앞에서 메론 아이스크림 사오기! 00 슈퍼에 팔고 있더라!"
            rows={2}
            style={{
              lineHeight: "3rem",
              textDecorationColor: "#EBEBEB",
            }}
            value={memoContent}
            onChange={(e) => setMemoContent(e.target.value)}
          />
        </section>
        <footer className="mt-4 flex justify-end gap-2">
          <button
            className="basic-button h-[3.3rem] w-[9.3rem] bg-gray-100 text-gray-400"
            onClick={handleCloseModal}
          >
            취소
          </button>
          <button
            className="basic-button h-[3.3rem] w-[9.3rem] bg-primary text-white"
            onClick={handleClickConfirmBtn}
          >
            확인
          </button>
        </footer>
      </div>
    </section>
  );
}

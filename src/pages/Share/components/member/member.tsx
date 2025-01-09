import { useUser } from "../../../../hooks/useUserInfo";
import MemberItem from "./memberItem";
import Header from "./header";
import thumbnail from "../../../../assets/thumbnail.png";
import { useState } from "react";

export default function Member() {
  const { userInfo } = useUser();
  const currentUserName = userInfo?.name;
  const members = [
    {
      id: 1,
      name: "김철수",
      isOwner: true,
      isCurrentUser: currentUserName === "김철수",
    },
    {
      id: 2,
      name: "유지원",
      isOwner: false,
      isCurrentUser: currentUserName === "유지원",
    },
    {
      id: 3,
      name: "박영수",
      isOwner: false,
      isCurrentUser: currentUserName === "박영수",
    },
    {
      id: 4,
      name: "박영수",
      isOwner: false,
      isCurrentUser: currentUserName === "박영수",
    },
  ];
  const [isEditMode, setIsEditMode] = useState(false);

  // 친구 초대 버튼 클릭
  const clickInviteBtn = () => {
    if (!window.Kakao?.isInitialized()) {
      window.Kakao?.init(process.env.REACT_APP_KAKAO_JS_SDK_KEY);
    }

    // 카카오톡 공유하기
    window.Kakao?.Share.sendDefault({
      objectType: "feed",
      content: {
        title: `${"냉부심"}님의 냉장고 공유 초대`,
        description: "우리 냉장고를 함께 관리해보세요!",
        imageUrl: thumbnail,
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: "냉장고 구경하기",
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
      installTalk: true,
    });
  };

  return (
    <>
      <Header isEditMode={isEditMode} setIsEditMode={setIsEditMode} />
      <div className="flex h-[8rem] gap-[1.1rem] overflow-x-auto">
        {members.map((member) => (
          <MemberItem
            key={member.id}
            name={member.name}
            isOwner={member.isOwner}
            isCurrentUser={member.isCurrentUser}
            isEditMode={isEditMode}
          />
        ))}
        <div
          onClick={clickInviteBtn}
          className="center h-[5.2rem] w-[5.2rem] min-w-[5.2rem] cursor-pointer rounded-full bg-gray-200"
        >
          <span className="text-2xl text-gray-500">+</span>
        </div>
      </div>
    </>
  );
}

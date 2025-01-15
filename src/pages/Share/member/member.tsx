import { useUser } from "../../../hooks/useUserInfo";
import MemberItem from "./memberItem";
import Header from "./header";
import thumbnail from "../../../assets/thumbnail.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { getRefrigeratorInfo } from "../../../services/refrigeService";
import { useEffect } from "react";

interface Member {
  id: number;
  name: string;
  image: string;
}
[];

export default function Member() {
  const { userInfo, refrigeratorId } = useUser();
  const [members, setMembers] = useState<Member[]>([]);
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

  // 냉장고 멤버 정보 조회
  useEffect(() => {
    if (refrigeratorId) {
      getRefrigeratorInfo(refrigeratorId).then((res) => {
        setMembers([res.data.owner, ...res.data.member]);
      });
    }
  }, [refrigeratorId]);

  return (
    <>
      <Header isEditMode={isEditMode} setIsEditMode={setIsEditMode} />
      <div className="flex h-[8rem] gap-[1.1rem] overflow-x-auto">
        {members.map((member) => (
          <MemberItem key={member.id} member={member} isEditMode={isEditMode} />
        ))}
        <div
          onClick={clickInviteBtn}
          className="center h-[5.2rem] w-[5.2rem] min-w-[5.2rem] cursor-pointer rounded-full bg-gray-100"
        >
          <span className="text-3xl text-gray-400">
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </div>
      </div>
    </>
  );
}

import { useUser } from "../../../hooks/useUserInfo";
import MemberItem from "./memberItem";
import Header from "./header";
import thumbnail from "../../../assets/thumbnail.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { getRefrigeratorInfo } from "../../../services/refrigeService";
import { useEffect } from "react";
import { generateInviteCode } from "../../../services/refrigeService";
import { MemberType } from "../../../types/Member";

export default function Member() {
  const { userInfo, refrigeratorId } = useUser();
  const [members, setMembers] = useState<MemberType[]>([]);
  const [isEditMode, setIsEditMode] = useState(false);

  // 친구 초대 코드 생성
  const generateCode = async () => {
    const res = await generateInviteCode(refrigeratorId);
    return res.data.invitation_code;
  };

  // 친구 초대 버튼 클릭
  const clickInviteBtn = async () => {
    if (!window.Kakao?.isInitialized()) {
      window.Kakao?.init(process.env.REACT_APP_KAKAO_JS_SDK_KEY);
    }
    try {
      const code = await generateCode();
      await sendKakaoMessage(code);
    } catch (error) {
      console.error("메시지 전송 실패", error);
    }
  };

  // 카카오톡 공유하기
  const sendKakaoMessage = (code: string) => {
    return new Promise((resolve, reject) => {
      try {
        window.Kakao?.Share.sendDefault({
          objectType: "feed",
          content: {
            title: `${userInfo?.name}님의 냉장고 공유 초대`,
            description: "우리 냉장고를 함께 관리해보세요!",
            imageUrl: thumbnail,
            link: {
              mobileWebUrl: process.env.REACT_APP_HOME_URL,
              webUrl: process.env.REACT_APP_HOME_URL,
            },
          },
          buttons: [
            {
              title: "냉장고 구경하기",
              link: {
                mobileWebUrl: `${process.env.REACT_APP_HOME_URL}/foodlist?code=${code}&username=${userInfo?.name}`,
                webUrl: `${process.env.REACT_APP_HOME_URL}/foodlist?code=${code}&username=${userInfo?.name}`,
              },
            },
          ],
          installTalk: true,
        });
        return resolve(true);
      } catch (error) {
        return reject(error);
      }
    });
  };

  // 냉장고 멤버 정보 조회
  useEffect(() => {
    if (refrigeratorId) {
      getRefrigeratorInfo(refrigeratorId).then((res) => {
        const owner = { ...res.data.owner, role: "owner" };
        const members = res.data.member.map((member) => ({
          ...member,
          role: "member",
        }));
        setMembers([owner, ...members]);
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

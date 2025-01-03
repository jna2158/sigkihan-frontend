import thumbnail from "../../../../assets/thumbnail.png";

export default function Header() {
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
    <header className="flex items-center pb-[1.9rem] pt-[2.2rem]">
      <span className="text-[22px] font-semibold text-black">
        냉장고 구성원
      </span>
      <div className="absolute right-[2.1rem] flex gap-4">
        <button
          onClick={clickInviteBtn}
          className="text-[16px] font-medium text-gray-500"
        >
          친구 초대
        </button>
      </div>
    </header>
  );
}

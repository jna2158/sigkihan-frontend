import { PROFILE_IMAGES } from "../../../shared/constants/profileImages";
import { useUser } from "../../../hooks/useUserInfo";
import StatisticsIcon from "../../Statistics/components/statisticsIcon";
import AlarmIcon from "../../FoodList/components/alarm/alarmIcon";
import ReportTitle from "./reportTitle";

export default function Header() {
  const { userInfo } = useUser();
  const profileImageUrl = PROFILE_IMAGES.find(
    (item) => item.image === userInfo?.profileImage?.image,
  )?.url;

  return (
    <header className="center mt-[2.9rem] flex py-4">
      <div className="flex-1">
        <ReportTitle />
      </div>
      <nav className="center flex gap-[1rem]">
        <StatisticsIcon />
        <AlarmIcon />
        <img
          src={profileImageUrl}
          alt="프로필 이미지"
          className="h-[1.8rem] w-[1.8rem] rounded-full shadow-[0_0_4px_rgba(0,0,0,0.3)]"
        />
      </nav>
    </header>
  );
}

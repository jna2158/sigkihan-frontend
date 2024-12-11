import profile from "../../../assets/default_profile.svg";
import MyFridgeName from "../../../components/common/myFridgeName";
import AlarmIcon from "./alarm/alarmIcon";
import logo2 from "../../../assets/logo_02.svg";

export default function Header() {
  return (
    <header className="center mt-[2.9rem] flex py-4">
      <div className="flex-1">
        {/* <MyFridgeName /> */}
        <img
          src={logo2}
          alt="식기한 냉장고 로고"
          className="h-[2.4rem] w-[10rem]"
        />
      </div>
      <nav className="center flex gap-[1rem]">
        <AlarmIcon />
        <img
          src={profile}
          alt="프로필 이미지"
          className="h-[1.8rem] w-[1.8rem] rounded-full shadow-[0_0_4px_rgba(0,0,0,0.3)]"
        />
      </nav>
    </header>
  );
}

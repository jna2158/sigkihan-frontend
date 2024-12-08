import logo from "../../../assets/logo.png";
import MyFridgeName from "../../../components/common/myFridgeName";

export default function Header() {
  return (
    <header className="flex px-[1.3rem] py-4 pt-[2rem]">
      <div className="flex-1">
        <MyFridgeName />
      </div>
      <nav className="flex gap-[0.5rem]">
        <img src={logo} alt="알림 아이콘" className="h-[24px] w-[24px]" />
        <img src={logo} alt="프로필 이미지" className="h-[24px] w-[24px]" />
      </nav>
    </header>
  );
}

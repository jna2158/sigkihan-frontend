import useModalStore from "../../../../store/useModalStore";
import logo from "../../../../assets/logo.svg";
export default function AlarmIcon() {
  const { setModalOpen } = useModalStore();

  return (
    <div className="relative">
      <img
        src={logo}
        alt="알림 아이콘"
        className="h-[24px] w-[24px] cursor-pointer hover:opacity-80"
        onClick={() => setModalOpen("ALARM_DRAWER", true)}
      />
    </div>
  );
}

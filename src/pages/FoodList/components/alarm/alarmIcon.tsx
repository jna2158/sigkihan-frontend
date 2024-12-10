import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useModalStore from "../../../../store/useModalStore";

export default function AlarmIcon() {
  const { setModalOpen } = useModalStore();

  return (
    <div className="relative cursor-pointer">
      <FontAwesomeIcon
        icon={faBell}
        className="h-[1.8rem] w-[1.8rem]"
        style={{ color: "#EBEBEB" }}
        onClick={() => setModalOpen("ALARM_DRAWER", true)}
      />
      <div className="absolute -right-1 top-0 h-[0.4rem] w-[0.4rem] rounded-full bg-primary"></div>
    </div>
  );
}

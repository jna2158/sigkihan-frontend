import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AlarmIcon() {
  return (
    <div className="relative">
      <FontAwesomeIcon
        icon={faBell}
        className="h-[1.8rem] w-[1.8rem]"
        style={{ color: "#EBEBEB" }}
      />
      <div className="absolute -right-1 top-0 h-[0.4rem] w-[0.4rem] rounded-full bg-primary"></div>
    </div>
  );
}

import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function StatisticsIcon() {
  const navigate = useNavigate();

  return (
    <div className="relative cursor-pointer">
      <FontAwesomeIcon
        icon={faChartSimple}
        className="h-[1.8rem] w-[1.8rem]"
        onClick={() => navigate("/statistics")}
        style={{ color: "#EBEBEB" }}
      />
    </div>
  );
}

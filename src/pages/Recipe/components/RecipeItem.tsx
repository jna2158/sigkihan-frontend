import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function RecipeItem() {
  const navigate = useNavigate();

  return (
    <div
      className="h-[9.9rem] w-[21.9rem] cursor-pointer rounded-3xl bg-gray-50 px-[2rem] py-[1.5rem]"
      onClick={() => navigate(`/recipe/1`)}
    >
      <p className="text-semibold text-[16px] text-gray-500">소고기 스테이크</p>

      <div className="mt-[0.5rem] text-[14px] text-gray-400">
        <p>있는 재료 : 소고기, 마늘, 양파, 올리브오일</p>
        <p>없는 재료 : 소고기, 마늘, 양파</p>
      </div>

      <div className="mt-4 flex justify-between">
        <p className="text-[14px] font-semibold text-primary">
          조리시간 : 40분
        </p>
        <p className="center gap-2 text-[14px] font-semibold text-primary">
          난이도
          <span className="flex gap-1">
            <FontAwesomeIcon icon={faCircle} className="text-primary" />
            <FontAwesomeIcon icon={faCircle} className="text-primary" />
            <FontAwesomeIcon icon={faCircle} className="text-gray-100" />
          </span>
        </p>
      </div>
    </div>
  );
}

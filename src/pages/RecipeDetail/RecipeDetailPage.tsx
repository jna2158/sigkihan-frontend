import { useParams } from "react-router-dom";
import Header from "../Recipe/components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function RecipeDetailPage() {
  const { id } = useParams();

  return (
    <main className="flex h-full flex-col px-[1.3rem]">
      <header>
        <Header />
        <div className="h-[29.6rem] w-[21.9rem] cursor-pointer overflow-y-auto rounded-3xl bg-gray-50 px-[2rem] py-[1.5rem]">
          <p className="text-semibold text-[16px] text-gray-500">
            소고기 스테이크
          </p>

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

          <hr className="my-[2rem] text-gray-200" />

          <div className="flex flex-col gap-[0.5rem]">
            <p className="text-[14px] text-gray-500">기본 베이스 만들기</p>

            <p className="text-[14px] text-gray-400">
              면에 식용유 1큰술을 두르고 중약불에서 대파를 ..
            </p>
          </div>
        </div>
      </header>
    </main>
  );
}

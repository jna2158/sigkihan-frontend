import loadingImage from "../../../assets/loading.svg";

export default function RecipeLoading() {
  return (
    <div className="center h-full flex-col gap-[2.5rem]">
      <img src={loadingImage} alt="loading" className="h-[6.8rem] w-[6.8rem]" />
      <div className="center flex-col gap-[0.25rem]">
        <p className="text-[20px] font-semibold text-gray-400">
          레시피를 찾고 있어요!
        </p>
        <p className="text-[16px] text-gray-300">잠시만 기다려주세요</p>
      </div>
    </div>
  );
}

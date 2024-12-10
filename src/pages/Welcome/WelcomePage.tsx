import logo from "../../assets/welcomelogo.png";
import GoToFoodListButton from "./components/goToFoodListButton";
import WelcomeMessage from "./components/welcomeMessage";

export default function WelcomePage() {
  return (
    <main className="center flex-col gap-[5.8rem] pt-[7.2rem]">
      <div>
        <WelcomeMessage />
        <img
          src={logo}
          alt="로고 이미지"
          className="mt-[4.8rem] h-[13.6rem] w-[18.4rem]"
        />
      </div>
      <GoToFoodListButton />
    </main>
  );
}

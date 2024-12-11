import logo from "../../assets/welcomelogo.png";
import GoToFoodListButton from "./components/goToFoodListButton";
import WelcomeMessage from "./components/welcomeMessage";

export default function WelcomePage() {
  return (
    <main className="flex h-[100dvh] items-center justify-center">
      <div className="flex flex-col items-center gap-[5.8rem]">
        <div className="flex flex-col items-center">
          <WelcomeMessage />
          <img
            src={logo}
            alt="로고 이미지"
            className="mt-[4.8rem] h-[13.6rem] w-[18.4rem]"
          />
        </div>
        <GoToFoodListButton />
      </div>
    </main>
  );
}

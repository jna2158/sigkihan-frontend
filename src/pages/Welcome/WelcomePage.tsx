import logo from "../../assets/logo.png";
import GoToFoodListButton from "./components/goToFoodListButton";
import WelcomeMessage from "./components/welcomeMessage";

export default function WelcomePage() {
  return (
    <main className="center h-screen w-full flex-col gap-[5.8rem]">
      <div className="">
        <WelcomeMessage />
        <header>
          <img src={logo} alt="로고 이미지" className="h-[19rem] w-[19rem]" />
        </header>
      </div>
      <GoToFoodListButton />
    </main>
  );
}

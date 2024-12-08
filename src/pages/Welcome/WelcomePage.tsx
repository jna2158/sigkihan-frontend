import logo from "../../assets/logo.png";
import GoToFoodListButton from "./components/goToFoodListButton";
import WelcomeMessage from "./components/welcomeMessage";

export default function WelcomePage() {
  return (
    <main className="center h-screen w-full">
      <div className="center flex-col gap-[9.5rem]">
        <WelcomeMessage />
        <header>
          <img src={logo} alt="로고 이미지" className="h-[300px] w-[300px]" />
        </header>
        <section>
          <GoToFoodListButton />
        </section>
      </div>
    </main>
  );
}

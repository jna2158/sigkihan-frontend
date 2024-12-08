import KakaoLoginButton from "./Auth/components/kakaoLoginButton";
import logo from "../assets/logo.png";

export default function LandingPage() {
  return (
    <main className="center min-h-screen w-full items-center">
      <div className="center flex-col gap-[9.5rem]">
        <header>
          <img src={logo} alt="로고 이미지" className="h-[300px] w-[300px]" />
        </header>
        <section>
          <KakaoLoginButton />
        </section>
      </div>
    </main>
  );
}

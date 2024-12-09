import KakaoLoginButton from "./Auth/components/kakaoLoginButton";
import logo from "../assets/logo.png";
import { test } from "../services/authService";
export default function LandingPage() {
  const handleTest = () => {
    test()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className="center min-h-screen w-full items-center">
      <div className="center flex-col gap-[9.5rem]">
        <header>
          <img src={logo} alt="로고 이미지" className="h-[300px] w-[300px]" />
        </header>
        <section>
          <KakaoLoginButton />
          <button
            className="mt-5 h-[3.25rem] w-[22rem] rounded-lg bg-yellow-300 px-4 py-2"
            onClick={handleTest}
          >
            테스트
          </button>
        </section>
      </div>
    </main>
  );
}

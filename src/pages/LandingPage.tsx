import KakaoLoginButton from "./Auth/components/kakaoLoginButton";
import logo from "../assets/logo.svg";
import { useEffect } from "react";
import mainBackground from "../assets/mainbackground.png";

export default function LandingPage() {
  useEffect(() => {
    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        localStorage.removeItem("user");
      }
    };

    window.addEventListener("pageshow", handlePageShow);

    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("user");

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  return (
    <main
      className="h-[calc(100vh-64px)] w-layout"
      style={{
        backgroundImage: `url(${mainBackground})`,
        height: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="center h-full flex-col justify-between gap-[9.5rem] pb-20">
        <img
          src={logo}
          alt="로고 이미지"
          className="absolute left-[2.2rem] top-[9.6rem] h-[8.9rem] w-[12.5rem]"
        />
        <section className="absolute bottom-[8.6rem]">
          <KakaoLoginButton />
        </section>
      </div>
    </main>
  );
}

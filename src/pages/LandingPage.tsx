import KakaoLoginButton from "./Auth/components/kakaoLoginButton";
import logo from "../assets/logo.svg";
import { useEffect } from "react";
import mainBackground from "../assets/mainbackground.png";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("access");
    const refreshToken = localStorage.getItem("refresh");

    if (accessToken && refreshToken) {
      navigate("/welcome");
      return;
    }

    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        localStorage.clear();
      }
    };

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, [navigate]);

  return (
    <main
      className="h-layout w-layout"
      style={{
        backgroundImage: `url(${mainBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="center h-full flex-col justify-between gap-[9.5rem] pb-20">
        <img
          src={logo}
          alt="로고 이미지"
          className="relative left-[-3rem] top-[6.2rem] h-[8.9rem] w-[12.5rem]"
        />
        <section className="absolute bottom-[8.63rem]">
          <KakaoLoginButton />
        </section>
      </div>
    </main>
  );
}

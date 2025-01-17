import KakaoLoginButton from "./Auth/components/kakaoLoginButton";
import { useEffect } from "react";
import mainBackground from "../assets/mainbackground.jpg";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("access");
    const refreshToken = localStorage.getItem("refresh");

    if (accessToken && refreshToken) {
      const savedPath = sessionStorage.getItem("redirectPath");
      navigate(savedPath || "/welcome");
      return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    console.log("urlParams", urlParams);
    const code = urlParams.get("code");
    const username = urlParams.get("username");
    if (code && username) {
      sessionStorage.setItem(
        "redirectPath",
        `/foodlist?code=${code}&username=${username}`,
      );
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
        <section className="absolute bottom-[8.63rem]">
          <KakaoLoginButton />
        </section>
      </div>
    </main>
  );
}

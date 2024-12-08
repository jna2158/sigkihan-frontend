import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { kakaoLogin } from "../../services/authService";

const KakaoCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const authCode = new URL(window.location.href).searchParams.get("code");

    if (authCode) {
      kakaoLogin(authCode)
        .then((res) => {
          console.log(res);
          const data = res.data;
          localStorage.setItem("access", data.access);
          localStorage.setItem("refresh", data.refresh);
          localStorage.setItem("user", JSON.stringify(data.user));
          navigate("/welcome");
        })
        .catch((error) => {
          console.error("카카오 로그인 실패:", error);
          navigate("/");
        });
    }
  }, [navigate]);

  return null;
};

export default KakaoCallback;

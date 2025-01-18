import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { kakaoLogin } from "../../services/authService";
import useUserStore from "../../store/useUserStore";

const KakaoCallback = () => {
  const navigate = useNavigate();
  const { setUserInfo } = useUserStore.getState();

  const login = async (authCode: string) => {
    if (authCode) {
      try {
        const res = await kakaoLogin(authCode);
        const data = res.data;
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);
        localStorage.setItem("user", JSON.stringify(data.user));

        setUserInfo({
          id: data.user.id,
          email: data.user.email,
          name: data.user.username,
          profileImage: {
            name: data.user.profile_image.name,
            image: data.user.profile_image.id,
          },
          refrigerator_id: data.user.refrigerator_id,
        });

        const code = sessionStorage.getItem("code");
        const username = sessionStorage.getItem("username");
        if (code && username) {
          sessionStorage.removeItem("code");
          sessionStorage.removeItem("username");
          navigate(`/welcome?code=${code}&username=${username}`);
        } else {
          navigate("/welcome");
        }
      } catch (err) {
        console.error(err);
        navigate("/");
      }
    }
  };

  useEffect(() => {
    const authCode = new URL(window.location.href).searchParams.get("code");
    if (authCode) {
      login(authCode);
    }
  }, [navigate]);

  return null;
};

export default KakaoCallback;

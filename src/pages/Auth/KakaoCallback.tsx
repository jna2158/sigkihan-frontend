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
        navigate("/welcome");
      } catch (err) {
        console.error(err);

        // 로컬에서 테스트하기 위한 임시
        // setUserInfo({
        //   id: 5,
        //   email: "potenday@gmail.com",
        //   name: "냉부심",
        //   profileImage: {
        //     name: "profile1",
        //     image: 1,
        //   },
        //   refrigerator_id: 8,
        // });

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

import kakaoLogo from "../../../assets/kakao.png";

const KakaoLoginButton = () => {
  const handleLogin = () => {
    const CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID;
    const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&prompt=login`;

    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <button
      onClick={handleLogin}
      className="center social-button bg-yellow-300"
    >
      <img
        src={kakaoLogo}
        alt="카카오 로고"
        className="absolute left-5 h-5 w-5"
      />
      <span className="">카카오 로그인</span>
    </button>
  );
};

export default KakaoLoginButton;

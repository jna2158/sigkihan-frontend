const KakaoLoginButton = () => {
  const handleLogin = () => {
    const CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID;
    const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <button
      onClick={handleLogin}
      className="h-[3.25rem] w-[22rem] rounded-lg bg-yellow-300 px-4 py-2"
    >
      카카오로 로그인하기
    </button>
  );
};

export default KakaoLoginButton;

import { useState } from "react";
import { login } from "./services/authService";
import { isValidEmail } from "./shared/utils/validEmail";

function App() {
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    login({ email: "test@test.com", password: "test1234" })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <button onClick={handleLogin}>로그인</button>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        className="rounded-md border border-gray-300 p-2"
      />
      {isValidEmail(email)
        ? "올바른 이메일입니다."
        : "올바른 이메일이 아닙니다."}
    </div>
  );
}

export default App;

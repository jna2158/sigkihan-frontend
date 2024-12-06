import { useRef, useState, useEffect } from "react";
import { login } from "./services/authService";

function App() {
  const handleLogin = () => {
    login({ email: "test@test.com", password: "test1234" })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return <button onClick={handleLogin}>로그인</button>;
}

export default App;

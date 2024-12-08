import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FoodListPage from "./pages/FoodList/FoodListPage";
import FoodDetail from "./pages/FoodDetail/foodDetail";
import KakaoCallback from "./pages/Auth/KakaoCallback";
import WelcomePage from "./pages/Welcome/WelcomePage";

function App() {
  return (
    <main className="mx-auto h-screen w-layout bg-slate-100">
      <header className="flex h-11 w-full items-center justify-between border-b border-black bg-white px-4">
        <time className="text-black">9:41</time>
      </header>
      <section className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/foodlist" element={<FoodListPage />} />
          <Route path="/fooddetail" element={<FoodDetail />} />
          <Route path="/oauth/callback/kakao" element={<KakaoCallback />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;

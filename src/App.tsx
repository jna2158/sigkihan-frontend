import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FoodListPage from "./pages/FoodList/FoodListPage";
import FoodDetail from "./pages/FoodDetail/foodDetail";
import KakaoCallback from "./pages/Auth/KakaoCallback";

function App() {
  return (
    <div className="mx-auto h-screen w-layout bg-slate-100">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/foodlist" element={<FoodListPage />} />
        <Route path="/fooddetail" element={<FoodDetail />} />
        <Route path="/oauth/callback/kakao" element={<KakaoCallback />} />
      </Routes>
    </div>
  );
}

export default App;

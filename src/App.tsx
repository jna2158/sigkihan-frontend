import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FoodListPage from "./pages/FoodList/FoodListPage";
import FoodDetail from "./pages/FoodDetail/foodDetail";
import KakaoCallback from "./pages/Auth/KakaoCallback";
import WelcomePage from "./pages/Welcome/WelcomePage";
import ModalContainer from "./components/common/modal/modalContainer";

function App() {
  return (
    <>
      <main className="mx-auto h-screen w-layout overflow-y-auto bg-slate-100">
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
      <ModalContainer />
    </>
  );
}

export default App;

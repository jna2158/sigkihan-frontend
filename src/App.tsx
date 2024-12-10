import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FoodListPage from "./pages/FoodList/FoodListPage";
import FoodDetail from "./pages/FoodDetail/foodDetail";
import KakaoCallback from "./pages/Auth/KakaoCallback";
import WelcomePage from "./pages/Welcome/WelcomePage";
import ModalContainer from "./components/common/modal/modalContainer";
import BottomNavigation from "./components/common/\bBottomNavigation";
import MyProfilePage from "./pages/User/MyProfilePage";

function App() {
  const hideBottomNavPaths = ["/", "/welcome", "/oauth/callback/kakao"];
  const shouldShowBottomNav = !hideBottomNavPaths.includes(
    window.location.pathname,
  );

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-800">
      <main className="relative h-full w-layout overflow-hidden bg-white">
        <section className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/foodlist" element={<FoodListPage />} />
            <Route path="/food/:id" element={<FoodDetail />} />
            <Route path="/user/profile" element={<MyProfilePage />} />
            <Route path="/oauth/callback/kakao" element={<KakaoCallback />} />
          </Routes>
        </section>
        {shouldShowBottomNav && <BottomNavigation />}
        <ModalContainer />
      </main>
    </div>
  );
}

export default App;

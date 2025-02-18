import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FoodListPage from "./pages/FoodList/FoodListPage";
import FoodDetail from "./pages/FoodDetail/foodDetail";
import KakaoCallback from "./pages/Auth/KakaoCallback";
import WelcomePage from "./pages/Welcome/WelcomePage";
import ModalContainer from "./components/common/modal/modalContainer";
import BottomNavigation from "./components/common/\bBottomNavigation";
import MyProfilePage from "./pages/User/MyProfilePage";
import SharePage from "./pages/Share/SharePage";
import StatisticsPage from "./pages/Statistics/StatisticsPage";
import RecipePage from "./pages/Recipe/RecipePage";
import RecipeDetailPage from "./pages/RecipeDetail/RecipeDetailPage";

function App() {
  const location = useLocation();
  const hideBottomNavPaths = ["/", "/welcome", "/oauth/callback/kakao"];
  const shouldShowBottomNav = !hideBottomNavPaths.includes(location.pathname);

  return (
    <div className="min-h-screen w-full bg-gray-800">
      <div className="mx-auto flex h-screen w-layout flex-col bg-white">
        <main className="flex-1 overflow-y-auto pb-16">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/foodlist" element={<FoodListPage />} />
            <Route path="/share" element={<SharePage />} />
            <Route path="/food/:id" element={<FoodDetail />} />
            <Route path="/user/profile" element={<MyProfilePage />} />
            <Route path="/oauth/callback/kakao" element={<KakaoCallback />} />
            <Route path="/statistics" element={<StatisticsPage />} />
            <Route path="/recipe" element={<RecipePage />} />
            <Route path="/recipe/:id" element={<RecipeDetailPage />} />
          </Routes>
        </main>
        {shouldShowBottomNav && <BottomNavigation />}
        <ModalContainer />
      </div>
    </div>
  );
}

export default App;

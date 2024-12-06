import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FoodListPage from "./pages/FoodList/FoodListPage";
import FoodDetail from "./pages/FoodDetail/foodDetail";

function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/FoodList" element={<FoodListPage />} />
        <Route path="/FoodDetail" element={<FoodDetail />} />
      </Routes>
    </div>
  );
}

export default App;

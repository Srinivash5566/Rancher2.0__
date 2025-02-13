import { AuthProvider } from "./AuthContext";
import { CropProvider } from "./CropContext"; // Import the new context
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import HarvestingEngines from "./pages/HarvestingEngines";
import No404 from "./pages/No404";
import RegisterPage from "./pages/RegisterPage";
import CardInfo from "./pages/CardInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Community from "./pages/community";
import BuyPage from "./pages/BuyPage";

const App = () => {
  return (
    <AuthProvider>
      <CropProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/HarvestingEngines" element={<HarvestingEngines />} />
            {/* <Route path="/" element={<HarvestingEngines />} /> */}
            <Route path="/Community" element={<Community />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/RegisterPage" element={<RegisterPage />} />
            <Route path="/:id" element={<CardInfo />} />
            <Route path="/pay" element={<BuyPage />} />
            <Route path="*" element={<No404 />} />
          </Routes>
        </Router>
      </CropProvider>
    </AuthProvider>
  );
};

export default App;

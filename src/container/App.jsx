import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LandingUser from "../pages/LandingUser";
import LoginUser from "../pages/LoginUser";
import RegisterUser from "../pages/RegisterUser";
import PerfilUsuario from "../pages/perfilUsuario";
import DellPage from "../pages/DellPage";
import AsusPage from "../pages/AsusPage";
import HpPage from "../pages/HpPage";
import YouTubePage from "../pages/YouTubePage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />}/>
                <Route path="/registerUser" element={<RegisterUser />}/>
                <Route path="/loginUser" element={<LoginUser />}/>
                <Route path="/landingUser" element={<LandingUser />}/>
                <Route path="/perfilUser" element={<PerfilUsuario />}/>
                <Route path="/dellpage" element={<DellPage />}/>
                <Route path="/asuspage" element={<AsusPage />}/>
                <Route path="/hppage" element={<HpPage />}/>
                <Route path="/youtube" element={<YouTubePage />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
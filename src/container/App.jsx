import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import InicioUser from "../pages/InicioUser";
import InicioTech from "../pages/InicioTech";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />}/>
                <Route path="/InicioUser" element={<InicioUser />}/>
                <Route path="/InicioTech" element={<InicioTech />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
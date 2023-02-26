import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import InicioUser from "../pages/InicioUser";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />}/>
                <Route path="/InicioUser" element={<InicioUser />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
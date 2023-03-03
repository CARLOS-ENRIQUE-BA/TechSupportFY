import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import RegisterTech2 from "../pages/RegisterTech2";
import RegisterUser2 from "../pages/RegisterUser2";

import LandingTech from "../pages/LandingTech";
import LandingUser from "../pages/LandingUser";

import LoginTech from "../pages/LoginTech";
import LoginUser from "../pages/LoginUser";

import RegisterUser1 from "../pages/RegisterUser1";
import RegisterTech1 from "../pages/RegisterTech1";




function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />}/>

                
                <Route path="/landingTech" element={<LandingTech />}/>
                <Route path="/landingUser" element={<LandingUser />}/>
                
                
                <Route path="/registerTech1" element={<RegisterTech1 />}/>
                <Route path="/registerUser1" element={<RegisterUser1 />}/>

                <Route path="/registerTech2" element={<RegisterTech2 />}/>
                <Route path="/registerUser2" element={<RegisterUser2 />}/>
                

                <Route path="/loginTech" element={<LoginTech />}/>
                <Route path="/loginUser" element={<LoginUser />}/>


            </Routes>
        </BrowserRouter>
    );
}

export default App;
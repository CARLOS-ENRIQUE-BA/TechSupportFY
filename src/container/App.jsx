import { BrowserRouter, Routes, Route } from "react-router-dom";
import InicioUsuario from "../pages/InicioUsuario"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<InicioUsuario />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
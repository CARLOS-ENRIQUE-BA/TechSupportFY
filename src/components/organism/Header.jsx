import WrapperLabel from "../molecules/WrapperLabel";
import Logo from "../atoms/Logo";
import "../../assets/style/Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/img/Logo.svg";

function Header() {
    return (
        <>
            <header>
                <div className="container">
                    <div>
                        <Logo img={logo}/>
                    </div>
                    <div>
                        <Link to=""><WrapperLabel msn="Inicio" /></Link>
                        <Link to=""><WrapperLabel msn="Consulta" /></Link>
                        <Link to=""><WrapperLabel msn="Historial de consultas" /></Link>
                        <Link to=""><WrapperLabel msn="Perfil" /></Link>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;

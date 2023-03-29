import WrapperLabel from "../molecules/WrapperLabel";
import { Link } from "react-router-dom";
import Logo from "../atoms/Logo";
import logo from "../../assets/img/Logo.svg"
import "../../assets/style/Header.css";

function HeaderPage() {
    return (
        <>
            <header>
                <nav>
                    <div className="container">
                        <div className="logo">
                            <Logo img={logo}/>
                        </div>
                        <input type="checkbox" id="check"/>
                        <label for="check" className="bar-btn">
                            <i className="fas fa-bars"></i>
                        </label>
                        <ul className="nav-menu">
                            <li><Link to="/loginUser"><WrapperLabel msn="Iniciar sesión" /></Link></li>
                            <li><Link to="/registerUser"><WrapperLabel msn="Registrarse" /></Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default HeaderPage;
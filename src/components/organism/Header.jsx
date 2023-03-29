import WrapperLabel from "../molecules/WrapperLabel";
import Logo from "../atoms/Logo";
import "../../assets/style/Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/img/Logo.svg"

function Header() {
    return (
        <>
            <header>
                <nav>
                    <div className="container">
                        <div>
                            <Logo img={logo}/>
                        </div>
                        <input type="checkbox" id="check"/>
                        <label for="check" className="bar-btn">
                            <i className="fas fa-bars"></i>
                        </label>
                        <ul className="nav-menu">
                            <li><Link to="/landingUser"><WrapperLabel msn="Inicio" className="active"/></Link></li>
                            <li><Link to="/dellpage"><WrapperLabel msn="Dell" /></Link></li>
                            <li><Link to="/hppage"><WrapperLabel msn="hp" /></Link></li>
                            <li><Link to="/asuspage"><WrapperLabel msn="Asus" /></Link></li>
                            <li><Link to="/perfilUser"><WrapperLabel msn="Perfil" /></Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;

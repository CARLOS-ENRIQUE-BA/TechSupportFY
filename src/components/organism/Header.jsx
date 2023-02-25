import WrapperLabel from "../molecules/WrapperLabel";
import Title from "../atoms/Title";
import Logo from '../../assets/img/Logo.svg';
import "../../assets/style/Header.css";

function NavBar() {
    return (
        <>
            <header>
                <div className="container">
                    <div>
                        <img src={Logo} alt="Logo de la empresa"/>
                    </div>
                    <div>
                        <WrapperLabel msn="Inicio" />
                        <WrapperLabel msn="Consulta" />
                        <WrapperLabel msn="Historial de consultas" />
                        <WrapperLabel msn="Perfil" />
                    </div>
                </div>
            </header>
        </>
    );
}

export default NavBar;
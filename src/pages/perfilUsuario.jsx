import { Link } from "react-router-dom";
import Header from "../components/organism/Header";
import Footer from "../components/organism/Footer";
import Paragraph from "../components/atoms/Paragraph";
import "../assets/style/PerfilUsuario.css";

function PerfilUsuario() {

    return (
        <>
            <Header/>
            <div className="container-perfil-padre">
                <div className="container-imgs-padre" >
                    <div className="container-img-usuario"></div>
                </div>
                <div className="container-info-padre">
                    <div className="container-info-user">
                        <Paragraph>Nombre: Ali Lopez</Paragraph>
                        <Paragraph>Correo: alilopez@gmail.com</Paragraph>
                        <div className="container-btn-info">
                            <Link to="/"><button type="button">cerrar sesion</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default PerfilUsuario;
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
                        <Paragraph>Nombre: Robertito</Paragraph>
                        <Paragraph>Correo: </Paragraph>
                        <div className="container-btn-info">
                            <button type="button">cerrar sesion</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default PerfilUsuario;
import HeaderLandingPage from "../components/organism/HeaderLandingPage";
import Title from "../components/atoms/Title";
import Question from "../components/atoms/Question";
import Paragraph from "../components/atoms/Paragraph";
import SubTitle from "../components/atoms/SubTitle";
import ImgLanding2 from "../assets/img/ImgLanding2.svg";
import ImgLanding3 from "../assets/img/ImgLanding4.svg";
import "../assets/style/InicioUsuario.css";
import Footer from "../components/organism/Footer";

function LandingPage() {
    return (
        <>
            <HeaderLandingPage/>
            <div class="article-container-cover-Landing">
                    <div class="container-info-cover">
                        <Title>Bienvenido a TechSupportFY</Title>
                    </div>
            </div>
            <div className="body">
                <div>
                    <div className="containerTitulo">
                        <SubTitle> Tips, soluciones y seguridad para tu laptop, usala y cuidala al 100%</SubTitle>
                    </div>
                    <div className="containerPadre2">
                        <div className="containerImg2">
                            <img src={ImgLanding2} alt="Imagen dos"/>
                        </div>
                        <div className="containerText">
                            <Question>¿En que nos especializamos?</Question>
                            <Paragraph>Nos especializamos en brindarle información  y solucion a problemas de soporte tecnico.</Paragraph>
                        </div>
                    </div>
                    <div className="containerPadre">
                        <div className="containerText">
                            <Question>¿Cómo puedo registrarme en TechSupportFY?</Question>
                            <Paragraph>
                                <ol>
                                    <li>En la parte superior derecha de la pagína podra encontrar el boton de “Registrarse”.</li>
                                    <li>Una vez estando en el formulario de registro, llene todo con sus datos.</li>
                                    <li>Despues inicie sesion con los datos antes registrados.</li>
                                </ol>
                            </Paragraph>
                        </div>
                        <div className="containerImg">
                            <img  src={ImgLanding3} alt="Imagen uno"/>
                        </div>
                    </div>
                    <div className="containerLabel">
                        <div>
                            <Question>Resuelve tus dudas y problemas con TechSupportForYou</Question>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default LandingPage;
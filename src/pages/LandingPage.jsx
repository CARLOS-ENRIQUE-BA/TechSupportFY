import HeaderLandingPage from "../components/organism/HeaderLandingPage";
import Title from "../components/atoms/Title";
import Question from "../components/atoms/Question";
import Paragraph from "../components/atoms/Paragraph";
import SubTitle from "../components/atoms/SubTitle";
import ImgLanding1 from "../assets/img/ImgLanding1.svg";
import ImgLanding2 from "../assets/img/ImgLanding2.svg";
import ImgLanding3 from "../assets/img/ImgLanding3.svg";
import ImgLanding4 from "../assets/img/ImgLanding4.svg";
import ImgLanding5 from "../assets/img/ImgLanding5.svg";
import WrapperLabel from "../components/molecules/WrapperLabel";
import "../assets/style/InicioUsuario.css";
import { Link } from "react-router-dom";
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
            <div>
                <div>
                    <div className="containerTitulo">
                        <SubTitle> Tips, soluciones y seguridad para tu laptop, usala y cuidala al 100%</SubTitle>
                    </div>
                    <div className="containerPadre">
                        <div className="containerText">
                            <Question>¿Por que nos necesitas?</Question>
                            <Paragraph>Ofrecemos soporte tecnico de calidad a usuarios de laptop las 24 horas de los 7 días de la semana.  </Paragraph>
                        </div>
                        <div className="containerImg">
                            <img  src={ImgLanding1} alt="Imagen uno"/>
                        </div>
                    </div>
                    <div className="containerPadre">
                        <div className="containerImg2">
                            <img src={ImgLanding2} alt="Imagen dos"/>
                        </div>
                        <div className="containerText">
                            <Question>¿En que nos especializamos?</Question>
                            <Paragraph>Nos especializamos en brindarle información  y solucion a problemas muy especificos acerca del sistema operativo y hardware de su laptop.</Paragraph>
                        </div>
                    </div>
                    <div className="containerPadre">
                        <div>
                        <Question>¿Cúales son las ventajas de ser miembro?</Question>
                            <Paragraph>
                                <ul>
                                    <li>Soporte en las 24 horas.</li>
                                    <li>Calidad de soporte.</li>
                                    <li>Resolvemos todas tus dudas.</li>
                                    <li>Técnicos expertos. </li>
                                </ul>
                            </Paragraph>
                        </div>
                        <div className="containerImg">
                            <img  src={ImgLanding3} alt="Imagen dos"/>
                        </div>
                    </div>
                    <div className="containerPadre">
                        <div>
                            <Question>¿A que sistemas operativos brindamos soporte?</Question>
                            <Paragraph>Brindamos soporte tecnico exclusivamente a laptops con sistema operativo windows 10 y 11, esto para brindarte un soporte mas especializado.</Paragraph>
                        </div>
                    </div>
                    <div className="containerPadre">
                        <div className="containerText">
                            <Question>¿Cómo puedo registrarme en TechSupportFY?</Question>
                            <Paragraph>
                                <ol>
                                    <li>En la parte superior derecha de la pagína podra encontrar el boton de “Registrarse”, de click sobre el boton.</li>
                                    <li>Una vez estando en el formulario de registro, llene todo con sus datos reales para tener una mayor seguridad.</li>
                                    <li>Al finalizar el proceso de registro, de click en “iniciar sesion” e ingrese el correo y contraseña que creo al registrarse.</li>
                                    <li>Una vez terminado el proceso de registro e inicio de sesión, puede empezar a recibir el soporte técnico de la mejor calidad.</li>
                                </ol>
                            </Paragraph>
                        </div>
                        <div className="containerImg">
                            <img  src={ImgLanding4} alt="Imagen uno"/>
                        </div>
                    </div>
                    <div className="containerLabel">
                        <div>
                            <Question>¿Quieres volverte uno de nuestros técnicos?</Question>
                            <Paragraph>Te damos las oportunidad de ayudar a los demas con tu conocimiento y tiempo, puedes registrarte como técnico aquí, solo completa tu registro y empieza a ayudar a los demás.</Paragraph>
                        </div>
                    </div>
                    <div className="containerLabel">
                        <div className="colordelabel">
                            <Link to="/registerTech1"><WrapperLabel msn="Regístrarse >" /></Link>
                            <Link to="/loginTech"><WrapperLabel msn="Iniciar sesión >" /></Link>
                        </div>
                    </div>

                    <div className="imgcenter" >
                        <img  src={ImgLanding5} alt="Imagen uno"/>
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
import { Link } from "react-router-dom";
import Header from "../components/organism/Header"
import Footer from "../components/organism/Footer";
import Title from "../components/atoms/Title";
import WrapperLabel from "../components/molecules/WrapperLabel";
import Question from "../components/atoms/Question";
import Paragraph from "../components/atoms/Paragraph"
import SubTitle from "../components/atoms/SubTitle"
import Imagen01 from '../assets/img/Img01.svg'
import Imagen02 from '../assets/img/Img02.svg'
import "../assets/style/InicioUsuario.css";
import '../assets/style/index.css';

function LandingUser() {
    return (
        <>
            <Header/>
            <div class="article-container-cover">
                <div class="container-info-cover">
                    <Title>Bienvenido a la guía de usuario</Title>
                </div>
            </div>
            <div className="body">
                <div>
                    <div className="containerTitulo">
                        <SubTitle>Pasos para usar TechSupportFY</SubTitle>
                    </div>
                    <div className="containerPadre">
                        <div className="containerText">
                            <Question>Guía basica</Question>
                            <Paragraph>En la parte superior derecha podras encontrar los diferentes apartados de la aplicación, entre ellos los diferentes tipos de marcas a las que le damos soporte.</Paragraph>
                        </div>
                        <div className="containerImg">
                            <img className="containerImg"  src={Imagen01} alt="Imagen uno"/>
                        </div>
                    </div>
                    <div className="containerPadre">
                        <div className="containerImg2">
                            <img className="containerImg" src={Imagen02} alt="Imagen dos"/>
                        </div>
                        <div className="containerLabel">
                            <div className="colordelabel">
                                <Question>Si quieres saber mas acerca de TechSupportFY visita el siguient enelace.</Question>
                                <Link><WrapperLabel msn="Mas información" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default LandingUser;
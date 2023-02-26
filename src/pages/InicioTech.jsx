import Header from "../components/organism/Header"
import Footer from "../components/organism/Footer";
import Title from "../components/atoms/Title";
import Question from "../components/atoms/Question";
import Paragraph from "../components/atoms/Paragraph"
import SubTitle from "../components/atoms/SubTitle"
import ImgTech1 from '../assets/img/ImgTech1.svg'
import ImgTech2 from '../assets/img/ImgTech2.svg'
import "../assets/style/InicioUsuario.css";
import '../assets/style/index.css';

function LandingTech() {
    return (
        <>
            <Header/>
            <div class="article-container-cover-Landing-Tech">
                <div class="container-info-cover">
                    <Title>Bienvenido a la guía de Técnico</Title>
                </div>
            </div>
            <div>
                <div>
                    <div className="containerTitulo">
                        <SubTitle>Aprende a brindar consultas de buena calidad a todos los usuarios con TechSupportFY.</SubTitle>
                    </div>
                    <div className="containerPadre">
                        <div className="containerText">
                            <Question>¿Cómo puedo brindar una consulta de alta calidad?</Question>
                            <Paragraph>Para brindar una consulta de alta calidad debe ser respetuoso y educado durante la consulta, debes estar conciente de que tus respuestas a los problemas del usuario deben ser breves y especifícas. </Paragraph>
                        </div>
                        <div className="containerImg">
                            <img className="containerImg"  src={ImgTech1} alt="Imagen uno"/>
                        </div>
                    </div>
                    <div className="containerPadre">
                        <div>
                            <Question>¿¿Cómo puedo saber cuantas consultas brinde en mi día?</Question>
                            <Paragraph>Las consultas una vez concluidas, se guardan en el historial de consultas, esto con el proposito de mantenerse informado de las consultas que lleva díariamente, también le pueden servir de retroalimentación, en caso de tener una consulta con los datos que mas utiliza normalmente.</Paragraph>
                        </div>
                    </div>
                    <div className="containerPadre">
                        <div className="containerImg2">
                            <img className="containerImg" src={ImgTech2} alt="Imagen dos"/>
                        </div>
                        <div className="containerText">
                            <Question>¿Qué ocurre en caso de el usuario sea conflictivo?</Question>
                            <Paragraph>En caso de que el usuario sea irrespetuoso o agresivo, tiene la opción de terminar la consulta, para evitar este problema, se le sugiere tener paciencia y guardar la compostura en estos casos, cualquier duda o caso muy problematico, puedes contactarnos a traves de nuestras redes sociales, las puedes encontrar en la parte inferior de este apartado. </Paragraph>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default LandingTech;
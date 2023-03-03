import Header from "../components/organism/Header"
import Footer from "../components/organism/Footer";
import Title from "../components/atoms/Title";
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
            <div>
                <div>
                    <div className="containerTitulo">
                        <SubTitle>Aprende a utilizar y aprovechar correctamente nuestro soporte técnico.</SubTitle>
                    </div>
                    <div className="containerPadre">
                        <div className="containerText">
                            <Question>¿Qué dudas puedo resolver al inicar una consulta?</Question>
                            <Paragraph>Las dudas que puedes resolver son ilimitadas, ya que puedes preguntar acerca del sistema operativo windows 10 y 11, también puedes preguntar acerca del hardware de tu laptop, ya que contamos con conocimiento general y especifico sobre laptops de pasada y nueva generación. </Paragraph>
                        </div>
                        <div className="containerImg">
                            <img className="containerImg"  src={Imagen01} alt="Imagen uno"/>
                        </div>
                    </div>
                    <div className="containerPadre">
                        <div>
                            <Question>¿Qué pasa si quiero saber que solución me brindaron en una consulta pasada?</Question>
                            <Paragraph>Las consultas pasadas no se eliminan, ya que tenemos un apartado de historial de consultas, para que puedas ver todas tus consultas pasadas, así podrás ahorrarte tiempo y esfuerzó al buscar la solución que ya se te brindó.</Paragraph>
                        </div>
                    </div>
                    <div className="containerPadre">
                        <div className="containerImg2">
                            <img className="containerImg" src={Imagen02} alt="Imagen dos"/>
                        </div>
                        <div className="containerText">
                            <Question>¿Qué dudas puedo resolver al inicar una consulta?</Question>
                            <Paragraph>Las dudas que puedes resolver son ilimitadas, ya que puedes preguntar acerca del sistema operativo windows 10 y 11, también puedes preguntar acerca del hardware de tu laptop, ya que contamos con conocimiento general y especifico sobre laptops de pasada y nueva generación. </Paragraph>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default LandingUser;
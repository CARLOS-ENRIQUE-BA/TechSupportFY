import Title from "../atoms/Title";
import Facebook from "../../assets/img/Facebook.svg";
import Twitter from "../../assets/img/Twitter.svg";
import YouTube from "../../assets/img/YouTube.svg";
import Instagram from "../../assets/img/Instagram.svg";
import { Link } from "react-router-dom";
import "../../assets/style/Footer.css";
import Paragraph from "../atoms/Paragraph";

function Footer() {
    return (
        <>
            <footer>
                <div class="container-footer">
                    <div class="container-footer-info">
                        <div className="colortitle">
                            <Title>Sobre nosotros</Title>
                            <Paragraph>Somos una empresa destinada al soporte tecnico. Nuestro proposito es solventar la mayoria de problemas, relacionado con el software de una computadora que tengan nuestros usuarios.</Paragraph>
                        </div>
                    </div>
                    <div className="container-footer-info">
                        <Title>Contactanos</Title>
                        <div className="redes-footer">
                            <Link to="https://www.facebook.com/" className="logo-redes"><img src={Facebook}/></Link>
                            <Link to="https://www.youtube.com/" className="logo-redes"><img src={YouTube}/></Link>
                            <Link to="https://twitter.com/" className="logo-redes"><img src={Twitter}/></Link>
                            <Link to="https://www.instagram.com/" className="logo-redes"><img src={Instagram}/></Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
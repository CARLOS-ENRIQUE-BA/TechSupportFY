import Title from "../atoms/Title";
import Facebook from "../../assets/img/Facebook.svg";
import Twitter from "../../assets/img/Twitter.svg";
import YouTube from "../../assets/img/YouTube.svg";
import Instagram from "../../assets/img/Instagram.svg";
import { Link } from "react-router-dom";
import "../../assets/style/Footer.css";

function Footer() {
    return (
        <>
            <footer>
                <div class="container-footer">
                    <div class="container-footer-info">
                        <div className="colortitle">
                            <Title>Síguenos</Title>
                        </div>
                    </div>
                    <div className="redes-footer">
                        <Link to="https://www.facebook.com/"><img src={Facebook}/></Link>
                        <Link to="https://www.youtube.com/"><img src={YouTube}/></Link>
                        <Link to="https://twitter.com/"><img src={Twitter}/></Link>
                        <Link to="https://www.instagram.com/"><img src={Instagram}/></Link>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
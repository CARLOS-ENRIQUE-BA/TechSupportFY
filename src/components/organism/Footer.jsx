import Title from "../atoms/Title";
import Facebook from "../../assets/img/Facebook.svg";
import Twitter from "../../assets/img/Twitter.svg";
import YouTube from "../../assets/img/YouTube.svg";
import Instagram from "../../assets/img/Instagram.svg";
import "../../assets/style/Footer.css";

function Footer() {
    return (
        <>
            <footer>
                <div class="container-footer">
                    <div class="container-footer-info">
                        <Title>Siguenos</Title>
                    </div>
                    <div className="redes-footer">
                        <img src={Facebook}/>
                        <img src={YouTube}/>
                        <img src={Twitter}/>
                        <img src={Instagram}/>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
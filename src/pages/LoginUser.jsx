import FormLoginUser from "../components/organism/FormLoginUser";
import Textura from "../components/atoms/Textura";
import Line from '../assets/img/Line.svg'
import Line2 from '../assets/img/Line2.svg'
import '../assets/style/texturas.css'

function LoginUser() {
    return (
        <>
            <div className="linea1">
                <Textura img={Line}/>
            </div>
            <FormLoginUser/>
            <div className="linea2">
                <Textura img={Line2}/>
            </div>
        </>
    );
}

export default LoginUser;
import FormRegisterUser from "../components/organism/FormRegisterUser";
import Textura from "../components/atoms/Textura";
import Elipse from '../assets/img/Ellipse.svg'
import Elipse2 from '../assets/img/Ellipse2.svg'
import '../assets/style/texturas.css'

function RegisterUser() {
    return (
        <>
            <div className="elipse1">
                <Textura img={Elipse}/>
            </div>
            <FormRegisterUser/>
            <div className="elipse2">
                <Textura img={Elipse2}/>
            </div>
        </>
    );
}

export default RegisterUser;
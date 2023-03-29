import { useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from '../atoms/Logo';
import WrapperInput from '../molecules/WrapperInput'
import logo2 from '../../assets/img/Logo2.svg'
import WrapperLabel from "../molecules/WrapperLabel";


const StyledRegister1 = styled.div `
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    border-left: solid black;
    padding: 0 7%;
    @media screen and (max-width:767px){
        border-left: 0;
        padding: 0;
        margin:0 5%;
    }
`;
const StyledFormRegister1 = styled.form `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 12% 0 0 ;
    @media screen and (max-width:767px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 30% 0 0;
    }
`;
const StyledDivLogo = styled.div `
    width: 33%;
`;
const StyledContainerLabel = styled.div `
    padding: 5%;
    text-align: center;
`;

const StyledContainerButton = styled.button `
    border: none;
    width: 70%;
    color: white;
    font-size: 20px;
    background:  #B46C2B;
    padding: 15px 20px;
    border-radius: 20px;
    cursor: pointer;
    :hover {
        background: #f5a75e;
    }
    @media screen and (max-width:767px){
        width: 100%;
    }
`;
const StyledContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

function FormLoginUser() {

    // const Form = useRef();
    // const navigate = useNavigate();

    // const handlerClick = (e) => {
    //     e.preventDefault();

    //     const newForm = new FormData(Form.current);

    //     if(newForm.get("correo") === "" || newForm.get("contrasenia") === ""){
    //         alert("campos vacios");
    //     }
    //     fetch('http://localhost:8080/techuser/getAll')
    //     .then(response => response.json())
    //     .then(data => {
    //         if(data[2].correo ===  newForm.get('correo') && data[2].contrasenia ===  newForm.get('contrasenia')){
    //             alert("Bienvenido")
    //             navigate("/landingUser");
    //         }
    //         else{
    //             alert("Error al iniciar sesión")
    //         }
    //     })
    // };

    return (
        <>
            <StyledFormRegister1>
                <StyledDivLogo>
                    <Logo img={logo2} />
                </StyledDivLogo>
                <StyledRegister1>
                    <WrapperInput msn={"Correo electronico"} type="text" name={"correo"}/>
                    <WrapperInput msn={"Contraseña"} type="password" name={"contrasenia"}/>
                    <StyledContainer>
                        <StyledContainerLabel>
                            <WrapperLabel msn={"Si aun no tienes una cuenta con nosotros, registrate."}/>
                        </StyledContainerLabel>
                        <StyledContainerButton type="button"><Link to="/landingUser"><WrapperLabel msn="Siguiente"/></Link></StyledContainerButton>
                    </StyledContainer>
                </StyledRegister1>
            </StyledFormRegister1>
        </>
    );
}

export default FormLoginUser;
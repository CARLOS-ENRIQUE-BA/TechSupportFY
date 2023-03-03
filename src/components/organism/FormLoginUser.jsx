import { useRef } from "react";
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
    padding-left: 7%;
`;
const StyledFormRegister1 = styled.form `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding-top: 7%;
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
`;
const StyledContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;



function FormLoginUser1() {

    const Form = useRef();
    const navigate = useNavigate();

    const handlerClick = (e) => {
        e.preventDefault();
        const newForm = new FormData(Form.current);

        if(newForm.get("correo") === "" || newForm.get("contrasenia") === ""){
            alert("campos vacios");
        }else{
            navigate("/")
        }
    };

    return (
        <>
            <StyledFormRegister1 ref={Form}>
                <StyledDivLogo>
                    <Logo img={logo2} />
                </StyledDivLogo>
                <StyledRegister1>
                    <WrapperInput msn={"Correo electronico"} type="text" name={"correo"}/>
                    <WrapperInput msn={"Contraseña"} type="text" name={"contrasenia"}/>
                    <StyledContainer>
                        <StyledContainerLabel>
                            <WrapperLabel msn={"Si ya tienes una cuenta con nosotros, inicia sesión."}/>
                        </StyledContainerLabel>
                        <StyledContainerButton type="button" onClick={handlerClick}>Siguiente</StyledContainerButton>
                    </StyledContainer>
                </StyledRegister1>
            </StyledFormRegister1>
        </>
    );
}

export default FormLoginUser1;
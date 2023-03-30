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
    padding: 6% 0;
    @media screen and (max-width:767px){
        display: flex;
        flex-direction: column;
        justify-content: center;
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
    padding-left: 20%;
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



function FormRegisterUser() {

    const Form = useRef();
    const endPoint = 'http://52.55.230.220/registro/create'
    const navigate = useNavigate();

    const handlerClick = (e) => {
        e.preventDefault();
        const newForm = new FormData(Form.current);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept", "application/json");

        var raw = JSON.stringify({
            nombre: newForm.get("nombre"),
            apellido: newForm.get("apellido"),
            correo: newForm.get("correo"),
            contraseña: newForm.get("contraseña"),
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://52.55.230.220/registro/create", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));


        if(newForm.get("nombre") === "" || newForm.get("apellido") === "" || newForm.get("correo") === "" || newForm.get("contraseña") === ""){
            alert("Cuidado!!! Hay campos vacíos");
        }else{
            fetch(endPoint, options)
            .then((response) => response.json())
            .then((data) => {
                alert(JSON.stringify(data));
            });
            navigate("/loginUser")
        }
    };

    return (
        <>
            <StyledFormRegister1 ref={Form}>
                <StyledDivLogo>
                    <Logo img={logo2} />
                </StyledDivLogo>
                <StyledRegister1>
                    <WrapperInput msn={"Nombre(s)"} type="text" name={"nombre"}/>
                    <WrapperInput msn={"Apellido(s)"} type="text" name={"apellido"}/>
                    <WrapperInput msn={"Correo electronico"} type="text" name={"correo"}/>
                    <WrapperInput msn={"Contraseña"} type="password" name={"contraseña"}/>
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

export default FormRegisterUser;
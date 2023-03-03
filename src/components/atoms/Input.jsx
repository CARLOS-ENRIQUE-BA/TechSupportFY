import styled from 'styled-components';

const StyledInput = styled.input `
    font-family: "Manrope",Arial,Helvetica Neue,Helvetica,sans-serif;
    width: 100%;
    line-height: 2rem;
    background-color: #F1BC8C;
    border: 0;
    border-radius: 5px;
`;

function Input({type, name}) {
    return (
        <StyledInput type={type} name={name}/>
    );
}

export default Input;
import styled from "styled-components";
import Label from "../atoms/Label";
import Input from "../atoms/Input";

const StyledWrapperLabel = styled.div `
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding-top: 30px;
    width: 100%;
`;

function WrapperLabel({msn, type, name}) {
    return (
        <>
            <StyledWrapperLabel>
                <Label msn={msn} />
                <Input type={type} name={name} />
            </StyledWrapperLabel>
        </>
    );
}

export default WrapperLabel;
import styled from 'styled-components';

const StyledLabel = styled.label `
    font-family: "Manrope",Arial,Helvetica Neue,Helvetica,sans-serif;
    padding-right: 30px;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 27px;
`;

function Label({msn}) {
    return (
        <StyledLabel>{msn}</StyledLabel>
    );
}

export default Label;
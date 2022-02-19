import Card from "./ui/Card";
import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
`;


function NewContents() {
    return (
        <CardContainer>
            <Card width={'220'} height={'430'} />
            <Card width={'220'} height={'430'} />
            <Card width={'220'} height={'430'} />
            <Card width={'220'} height={'430'} />
        </CardContainer>
    );
}

export default NewContents;
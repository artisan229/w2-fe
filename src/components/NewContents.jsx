import Card from "./ui/Card";
import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
`;


function NewContents() {
    return (
        <CardContainer>
            <Card />
            <Card />
            <Card />
            <Card />
        </CardContainer>
    );
}

export default NewContents;
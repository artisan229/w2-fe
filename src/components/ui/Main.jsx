import styled from "styled-components";

const MainContainer = styled.div`
    width: 100%;
    height: 120px;
`;

const Title = styled.h2`
    color: white;
    margin-top: 240px;
    text-align: center;
    font-size: 50px;
`;

function Main() {
    return (
        <MainContainer>
            <Title>We will go Hollywood</Title>
        </MainContainer>
    );
}

export default Main;
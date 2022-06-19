import styled from "styled-components";

const MainContainer = styled.div`
    width: 100%;
    height: 120px;
    @media screen and (max-width: 768px) {
        vertical-align: middle;
        height: 60px;
    }
`;

const Title = styled.h2`
    color: white;
    margin-top: 30px;
    text-align: center;
    font-size: 50px;
    @media screen and (max-width: 768px){
        margin-top: 20px;
        font-size: 30px;
    }
`;

function Main() {
    return (
        <MainContainer>
            <Title>We will go Hollywood</Title>
        </MainContainer>
    );
}

export default Main;
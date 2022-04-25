import styled from "styled-components";

const IndexContainer = styled.div`
    hr {
    border: 0;
    width: 60%;
    height: 4px;
    background: #262626;
    }
`;

const IndexTab = styled.div`
    width: 60%;
    color: white;
    margin: auto;
    display: flex;
    justify-content: space-around;
    p {
        margin: 0;
        &:hover {
            cursor: pointer;
        }
    }
`;

function Index() {
    return (
        <IndexContainer>
            <hr />
            <IndexTab>
                <p>새로 올라온 작품</p>
                <p>펀딩 성공한 작품</p>
                <p>오늘의 추천 카테고리</p>
                <p>Magazine</p>
                <p>프리미엄 입관 직전 작품</p>
            </IndexTab>
        </IndexContainer>
    );
}

export default Index;
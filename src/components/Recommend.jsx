import styled from "styled-components";

const RecommendContainer = styled.div`
    h4 {
        color: white;
        text-align: center
    }
`;

const CircleContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    background: white;
    text-align: center;
    line-height: 200px;
    padding: 30px;
    margin: 30px;
    background-size: cover;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`;

function Recommend() {
    return (
        <RecommendContainer>
            <h4>오늘의 추천 카테고리</h4>
            <CircleContainer>
                <Circle>극 영화</Circle>
                <Circle>다큐멘터리</Circle>
                <Circle>로맨스</Circle>
                <Circle>시간여행</Circle>
            </CircleContainer>
        </RecommendContainer>
    );
}

export default Recommend;
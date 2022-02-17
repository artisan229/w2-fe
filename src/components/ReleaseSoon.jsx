import styled from "styled-components";

const ReleaseSoonContainer = styled.div`
    text-align: center;
    color: white;
`;

const ReleaseSoonWrap = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
`;

const ReleaseSoonLeft = styled.div`
    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
`;

const ReleaseSoonRight = styled.div`
    display: flex;
`;

const ReleaseCard = styled.div`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    background: #eee;
    margin: 10px;
    &:hover {
        cursor: pointer;
        opacity: 0.6;
    }
`;

const ReleaseMore = styled.button`
    width: 240px;
    height: 50px;
    font-size: 16px;
    font-weight: 500;
    margin-top: 80px;
    padding: 8px 16px 8px 16px;
    color: white;
    background: #707070;
    border: none;
    &:hover {
        cursor: pointer;
    }
`;

function ReleaseSoon() {
    return(
        <ReleaseSoonContainer>
            <h4>공개 예정인 작품</h4>
            <p>난 이제 지쳤어요, 기다리게 지치게 만들 예정 작품들</p>
            <ReleaseSoonWrap>
                <ReleaseSoonLeft>
                    <ReleaseCard width="683" height="512"></ReleaseCard>
                </ReleaseSoonLeft>
                <div style={{height: "384px"}}>
                    <ReleaseSoonRight>
                        <ReleaseCard width="210" height="306"></ReleaseCard>
                        <ReleaseCard width="210" height="306"></ReleaseCard>
                    </ReleaseSoonRight>
                    <div>
                        <ReleaseMore>펀딩 성공 작품 더 보러가기 {'>'}</ReleaseMore>
                    </div>
                </div>
            </ReleaseSoonWrap>
        </ReleaseSoonContainer>
    );
}

export default ReleaseSoon;
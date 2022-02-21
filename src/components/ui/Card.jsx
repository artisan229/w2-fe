import styled from "styled-components";

const CardStyle = styled.div`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    margin: 30px;
    &:hover {
        cursor: pointer;
    }
`;

const Poster = styled.img`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    background: #eee;
    &:hover {
        cursor: pointer;
        opacity: 0.6;
    }
`;

const Title = styled.p`
    margin: 0;
    color: white;
    font-size: 18px;
    font-weight: 500;
`;

const Info = styled.p`
    margin: 0;
    color: white;
    font-size: 14px;
    font-weight: 400;
`;

const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Tag = styled.p`
    margin: 5 0 0 0;
    color: white;
    font-size: 14px;
    font-weight: 500;
`;

const Uploaded = styled.p`
    margin: 5 0 0 0;
    color: white;
    font-size: 14px;
    font-weight: 500;
`;

function Card(props) {
    return (
        <CardStyle width={props.width} height={props.height}>
            {
                props.onlyPoster === true
                    ? <Poster width={props.width} height={props.height} />
                    : <>
                        <Poster width={props.width} height={props.height - 120} />
                        <Title>용순</Title>
                        <Info>이너의 클래스</Info>
                        <Wrap>
                            <Tag>로맨스, 성장</Tag>
                            <Uploaded>1일전</Uploaded>
                        </Wrap>
                    </>
            }
        </CardStyle>
    );
}

export default Card;
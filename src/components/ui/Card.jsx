import styled from "styled-components";
import { Link } from 'react-router-dom';

const CardStyle = styled.div`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    border: 1px solid white;
    margin: 30px;
`;

const Poster = styled.img`
    width: 100%;
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
        <CardStyle width={props.width} height={props.height} >
            {
                props.onlyPoster === true
                    ? <Poster width={props.width} height={props.height} />
                    : <>
                        <Link to={`/watch/${props.id}`}>
                            <Poster src={props.thumbnail} />
                        </Link>
                        <Title>{props.title}</Title>
                        <Info>{props.director}</Info>
                        <Wrap>
                            <Tag>{props.tag}</Tag>
                            <Uploaded>{props.date}</Uploaded>
                        </Wrap>
                    </>
            }
        </CardStyle>
    );
}

export default Card;
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import moment from "moment";

const CardStyle = styled.div`
    width: 200px;
    height: 390px;
    margin: 30px;
`;

const Poster = styled.img`
    width: 100%;
    &:hover {
        cursor: pointer;
        opacity: 0.6;
    }
`;

const InfoWrap = styled.div`
    
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

    const loginState = useSelector((state) => state.login);
    const formatDate = moment(props.date).format('YYYY년 M월 D일 개봉');

    return (
        <CardStyle>
            <>
                {
                    loginState === true
                        ? <Link to={`/watch/${props.id}`}>
                            <Poster src={props.thumbnail} />
                        </Link>
                        : <Poster src={props.thumbnail} />
                }
                <InfoWrap>
                    <Title>{props.title}</Title>
                    <Info>{props.director}</Info>
                    <Wrap>
                        <Tag>{props.tag}</Tag>
                        <Uploaded>{formatDate}</Uploaded>
                    </Wrap>
                </InfoWrap>
            </>
        </CardStyle>
    );
}

export default Card;
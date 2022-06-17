import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import moment from "moment";
import { useMediaQuery } from "react-responsive";

const CardStyle = styled.div`
    width: 200px;
    height: 390px;
    margin: 30px;
    @media screen and (max-width:768px) {
        width: 100px;
        height: auto;
    }
`;

const Poster = styled.img`
    width: 100%;
    &:hover {
        cursor: pointer;
        opacity: 0.6;
    }
    @media screen and (max-width:768px) {
        border-radius: 15px;
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
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)',
    });

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
                {
                    isMobile
                        ? null
                        : <InfoWrap>
                            <Title>{props.title}</Title>
                            <Info>{props.director}</Info>
                            <Tag>{props.tag}</Tag>
                            {/* <Wrap>
                        <Uploaded>{formatDate}</Uploaded>
                    </Wrap> */}
                        </InfoWrap>
                }
            </>
        </CardStyle>
    );
}

export default Card;
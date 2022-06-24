import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useMediaQuery } from "react-responsive";
import { changeInfo } from "../../store";

const CardStyle = styled.div`
    width: 90%;
    height: 88%;
    margin: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width:768px) {
        display: block;
        margin: 0 auto 10px auto;
    }
`;

const Poster = styled.img`
    width: 100%;
    border-radius: 7px;
    opacity: 1;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
        transition: all 0.5s;
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

const Category = styled.p`
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
    const formatDate = moment(props.movie.date).format('YYYY년 M월 D일 개봉');
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)',
    });
    const dispatch = useDispatch();

    return (
        <CardStyle>
            <>
            {
                loginState
                ? <Poster src={props.movie.poster} onClick={()=>dispatch(changeInfo(props.movie.code))}/>
                : <Poster src={props.movie.poster} />
            }
                {
                    isMobile
                        ? null
                        : <InfoWrap>
                            <Title>{props.movie.title}</Title>
                            <Info>{props.movie.director}</Info>
                            <Category>{props.movie.category}</Category>
                        </InfoWrap>
                }
            </>
        </CardStyle>
    );
}

export default Card;
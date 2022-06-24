import { IconContext } from "react-icons/lib";
import { CgClose } from "react-icons/cg";
import { FaPlay } from "react-icons/fa";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { changeInfo } from "../../store";
import { Link } from "react-router-dom";

const Background = styled.div`
    width: 100%;
    height: 100%;
    top: -50px;
    background-image: url(${props => props.img});
    background-size: contain;
    background-repeat: no-repeat;
    position: fixed;
    z-index: 4;
`;

const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    top: 0px;
    backdrop-filter: blur(4px);
    border-radius: 15px;
    position: fixed;
    z-index: 5;
    overflow-y: auto;
`;

const Nav = styled.div`
    padding: 20px;
    display: flex;
    justify-content: end;
`;

const Poster = styled.img`
    width: 40%;
    position: fixed;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    z-index: 5;
`;

const Body = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 250px;
    border-radius: 20px 20px 0px 0px;
    background-color: #2b2b2b;
    color: white;
    text-align: center;
`;

const Head = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 60px;
    align-items: baseline;
    h2 {
        margin: 0;
        font-size: 32px;
        font-weight: 200;
    }
    p {
        font-size: 16px;
        color: grey;
        margin: 0;
        margin-left: 10px;
    }
`;

const Play = styled.button`
    width: 50%;
    height: 50px;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    background-color: white;
    color: black;
    border: none;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    padding-top: 12.5px;
    &:hover {
        cursor: pointer;
        opacity: 0.7;
        transition: all 0.5s;
    }
`;

function MobileModal(props) {
    const dispatch = useDispatch();
    const movieData = props.data;
    return (
        <Background img={movieData.poster}>
            <ModalContainer>
                <Nav>
                    <IconContext.Provider value={{ color: '#585858', size: '30px' }}>
                        <CgClose onClick={() => {
                            document.body.style.overflow = "unset"
                            dispatch(changeInfo(0))
                        }} />
                    </IconContext.Provider>
                </Nav>
                <Poster src={movieData.poster} alt="poster" />
                <Body>
                    <Head>
                        <h2>{movieData.title}</h2>
                        <p>{movieData.running_time}분</p>
                    </Head>
                    <p style={{ fontSize: '16px', color: 'grey', marginTop: '5px', marginBottom: '20px' }}>{movieData.director} 감독</p>
                    <p style={{ fontSize: '20px', marginTop: '5px', marginBottom: '0px' }}>{movieData.category}</p>
                    <p style={{ fontSize: '20px', color: 'grey', marginTop: '5px', marginBottom: '0px' }}>{movieData.tag}</p>
                    <span style={{ fontSize: '16px', color: 'grey', padding: '20px', display: 'inline-block' }}>{movieData.about}</span>
                    <Link style={{ textDecoration: 'none' }} to={`/watch/${movieData.code}`} onClick={() => {
                        document.body.style.overflow = "unset"
                        dispatch(changeInfo(0))
                    }}>
                        <Play>
                            <IconContext.Provider value={{ color: 'black', size: '20px' }} >
                                <FaPlay />
                                <h2 style={{ margin: '0 0 0 10px', height: '18px', lineHeight: '24px' }}>재생</h2>
                            </IconContext.Provider>
                        </Play>
                    </Link>
                </Body>
            </ModalContainer>
        </Background>
    );
}

export default MobileModal;
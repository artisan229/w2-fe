import { IconContext } from "react-icons/lib";
import { FaPlay } from "react-icons/fa";
import { CgClose } from "react-icons/cg"
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    position: fixed;
    z-index: 4;
`;

const ModalContainer = styled.div`
    width: 800px;
    height: 450px;
    margin-top: 60px;
    margin-bottom: 80px;
    margin-left: auto;
    margin-right: auto;
    background: #1a1a1a;
    border-radius: 8px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 30px;
    padding-right: 30px;
`;

const Nav = styled.div`
    display: flex;
    justify-content: end;
`;

const Section = styled.div`
    display: flex;
    justify-content: start;
    gap: 20px;
`;

const Left = styled.div`
    width: 33%;
`;

const Poster = styled.img`
    width: 93%;
    border-radius: 20px;
`;

const Play = styled.button`
    width: 93%;
    height: 9%;
    margin-top: 10px;
    background-color: white;
    color: black;
    border: none;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    padding: 6.5px;
    &:hover {
        cursor: pointer;
        opacity: 0.7;
        transition: all 0.5s;
    }
`;

const Right = styled.div`
    width: 65%;
    color: white;
`;

const Head = styled.div`
    display: flex;
    align-items: baseline;
    h2 {
        margin: 0;
        font-size: 48px;
        font-weight: 200;
    }
    p {
        font-size: 16px;
        color: grey;
        margin: 0;
        margin-left: 10px;
    }
`;

const Kakao = styled.img`

    padding: 10px;
`;

function Modal(props) {
    const loginState = useSelector(state => state.login);
    const movieData = props.data;
    const navigate = useNavigate();
    return (
        <Background>
            <ModalContainer>
                <Nav>
                    <IconContext.Provider value={{ color: '#585858', size: '30px' }}>
                        <CgClose style={{ cursor: 'pointer' }} onClick={() => {
                            document.body.style.overflow = "unset"
                            navigate('/');
                        }} />
                    </IconContext.Provider>
                </Nav>
                <Section>
                    <Left>
                        <Poster src={movieData.poster} alt="poster" />
                        {
                            loginState
                                ? <Link style={{ textDecoration: 'none' }} to={`/watch/${movieData.code}`} onClick={() => {
                                    document.body.style.overflow = "unset"
                                }}>
                                    <Play>
                                        <IconContext.Provider value={{ color: 'black', size: '20px' }} >
                                            <FaPlay />
                                        </IconContext.Provider>
                                        <h2 style={{ margin: '0 0 0 10px', height: '18px', lineHeight: '24px' }}>재생</h2>
                                    </Play>
                                </Link>
                                : <Link to={'/welcome'}>
                                    <Kakao src="kakao_login.png" alt="kakao_login"/>
                                </Link>
                        }
                    </Left>
                    <Right>
                        <Head>
                            <h2>{movieData.title}</h2>
                            <p>{movieData.running_time}분</p>
                        </Head>
                        <p style={{ fontSize: '20px', marginTop: '5px', marginBottom: '0px' }}>{movieData.category} | {movieData.tag}</p>
                        <p style={{ fontSize: '16px', color: 'grey', marginTop: '5px', marginBottom: '20px' }}>{movieData.director} 감독</p>
                        <span style={{ fontSize: '16px', color: 'grey' }}>{movieData.about}</span>
                    </Right>
                </Section>
            </ModalContainer>
        </Background >
    );
}

export default Modal;
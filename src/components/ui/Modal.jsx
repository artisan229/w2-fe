import { IconContext } from "react-icons/lib";
import { FaPlay } from "react-icons/fa";
import { CgClose } from "react-icons/cg"
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { changeInfo } from "../../store";

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
    background: #2b2b2b;
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

function Modal(props) {
    const dispatch = useDispatch();
    const movieData = props.data;
    return (
        <Background>
            <ModalContainer>
                <Nav>
                    <IconContext.Provider value={{ color: '#585858', size: '30px' }}>
                        <CgClose style={{ cursor: 'pointer' }} onClick={() => {
                            document.body.style.overflow = "unset"
                            dispatch(changeInfo(0))
                        }} />
                    </IconContext.Provider>
                </Nav>
                <Section>
                    <Left>
                        <Poster src={movieData.poster} alt="poster" />
                        <Play>
                            <IconContext.Provider value={{ color: 'black', size: '20px' }} >
                                <FaPlay />
                            </IconContext.Provider>
                            <h2 style={{margin: '0 0 0 10px', height: '18px', lineHeight: '24px'}}>재생</h2>
                        </Play>
                    </Left>
                    <Right>
                        <Head>
                            <h2>{movieData.title}</h2>
                            <p>9분</p>
                        </Head>
                        <p style={{ fontSize: '20px', marginTop: '5px', marginBottom: '0px' }}>{movieData.category} | 태그</p>
                        <p style={{ fontSize: '16px', color: 'grey', marginTop: '5px', marginBottom: '20px' }}>{movieData.director} 감독</p>
                        <span style={{ fontSize: '16px', color: 'grey' }}>{movieData.about}</span>
                    </Right>
                </Section>
            </ModalContainer>
        </Background>
    );
}

export default Modal;
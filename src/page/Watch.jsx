import styled from "styled-components";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PlayerContext } from "../provider/PlayerProvider";
import ReactPlayer from "react-player";
import '../components/watch.css';
import { IconContext } from "react-icons";
import { IoMdArrowBack } from "react-icons/io"
import { useState } from "react";

const WatchContainer = styled.div`
    background-color: black;
    display: flex;
`;

function Watch() {
    const url = useLocation();
    const context = useContext(PlayerContext);
    let temp = url.pathname.split('/');
    const movie_id = Number(temp[2]);
    const navigate = useNavigate();
    let time = null;
    const [arrowColor, setArrowColor] = useState('white');

    function changeArrowColor() {
        clearTimeout(time);
        setArrowColor('white');
        time = setTimeout(() => {
            setArrowColor('black');
        }, 3000);
    }

    return (
        <WatchContainer onMouseMove={changeArrowColor}>
            <IconContext.Provider value={{ color: arrowColor, size: '60px' }}>
                <IoMdArrowBack style={{ cursor: "pointer" }} onClick={() => navigate(-1)} />
            </IconContext.Provider>
            {
                context && context.map((src, idx) => {
                    return src.code === movie_id
                        ? <div key={idx} className="player-wrapper">
                            <ReactPlayer
                                config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                                className={"react-player"}
                                url={src.movie}
                                playing={true}
                                controls={true}
                                width='90vw'
                                height='90vh'
                            />
                        </div>
                        : null
                })
            }
        </WatchContainer>
    );
}

export default Watch;
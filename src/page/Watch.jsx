import styled from "styled-components";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { PlayerContext } from "../provider/PlayerProvider";

const WatchContainer = styled.div`
    overflow-y: hidden;
`;

const Player = styled.video`
    width: 100%;
`;

function Watch() {
    const url = useLocation();
    const context = useContext(PlayerContext);
    let temp = url.pathname.split('/');
    const movie_id = Number(temp[2]);
    return (
        <WatchContainer>
            {
                context && context.map((src, idx) => {
                    return src.code === movie_id
                        ? <Player src={src.movie} key={idx} autoPlay="play" controls controlsList="nodownload" />
                        : null
                })
            }
        </WatchContainer>
    );
}

export default Watch;
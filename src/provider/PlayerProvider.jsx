import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const PlayerContext = createContext()

function PlayerProvider(props) {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8001/api/movie")
            .then((res) => setMovie(res.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <PlayerContext.Provider value={movie} >
            {props.children}
        </PlayerContext.Provider >
    );
}

export default PlayerProvider;
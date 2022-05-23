import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const AppStateContext = createContext()

function AppStateProvider(props) {

    const [movie, setMovie] = useState([]);
    const [loginResult] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8001/api/movie")
            .then((res) => setMovie(res.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <AppStateContext.Provider value={[movie, loginResult]} >
            {props.children}
        </AppStateContext.Provider >
    );
}

export default AppStateProvider;
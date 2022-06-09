import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const BasicContext = createContext()

function BasicProvider(props) {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8001/api/movie")
            .then((res) => setMovie(res.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <BasicContext.Provider value={movie} >
            {props.children}
        </BasicContext.Provider >
    );
}

export default BasicProvider;
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const AppStateContext = createContext()

function AppStateProvider(props) {

    const [movie, setMovie] = useState();

    useEffect(() => {
        axios.get("http://localhost:8001/")
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <AppStateContext.Provider value={movie}>
            {props.children}
        </AppStateContext.Provider>
    );
}

export default AppStateProvider;
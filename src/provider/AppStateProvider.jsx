import React from "react";

const AppStateContext = React.createContext();

function AppStateProvider() {
    return (
        <AppStateContext.Provider>
            
        </AppStateContext.Provider>
    );
}

export default AppStateProvider;
import { createContext, useContext, useState } from "react";

const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const hello = 'hello'

    return <AppContext.Provider value={{ hello }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)
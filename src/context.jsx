import { createContext, useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const AppContext = createContext()

const url = `${import.meta.env.VITE_URL}?client_id=${import.meta.env.VITE_API_KEY}`

export const AppProvider = ({ children }) => {    
    const [searchTerm, setSearchTerm] = useState('office')

    const response = useQuery({
        queryKey: ['images', searchTerm],
        queryFn: async () => {
          const result = await axios.get(`${url}&query=${searchTerm}`)
    
          return result.data
        }
      })

    return <AppContext.Provider value={{ searchTerm, setSearchTerm, response }}>
        {children}
    </AppContext.Provider>
}
export default AppContext

export const useGlobalContext = () => useContext(AppContext)
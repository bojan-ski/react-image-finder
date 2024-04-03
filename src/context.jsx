import { createContext, useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const AppContext = createContext()

const url = `${import.meta.env.VITE_URL}?client_id=${import.meta.env.VITE_API_KEY}&per_page=12`

export const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [pageNumber, setPageNumber] = useState(1)
  const [totalNumberOfPages, setTotalNumberOfPages] = useState('')
  const [toggleModal, setToggleModal] = useState(false)

  const response = useQuery({
    queryKey: ['images', searchTerm, pageNumber],
    queryFn: async () => {
      const result = await axios.get(`${url}&page=${pageNumber}&query=${searchTerm}`)

      return result.data
    }
  })

  return <AppContext.Provider value={{ searchTerm, setSearchTerm, response, pageNumber, setPageNumber, totalNumberOfPages, setTotalNumberOfPages, toggleModal, setToggleModal }}>
    {children}
  </AppContext.Provider>
}
export default AppContext

export const useGlobalContext = () => useContext(AppContext)
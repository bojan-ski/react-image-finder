import { AppProvider } from "./context"
import ImgGallery from "./components/ImgGallery"
import ImgSearch from "./components/ImgSearch"
import Pagination from "./components/Pagination"

const App = () => {
  return (
    <AppProvider>     
        <>
          <ImgSearch />
          <ImgGallery />
          <Pagination />
        </>
    </AppProvider>
  )
}

export default App

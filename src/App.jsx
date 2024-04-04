import { AppProvider } from "./context"
import ImgGallery from "./components/ImgGallery"
import ImgSearch from "./components/ImgSearch"
import Pagination from "./components/Pagination"

const App = () => {
  return (
    <AppProvider>     
        <>
          <ImgSearch />
          
          <div className="container">
            <ImgGallery />
            <Pagination />
          </div>
        </>
    </AppProvider>
  )
}

export default App

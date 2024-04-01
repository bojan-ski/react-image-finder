import { AppProvider } from "./context"
import ImgGallery from "./components/ImgGallery"
import ImgSearch from "./components/ImgSearch"

const App = () => {
  return (
    <AppProvider>     
        <>
          <ImgSearch />
          <ImgGallery />
        </>
    </AppProvider>
  )
}

export default App

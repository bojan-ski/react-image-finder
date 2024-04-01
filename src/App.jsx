import { AppProvider } from "./context"
import ImgGallery from "./components/ImgGallery"
import ImgSearch from "./components/ImgSearch"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

const App = () => {
  return (
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <>
          <ImgSearch />
          <ImgGallery />
        </>
      </QueryClientProvider>
    </AppProvider>
  )
}

export default App

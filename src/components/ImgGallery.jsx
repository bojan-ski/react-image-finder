import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}&query=office`

const ImgGallery = () => {
  const response = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const result = await axios.get(url)
      
      return result.data
    }
  })
  // console.log(response);

  if(response.isError){
    console.log(response.error);

    return <div>
      <h4>There was an error</h4>
    </div>
  }

  if(response.isPending){
    return <div>
      <h4>Loading...</h4>
    </div>
  }

  const results = response.data.results

  if(results.length < 1){
    return <div>
      <h4>No Images Found</h4>
    </div>
  }

  return (
    <div>
      {results.map(imageData => {
        const {id, urls, alt_description} = imageData
        const url = urls.regular

        return <img key={id} src={url} alt={alt_description} />
      })}
    </div>
  )
}

export default ImgGallery
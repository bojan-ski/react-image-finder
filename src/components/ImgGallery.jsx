import { useGlobalContext } from "../context"

const ImgGallery = () => {
  const { response } = useGlobalContext()

  if (response.isError) {
    console.log(response.error);

    return <div>
      <h4>There was an error</h4>
    </div>
  }

  if (response.isPending) {
    return <div>
      <h4>Loading...</h4>
    </div>
  }

  const results = response.data.results

  if (results.length < 1) {
    return <div>
      <h4>No Images Found</h4>
    </div>
  }

  return (
    <div>
      {results.map(imageData => {
        const { id, urls, alt_description } = imageData
        const url = urls.regular

        return <img key={id} src={url} alt={alt_description} />
      })}
    </div>
  )
}

export default ImgGallery
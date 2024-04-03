import { useState } from "react";
import { useGlobalContext } from "../context"
import Modal from "./Modal";

const ImgGallery = () => {
  const { response, setTotalNumberOfPages, toggleModal, setToggleModal } = useGlobalContext()
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageData) => {
    setSelectedImage(imageData);
    setToggleModal(true);
  };

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
  setTotalNumberOfPages(response?.data?.total_pages);

  if (results.length < 1) {
    return <div>
      <h4>No Images Found</h4>
    </div>
  }

  return (
    <div>
      {results.map(imageData => {
        const { id, urls, alt_description } = imageData

        return (
          <div key={id} >
            <img src={urls.small} alt={alt_description} onClick={() => handleImageClick(imageData)}/>

            {toggleModal && selectedImage && (
              <Modal urlRegular={selectedImage.urls.regular} alt_description={selectedImage.alt_description}/>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default ImgGallery
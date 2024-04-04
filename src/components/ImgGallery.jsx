import { useState } from "react";
import { useGlobalContext } from "../context"
import Modal from "./Modal";

const ImgGallery = () => {
  const { response, searchTerm, setTotalNumberOfPages, toggleModal, setToggleModal } = useGlobalContext()
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageData) => {
    setSelectedImage(imageData);
    setToggleModal(true);
  };

  if (response.isError) {
    console.log(response.error);

    return <section className="section-gallery">
      <h4>There was an error</h4>
    </section>
  }

  if (response.isPending) {
    return <section className="section-gallery">
      <h4>Loading...</h4>
    </section>
  }

  const results = response?.data?.results
  setTotalNumberOfPages(response?.data?.total_pages);

  if (searchTerm && results.length === 0) {
    return <section className="section-gallery">
      <h4>No Images Found</h4>
    </section>
  }

  return (
    <div className="section-gallery">
      {results.map(imageData => {
        const { id, urls, alt_description } = imageData

        return (
          <div key={id} className="gallery-img">
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
import { IoIosClose } from "react-icons/io";
import { useGlobalContext } from "../context";

const Modal = ({ urlRegular, alt_description }) => {
    const {toggleModal, setToggleModal } = useGlobalContext()    

    return (
        <div id="myModal" className="modal" style={{display: toggleModal ? 'block' : 'none'}}>
            <div class="modal-content">

                <div className="modal-img">
                    <img src={urlRegular} alt={alt_description} />
                </div>

                <div className="modal-desc">
                    <span class="close" onClick={()=> setToggleModal(false)}>
                        <IoIosClose  />
                    </span>
                    <p>{alt_description}</p>
                </div>
            </div>
        </div>
    )
}

export default Modal
import React, { useState, useEffect } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { fetchDataFromApi } from "../../utils/Api";
import "./popUp.css";
import { Slide } from "react-slideshow-image";
import Slider from "../slider/Slider";
import { useNavigate } from "react-router-dom";

const PopUp = ({popupRocketData, modal, closePopup}) => {
 // const [modal, setModal] = useState(value);
  const [desc, setDesc] = useState("");
  const [image, SetImage] = useState("");
  const [photo, setPhoto] = useState(0);
  const [showphoto, setShowphoto] = useState('');
  const navigate =useNavigate();

  useEffect(() => {
    console.log("slid", popupRocketData)
 
  }, []);

  
  return (
    <div>
      <Modal size="xl" isOpen={modal} toggle={() => closePopup(!modal)}>
        <ModalHeader  className="modal-close-btn" toggle={() => closePopup(!modal) }>
          
            <nav className="option">
            <span>{popupRocketData.name}</span>
            <span>Overview</span>
            <span className="photo-hide" onClick={()=>{setPhoto(1)}}>Photo</span>
          </nav>
        </ModalHeader>
        {photo ?( <Slider popupRocketData={popupRocketData}/>) :(<ModalBody>
          
          <div className="detail">
            <div className="inner-box">
              <img src={popupRocketData.flickr_images[1]} alt="img" className="img-size"></img>
            </div>

            <div className="des-box">
              <div className="rocket-desc">DESCRIPTION</div>
              {popupRocketData.description}
            </div>
          </div>
        </ModalBody>)}
       
      </Modal>

     
    </div>
  );
};

export default PopUp;

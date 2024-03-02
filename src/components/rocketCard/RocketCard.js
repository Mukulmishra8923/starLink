import { useEffect, useState } from "react";
import "./rocketCard.css";
import { fetchDataFromApi } from "../../utils/Api";
import PopUp from "../popUp/PopUp";
import { useNavigate } from "react-router-dom";


const RocketCard = ({ url }) => {
  const [img1, setImg1] = useState();
  const [modal, setModal] = useState(false);
  const [popupRocketData, setPopupRocketData] = useState(null);
  const [rocketImages, setRocketImages] = useState(null);
  
  const [rocketData, setRocketData] = useState(null);
  const [name , setName]=useState('')
  const navigate =useNavigate();
  const [loadRocket, setLoadRocket] = useState('');


  const sliderPopup =(modal,data)=>{
    setPopupRocketData(data);
    setModal(modal)
  
  }
   const closePopup=(value)=>{
            setModal(value);
   }

  useEffect(() => {
    fetchDataFromApi(url).then((res) => {

      setLoadRocket('rocketData');
      
      let filteredData = res.map((item, index) => ({
        name: item.name,
        description: item.description,
        active: item.active,
        flickr_images: item.flickr_images
    }));
      filteredData = filteredData.slice(1);
      setRocketData(filteredData);
    
         });
  }, [modal, loadRocket]); 
  



  return (
       <div className="content-box rocket-box">
      <div className="row">
        {rocketData && rocketData.map((data, index) => (
          <div className="col-sm-4 rocket-img-box" key = {index} onClick={() => { sliderPopup(true, data) }}>
            <h4>{data.name}</h4>
            <div className="rocket-img-box">
            <img src={data.flickr_images[1]} className="rocket-img" alt="Rocket" />
            </div>

            {data.active?
            <div className='status active'>
              <span>Status</span>
              <p>Active</p>
              </div>
            :<div className='status development'>
              <span>Status</span>
              <p>In development</p>
              </div>}
            
          </div>
        ))}
    
   

      {modal && <PopUp popupRocketData= {popupRocketData} modal={modal} closePopup={closePopup} />}
    </div>
    </div>
  );
};

export default RocketCard;

import "./slider.css";
import "react-slideshow-image/dist/styles.css";
import { Fade, Zoom, Slide } from "react-slideshow-image";

const Slider = ({popupRocketData}) => {

  return (
    <div className="slid-container">
      <Fade>
         {popupRocketData.flickr_images.map((data, index) => {
          return (
            <div key={index}>
              <div
                className="slider"
                style={{ backgroundImage: `url(${data})` }}
              >
               
              </div>
            </div>
          );
        })} 
      </Fade>
    </div>
  );
};

export default Slider;

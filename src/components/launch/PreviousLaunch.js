import { fetchDataFromApi } from "../../utils/Api";
import { useState, useEffect } from "react";
import MiniCard from "../miniCard/MiniCard";

const PreviousLaunch = ({previousUrl, rocketUrl }) => {

  const headName = "Previous Launch";

  const [missionName, setMissionName] = useState("");
  const [rocket, setrocket] = useState("");
  const [flightNumber, setflightNumber] = useState("");
  const [time, settime] = useState("");
  const [site_id, setSite_id] = useState("");
  const [img, setImg] = useState("");
  const [wikipedia, setWikipedia] = useState(null);
  const [youtube, setYoutube] = useState(null);
  const [rocketId, setRocketId] = useState(null);
  const [rocketName, setRocketName] = useState('');
  const [launchpad, setLaunchpad] = useState(null);
  const [launchName, setLaunchName] = useState('');
  const [rocketLogo, setRocketLogo] = useState(null);
  const [reddit, setReddit] = useState(null);
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    fetchDataFromApi(previousUrl).then((res) => {
    
      setMissionName(res[186].name);
      setRocketId(res[186].rocket);
      setflightNumber(res[186].flight_number);
      setLaunchpad(res[186].launchpad);
      setRocketLogo(res[186].links.patch.small);
      setWikipedia(res[186].links.wikipedia);
      setYoutube(res[186].links.webcast);
      setReddit(res[186].links.reddit.campaign);
      setCrew(res[186].crew);
    
   
      // ------------small img link-------------------
      setImg(res[0].links.mission_patch_small);
      // TIME_FORMAT
      const launchDateUTC = new Date(res[0].date_utc);
      const options = {
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      const formattedTime = launchDateUTC.toLocaleString("en-US", options);
      settime(formattedTime);
    });
   
    fetchDataFromApi(rocketUrl + rocketId).then((res) => {
      setRocketName(res.name);
      
    });
  
    fetchDataFromApi(rocketUrl + rocketId).then((res) => {
      setRocketName(res.name);
      
    });
  
  }, [missionName]);

  return (
    <div className="content-box">
      <h4 className="launch-heading">{headName} </h4>
      <div className="content">
      <div className="row">
        <div className="col-6">
          <div className="heading">MISSION NAME</div>
          <div className="rec">{missionName}</div>
          <div className="rec">{site_id}</div>
          <div className="heading">ROCKET</div>
          <div className="rec">{rocketName}</div>
          <div className="heading">FLIGHT NUMBER</div>
          <div className="rec">{flightNumber}</div>
          <div className="heading">TIME(UTC)</div>
          <div className="rec">{time}</div>
          <div className="heading">LINKS</div>
          <div className="icon">
                     <a href={wikipedia}>
          <div className="child-icon">
              <i className="fa-brands fa-wikipedia-w"></i>
            </div>
            </a>
            <a href={youtube}>
            <div className="child-icon">
              <i className="fa-brands fa-square-youtube"></i>
            </div>
            </a>
            <a href={reddit}>
            <div className="child-icon">
              <i className="fa-brands fa-reddit"></i>
            </div>
            </a>
          </div>
        </div>

        <div className="col-6">
          <div className="heading">Rocket Logo</div>
          {/* ------------------mini card------------- */}

          <MiniCard img={rocketLogo} />
          <div className="heading">CREW</div>
          <div className="crew-icon">
          {crew.map((value, index) => {
          return (

              <i  key={index} className="fa-solid fa-person"></i>
            
          );
        })} 
          </div>
          <div className="rec"></div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousLaunch;


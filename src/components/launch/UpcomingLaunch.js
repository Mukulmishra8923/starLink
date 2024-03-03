import { fetchDataFromApi } from "../../utils/Api";
import { useState, useEffect } from "react";
import MiniCard from "../miniCard/MiniCard";
import fh_logo from '../../assets/fh_logo.jpg'

const UpcomingLaunch = ({upcomingUrl, rocketUrl, launchpadUrl  }) => {
  const headName = "Upcoming Launch"
  
  
  const [missionName, setMissionName] = useState("");

  const [flightNumber, setflightNumber] = useState("");
  const [time, settime] = useState("");
  const [site_id, setSite_id] = useState("");
  const [img, setImg] = useState("");
  const [wikipedia, setWikipedia] = useState(null);
  const [youtube, setYoutube] = useState(null);

  const [rocketId, setRocketId] = useState(null);
  const [rocketName, setRocketName] = useState('');
  const [launchpad, setLaunchpad] = useState(null);
  const [launchpadName, setLaunchpadName] = useState('');
  const [rocketLogo, setRocketLogo] = useState(null);
  const [reddit, setReddit] = useState(null);

  useEffect(() => {
    fetchDataFromApi(upcomingUrl).then((res) => {
    
      setMissionName(res[0].name);
      setRocketId(res[0].rocket);
      setflightNumber(res[0].flight_number);
      setLaunchpad(res[0].launchpad);
      setRocketLogo(res[0].links.patch.small);
      setWikipedia(res[0].links.wikipedia);
      setYoutube(res[0].links.webcast);
      setReddit(res[0].links.reddit.campaign);
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
    fetchDataFromApi(launchpadUrl + launchpad).then((res) => {
      setLaunchpadName(res.name);
      
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
          <div className="icon upcoming-icon">
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

          <MiniCard img={fh_logo} />
          <div className="heading">LAUNCHPAD</div>
          <div className="rec">{launchpadName}</div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingLaunch;


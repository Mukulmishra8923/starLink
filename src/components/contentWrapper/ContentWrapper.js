import "./contentWrapper.css";
import "../../style/style.css";
import { fetchDataFromApi } from "../../utils/Api";
import { useState, useEffect } from "react";
import MiniCard from "../miniCard/MiniCard";
import UpcomingLaunch from "../launch/UpcomingLaunch";

const ContentWrapper = () => {
  
  return (
    <div className="dashboard-page">
      <UpcomingLaunch />
    </div>
  );
};

export default ContentWrapper;

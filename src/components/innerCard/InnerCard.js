import './innerCard.css'
import { fetchDataFromApi } from '../../utils/Api'
import { useState,useEffect } from 'react'

const InnerCard = () => {


  useEffect(()=>{
    fetchDataFromApi(`/launchpads`)
    .then(res=>{
      
    })
  })

  return (
    <div className='contents'>
      <h4>Launch facilities</h4>
     <div className="contents-box outercard-box">
     {/* -------------------------------------  */}
     <div className="lower-data">
      <div>
        <h4>Cape Canaveral</h4>
        <div className="heading">LC-39A & SLC-40</div>
      </div>
      <div>
       <div className="heading">REGION</div>
       <div className="rec">Florida</div>
      </div>
      </div>
      {/* ------------------------------------------- */}

      <div className="lower-data">
        <div>
        <div className="heading">TEMP</div>
        <div className="rec">26°C</div>
        </div>
        <div>
        <div className="heading">WEATHER</div>
        <div className="rec">Clear</div>
        </div>
        <div>
        <div className="heading">WIND</div>
        <div className="rec">8 m/s </div>
        </div>
      </div>

     </div>
      </div>
  )
}

export default InnerCard
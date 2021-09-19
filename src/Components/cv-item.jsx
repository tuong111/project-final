import {
  Card
} from "@material-ui/core";

import React from "react";


export default function CvItem({cvInfo , getViewCVEvent, index , sendCvDatabyIndex}) {

  const sendOpentoCV = () => {
    getViewCVEvent(true)
    sendCvDatabyIndex(index)
  }
  
  return (
    
      <Card style = {{minHeight : '300px' , cursor : 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center'}} > 
      <div className = 'cv-item-title'>
      <h4>
            CV <br />
            {cvInfo.jobungtuyen}
          </h4>
          <img src="https://img.timviec.com.vn/2020/02/mau-cv-xin-viec-viet-tay1.jpg" alt="" />
          <div className="cv-item-btn">
      <button >Edit</button>
      <button onClick = {() => sendOpentoCV()}>View</button>
      </div>
      </div>
      </Card>
  );
}

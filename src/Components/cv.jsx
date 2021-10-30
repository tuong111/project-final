import { Card, Container, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import CvItem from "./cv-item";

import CVModal from './cv-modal';
import { useSelector } from 'react-redux';
import CvView from "./cv-view";
import CvEdit from './cv-edit';


export default function Cv(props) {
  const [openModal, setOpenModal] = useState(false)
  const [opentViewCV, setOpenViewCV] = useState(false)
  const [openEditCV , setEditCV] = useState(false)

  const cvLists = useSelector(state => state.cvList.cvList)
  const cvInfo = cvLists.listCV

  const [cvDatabyIndex , setCVDataByIndex] = useState('')
  const getCvDataByIndex = (value) => {
    setCVDataByIndex(value)
  }

  return (
    <div className="cv mt-20">
      {
        openModal ? <CVModal sendClosedModal={(value) => setOpenModal(value)} /> : ''
      }
       {
         opentViewCV ? <CvView cvData = {cvInfo[cvDatabyIndex]} sendClosedCVView = {(value) => setOpenViewCV(value)} index = {cvDatabyIndex}/> : ''
       } 
        
       {
        openEditCV ? <CvEdit cvData = {cvInfo[cvDatabyIndex]} sendClosedEditCV = {(value) => setEditCV(value)} index = {cvDatabyIndex}/> : ''
       }
       
       
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className="cv-title">
              <Typography variant="h6" component="h6">
                Danh sách các mẫu CV của bạn
              </Typography>
            </div>
          </Grid>
          <Grid item xs={3}>
            <Card style={{ minHeight: "300px", cursor: "pointer", display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              onClick={() => setOpenModal(true)}>
              <div className="cv-card">
                <h4>Thêm mới CV</h4>
                <img src="https://cdn3.iconfinder.com/data/icons/job-resume-5/66/6-512.png" alt="" />
              </div>
            </Card>
          </Grid>
          {
            cvInfo?.map((e ,index) => {
              return <Grid item xs={3} >
                <CvItem key = {e.id} cvInfo = {e} 
                getViewCVEvent = {(value) => setOpenViewCV(value)} 
                getEditCVEvent = {(value) => setEditCV(value)}
                index = {index} 
                sendCvDatabyIndex = {(value) => getCvDataByIndex(value)} />
              </Grid>
            })
          }
        </Grid>
      </Container>
    </div>
  );
}

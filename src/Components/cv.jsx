import { Card, Container, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import CvItem from "./cv-item";

import CVModal from './cv-modal';

export default function Cv(props) {
    const [openModal , setOpenModal] = useState(false)
  return (
    <div className="cv mt-20">
        {
            openModal ? <CVModal sendClosedModal = {(value)=> setOpenModal(value)}/> : ''
        }
    
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className="cv-title">
              <Typography variant="h6" component="h6">
                Danh sach cac mau CV
              </Typography>
            </div>
          </Grid>
          <Grid item xs={3}>
            <Card style={{ minHeight: "300px", cursor: "pointer" , display : 'flex', justifyContent : 'center', alignItems : 'center'}}
            onClick = {() => setOpenModal(true)}>
                  <div className="cv-card">
                    <h4>Add New CV</h4>
                    <img src="https://cdn3.iconfinder.com/data/icons/job-resume-5/66/6-512.png" alt="" />
                  </div>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <CvItem />
          </Grid>
          <Grid item xs={3}>
            <CvItem />
          </Grid>
          <Grid item xs={3}>
            <CvItem />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

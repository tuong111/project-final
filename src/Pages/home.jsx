import React, { useEffect } from "react";
import Header from "../Components/header";
import {  Button } from "@material-ui/core";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import { useHistory } from 'react-router-dom';
import swal from "sweetalert";
import { useDispatch } from 'react-redux';
import jobServices from '../Services/getjobListAPI';
import { getJob } from "../actions/joblist";
import JobCarousel from "../Components/job-carousel";




export default function Home(props) {
  const dispatch = useDispatch()
  useEffect(() => {
    jobServices.getJoblist()
      .then(
        (res) => {
          dispatch(getJob(res))
        }
      )
  }, [dispatch]);

  


  const history = useHistory()
  const btnCreateCV = () => {
    swal("Ban muon tao CV ?", {
      buttons: {
        cancel: "Cancel!",
        catch: {
          text: "Go to CV PAGE",
          value: "catch"
        },
      },
    })
      .then((value) => {
        switch (value) {

          case "defeat":
            break;

          case "catch":
            history.push('/candidate')
            break;

          default:
        }
      });
  }
  return (
    <div className="home">
      <div className="home-container">
      <Header userID={localStorage.getItem("id")} />
      <div className="hero">
        <div className="hero-button">
          <Button variant="outlined" style={{ width: '250px', height: '70px' }} color="primary" onClick={() => btnCreateCV()}>
            <NoteAddIcon fontSize='large' /> <span>CREATE CV</span>
          </Button>
        </div>
      </div>
      {/* <Container>
      <Grid container spacing={3}>
        
      <Grid item xs={12}>DANH SACH CAC HOT JOB</Grid>
      
      {
          jobList?.map(
            (item , index) => {
              return (
                <Grid item xs={3} >
                  <HotJobItem key = {index}/>
              </Grid>
              )
            }
          )
        }
      </Grid>
      </Container> */}
      <JobCarousel/> 
      </div>
      
    </div>
  );
}

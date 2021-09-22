import React, { useEffect, useState } from "react";
import Header from "../Components/header";
import {  Button } from "@material-ui/core";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import { useHistory } from 'react-router-dom';
import swal from "sweetalert";
import { useDispatch } from 'react-redux';
import jobServices from '../Services/getjobListAPI';
import { getJob } from "../actions/joblist";
import JobCarousel from "../Components/job-carousel";
import Aboutus from "../Components/aboutus";
import CVServices from './../Services/getCvListAPI';
import userServices from './../Services/getUsersAPI';




export default function Home(props) {
  const [listCV, setListCV] = useState([])
  const [listuser , setListUser] = useState([])
  const [joblist , setjobList] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    jobServices.getJoblist()
      .then(
        (res) => {
          setjobList(res)
          dispatch(getJob(res))
        }
      )
    CVServices.getCVlist()
    .then(
      (res) => {
        setListCV(res)
      }
    )
    userServices.getUserInfo()
    .then(
      (res) => setListUser(res)
    )
  }, [dispatch]);
// Lay all CV
  let newListCV = [...listCV]
  let countArr = []
  newListCV.forEach(
    e => countArr.push(e.listCV)
  )
  let sumCV = 0
  countArr.forEach(
    e => sumCV = sumCV + e.length
  )



  

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
      <JobCarousel/> 
      <Aboutus sumCV = {sumCV} sumUsers = {listuser.length} sumJobs = {joblist.length}/>
      </div>
      
    </div>
  );
}

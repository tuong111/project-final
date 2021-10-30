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
import JobPart from "../Components/job-part";
import Footer from './../Components/footer';




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
// sort theo tung nganh nghe
  let newJobList = [...joblist]
  let ITjob = []
  newJobList.forEach(
    (e) => {
      e.nganhnghe === 1 ? ITjob.push(e) : ITjob.push()
    }
  )
  let Salerjob = []
  newJobList.forEach(
    (e) => {
      e.nganhnghe === 2 ? Salerjob.push(e) : Salerjob.push()
    }
  )
  let Ecomjob = []
  newJobList.forEach(
    (e) => {
      e.nganhnghe === 3 ? Ecomjob.push(e) : Ecomjob.push()
    }
  )
  




  

  const history = useHistory()
  
  const btnCreateCV = () => {  
      swal("Bạn muốn tạo CV ?", {
        buttons: {
          cancel: "Hủy!",
          catch: {
            text: "Đến trang Quản lý CV",
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
            <NoteAddIcon fontSize='large' /> <span>TẠO CV</span>
          </Button>
        </div>
      </div>
      <JobCarousel/>
      <JobPart ITjob = {ITjob.length} Salerjob = {Salerjob.length} Ecomjob = {Ecomjob.length}/> 
      <Aboutus sumCV = {sumCV} sumUsers = {listuser.length} sumJobs = {joblist.length}/>
      </div>
      <Footer/>
    </div>
    
  );
}

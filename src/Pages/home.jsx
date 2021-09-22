import React, { useEffect } from "react";
import Header from "../Components/header";
import { Button, Card } from "@material-ui/core";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import { useHistory } from 'react-router-dom';
import swal from "sweetalert";
import { useDispatch } from 'react-redux';
import jobServices from '../Services/getjobListAPI';
import { getJob } from "../actions/joblist";
import { useSelector } from 'react-redux';
import Hotjobslider from '../Components/hotJobSlider';



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
  
  const jobList = useSelector(state => state.jobList.jobList)


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
      <Header userID={localStorage.getItem("id")} />
      <div className="hero">
        <div className="hero-button">
        <Button variant="outlined" style = {{width : '250px', height : '70px'}} color = "primary" onClick = {() => btnCreateCV()}>
          <NoteAddIcon fontSize= 'large'/> <span>CREATE CV</span>
        </Button>
        </div>
      </div>
      <Hotjobslider/>
    </div>
  );
}

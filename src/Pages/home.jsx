import React from "react";
import Header from "../Components/header";
import { Button } from "@material-ui/core";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import { useHistory } from 'react-router-dom';
import swal from "sweetalert";

export default function Home(props) {
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
    </div>
  );
}

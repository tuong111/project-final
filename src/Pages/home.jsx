import React from "react";
import Header from "../Components/header";
import { Button } from "@material-ui/core";
import NoteAddIcon from '@material-ui/icons/NoteAdd';

export default function Home(props) {
  return (
    <div className="home">
      <Header userID={localStorage.getItem("id")} />
      <div className="hero">
        <div className="hero-button">
        <Button variant="outlined" style = {{width : '250px', height : '70px'}} color = "primary" >
          <NoteAddIcon fontSize= 'large'/> <span>CREATE CV</span>
        </Button>
        </div>
      </div>
    </div>
  );
}

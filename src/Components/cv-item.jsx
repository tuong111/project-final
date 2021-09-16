import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import React from "react";

export default function CvItem(props) {
  return (
    <>
      <Card style = {{minHeight : '300px' , cursor : 'pointer'}}> 
        <CardActionArea >
            <CardMedia>
                
            </CardMedia>
        </CardActionArea>
      </Card>
    </>
  );
}

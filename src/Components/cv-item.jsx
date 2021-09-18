import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";

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

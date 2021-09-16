import React from "react";
import { Button, Container } from "@material-ui/core";

export default function CvModal({sendClosedModal}) {
    const handleCloseModal = (value) => {
        sendClosedModal(value)
        console.log(value)
    }
    
  return (
    <div className="cv-modal">
      <Container>
        <Button variant="outlined" color="error" >
          CLose
        </Button>
      </Container>
    </div>
  );
}

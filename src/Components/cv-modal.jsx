import React from "react";
import { Button, Container, Grid } from "@material-ui/core";
import { useSelector } from 'react-redux';

export default function CvModal({sendClosedModal}) {
    const handleCloseModal = (value) => {
        sendClosedModal(false)
        // value.stopPropagation();
    }
    const userData = useSelector(state => state.user.user)
    const userDetail = useSelector(state => state.detailInfo.detailInfo)

  return (
    <div className="cv-modal">
      <Container style = {{position : 'relative'}}>
        <div className="cv-modal-container">
        <div className="cv-modal-header mt-20">
          <span className="cv-modal-tenuv">
            {`${userData['first name']} ${userData['last name']}`}
          </span>
          <p className="cv-modal-job">
            <input type="text"  placeholder= 'Chuc danh ung tuyen'/>
          </p>
          <div className="cv-modal-img">
            <img src={userData.img} alt="" />
          </div>
        </div>
        <div className="cv-modal-content mt10">
          <Grid container spacing = {3} >
            <Grid item xs = {12}>
              <Grid item xs = {6}>
                <span>MUC TIEU NGHE NGHIEP :</span><br />
                <textarea name="" id="" cols="75" rows="2"></textarea>
              </Grid>
              <Grid container xs = {12}>
                <Grid  item xs = {4}>
                  Gioi tinh : {userDetail.gioitinh === 1 ? 'Nam' : userDetail.gioitinh === 2 ? 'Nu' : 'Khac'}
                </Grid>
                <Grid item xs = {4}>
                  Dien thoai : {userDetail.phone}
                </Grid>
                <Grid item xs = {4}>
                  
                </Grid>
                <Grid item xs = {4}>
                Ngay sinh : {userDetail.dob}
                  </Grid>
                  <Grid item xs = {4}>
                Email : {userData.email}
                  </Grid>
                  <Grid item xs = {4}>
                Quoc tich : {userDetail.quoctich}
                  </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        </div>
        <div className="cv-modal-btn">
        <Button variant="outlined" color="secondary" onClick = {(e)=> handleCloseModal(e)} >
          CLose
        </Button>
        <Button variant="outlined" color="primary" onClick = {()=> console.log('Save CV')} >
          Save CV
        </Button>
        </div>
      </Container>
    </div>
  );
}

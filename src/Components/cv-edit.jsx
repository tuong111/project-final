import { Button } from '@material-ui/core';
import React from 'react'
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Container } from '@material-ui/core';

export default function CvEdit({cvData}) {
    
    const userData = useSelector(state => state.user.user)
    const userDetail = useSelector(state => state.detailInfo.detailInfo)
  return (
    <div className="cv-modal">
      <Container style = {{position : 'relative', overflow : ''}}>
        <div className="cv-modal-container" id = "cvcontent">
        <div className="cv-modal-header mt-20">
          <span className="cv-modal-tenuv">
            {`${userData['first name']} ${userData['last name']}`}
          </span>
          <p className="cv-modal-job">
            <h3>{cvData.jobungtuyen}</h3>
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
                <p>{cvData.muctieu}</p>
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
        <div className="cv-modal-view-info mt-20">
          <Grid container spacing = {3}>
              <Grid item xs = {6}>
                  <h4>HOC VAN :</h4>
                  <ul>
                    <li>{cvData.hocvan}</li>
                  </ul>
              </Grid>
              <Grid item xs = {6}>
                  <h4>KY NANG :</h4>
                  <ul>
                    <li>{cvData.skills}</li>
                  </ul>
              </Grid>
              <Grid item xs = {6}>
                  <h4>CHUNG CHI :</h4>
                  <ul>
                    <li>{cvData.chungchi}</li>
                  </ul>
              </Grid>
              <Grid item xs = {6}>
                  <h4>KINH NGHIEM :</h4>
                  <ul>
                    <li>{cvData.congtycu}</li>
                  </ul>
              </Grid>
              <Grid item xs = {6}>
                  <h4>TIENG ANH :</h4>
                  <ul>
                    <li className = 'cv-modal-view-english'>
                        <Grid container spacing = {3}>
                          <Grid item xs = {4}>
                            NGHE :
                          </Grid>
                          <Grid item xs = {8}>
                            <input type="range" value = '6' max = '10'/>
                            </Grid>
                        </Grid>
                    </li>
                    <li className = 'cv-modal-view-english'>
                        <Grid container spacing = {3}>
                          <Grid item xs = {4}>
                            NOI :
                          </Grid>
                          <Grid item xs = {8}>
                            <input type="range" value = '6' max = '10'/>
                            </Grid>
                        </Grid>
                    </li>
                    <li className = 'cv-modal-view-english'>
                        <Grid container spacing = {3}>
                          <Grid item xs = {4}>
                            DOC :
                          </Grid>
                          <Grid item xs = {8}>
                            <input type="range" value = '6' max = '10'/>
                            </Grid>
                        </Grid>
                    </li>
                    <li className = 'cv-modal-view-english'>
                        <Grid container spacing = {3}>
                          <Grid item xs = {4}>
                            VIET :
                          </Grid>
                          <Grid item xs = {8}>
                            <input type="range" value = '6' max = '10'/>
                            </Grid>
                        </Grid>
                    </li>
                  </ul>
              </Grid>
              <Grid item xs = {6}>
                  <h4>SO THICH :</h4>
                  <ul>
                    <li>So thich 1</li>
                  </ul>
              </Grid>
          </Grid>
        </div>
        </div>
        <div className="cv-modal-btn">
        <Button variant="outlined" color="secondary"  >
          CLose
        </Button>
        <Button variant="outlined" color="primary"  >
          Save CV
        </Button>
        </div>
      </Container>
    </div>
  );
}

import React, { useState } from "react";
import { Button, Container, Grid } from "@material-ui/core";
import { useSelector } from 'react-redux';
import  swal  from 'sweetalert';
import { useDispatch } from 'react-redux';
import { getCVID } from './../actions/cvlist';
import CVServices from "../Services/getCvListAPI";


export default function CvModal({sendClosedModal}) {
    const handleCloseModal = (value) => {
        sendClosedModal(false)
        // value.stopPropagation();
    }

    const dispatch = useDispatch()
    const cvList = useSelector(state => state.cvList.cvList)
    const cvInfo = cvList.listCV

    const userData = useSelector(state => state.user.user)
    const userDetail = useSelector(state => state.detailInfo.detailInfo)
    const [chucdanhungtuyen, setCDUT] = useState('')
    const [muctieu , setMuctieu] = useState('')
    const [hocvan , setHocvan] = useState('')
    const [skills, setSkills] = useState('')
    const [chungchi, setChungchi] = useState('')
    const [kinhnghiem , setKinhnghiem] = useState('')
    const [listen , setListen] = useState('')
    const [speaking , setSpeaking] = useState('')
    const [reading , setReading] = useState('')
    const [writing , setWriting] = useState('')
    const [sothich , setSothich] = useState('')
    
    const SaveCV = () => {

      swal("Ban co muon Luu CV ?", {
        buttons: {
          cancel: "Cancel!",
          OK: true,
        },
      })
      .then((value) => {
        switch (value) {
          
          case "OK":
            dispatch(getCVID({
              ...cvList,
                listCV : [...cvInfo, {
                  jobungtuyen : chucdanhungtuyen,
                  muctieu : muctieu,
                  hocvan : hocvan,
                  skills : skills,
                  chungchi : chungchi,
                  congtycu : kinhnghiem,
                  listen : listen,
                  speaking : speaking,
                  reading : reading,
                  writing : writing,
                  sothich : sothich
                }]
            }))
            CVServices.editCVByID(localStorage.getItem('id'), {
              user_id : cvList.id,
              listCV : [...cvInfo, {
                jobungtuyen : chucdanhungtuyen,
                muctieu : muctieu,
                hocvan : hocvan,
                skills : skills,
                chungchi : chungchi,
                congtycu : kinhnghiem,
                listen : listen,
                speaking : speaking,
                reading : reading,
                writing : writing,
                sothich : sothich
              }]
            })
            swal("Tao CV thanh cong !!!");
            sendClosedModal(false)
            break;

          default:
            swal("Huy Luu CV");
        }
      });

    }
  return (
    <div className="cv-modal">
      <Container style = {{position : 'relative', overflow : ''}}>
        <div className="cv-modal-container">
        <div className="cv-modal-header mt-20">
          <span className="cv-modal-tenuv">
            {`${userData['first name']} ${userData['last name']}`}
          </span>
          <p className="cv-modal-job">
            <input type="text"  placeholder= 'Chuc danh ung tuyen' onChange = {(e) => setCDUT(e.target.value)}/>
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
                <textarea name="" id="" cols="75" rows="2" onChange = {(e) => setMuctieu(e.target.value)}></textarea>
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
          <div className="cv-modal-view-info mt-20">
          <Grid container spacing = {3}>
              <Grid item xs = {6}>
                  <h4>HOC VAN :</h4>
                  <ul>
                    <li><input type="text" onChange = {(e) => setHocvan(e.target.value)}/></li>
                  </ul>
              </Grid>
              <Grid item xs = {6}>
                  <h4>KY NANG :</h4>
                  <ul>
                    <li><input type="text" onChange = {(e) => setSkills(e.target.value)}/></li>
                  </ul>
              </Grid>
              <Grid item xs = {6}>
                  <h4>CHUNG CHI :</h4>
                  <ul>
                    <li><input type="text"  onChange = {(e) => setChungchi(e.target.value)}/></li>
                  </ul>
              </Grid>
              <Grid item xs = {6}>
                  <h4>KINH NGHIEM :</h4>
                  <ul>
                    <li><input type="text" onChange = {(e) => setKinhnghiem(e.target.value)} /></li>
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
                            <input type="range"  max = '10' onChange = {(e) => setListen(e.target.value)}/>
                            </Grid>
                        </Grid>
                    </li>
                    <li className = 'cv-modal-view-english'>
                        <Grid container spacing = {3}>
                          <Grid item xs = {4}>
                            NOI :
                          </Grid>
                          <Grid item xs = {8}>
                            <input type="range"  max = '10' onChange = {(e) => setSpeaking(e.target.value)}/>
                            </Grid>
                        </Grid>
                    </li>
                    <li className = 'cv-modal-view-english'>
                        <Grid container spacing = {3}>
                          <Grid item xs = {4}>
                            DOC :
                          </Grid>
                          <Grid item xs = {8}>
                            <input type="range"  max = '10' onChange = {(e) => setReading(e.target.value)}/>
                            </Grid>
                        </Grid>
                    </li>
                    <li className = 'cv-modal-view-english'>
                        <Grid container spacing = {3}>
                          <Grid item xs = {4}>
                            VIET :
                          </Grid>
                          <Grid item xs = {8}>
                            <input type="range"  max = '10' onChange = {(e) => setWriting(e.target.value)}/>
                            </Grid>
                        </Grid>
                    </li>
                  </ul>
              </Grid>
              <Grid item xs = {6}>
                  <h4>SO THICH :</h4>
                  <ul>
                    <li><input type="text"  onChange = {(e)=> setSothich(e.target.value)}/></li>
                  </ul>
              </Grid>
          </Grid>
        </div>
        </div>
        </div>
        <div className="cv-modal-btn">
        <Button variant="outlined" color="secondary" onClick = {(e)=> handleCloseModal(e)} >
          CLose
        </Button>
        <Button variant="outlined" color="primary" onClick = {()=> SaveCV()} >
          Save CV
        </Button>
        </div>
      </Container>
    </div>
  );
}

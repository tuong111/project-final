import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Container } from '@material-ui/core';
import  swal  from 'sweetalert';
import CVServices from './../Services/getCvListAPI';
import saveicon from '../img/saveicon.png'
import closeicon from '../img/closeicon.png'

export default function CvEdit({cvData, sendClosedEditCV , index}) {
    
    const userData = useSelector(state => state.user.user)
    const userDetail = useSelector(state => state.detailInfo.detailInfo)
    const cvList = useSelector(state => state.cvList.cvList)
    const cvArray = cvList.listCV



    // set State các sự kiện onChange để get value :
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
    
    let push_CDUT = chucdanhungtuyen === '' ? cvData.jobungtuyen : chucdanhungtuyen
    let push_muctieu = muctieu === '' ? cvData.muctieu : muctieu
    let push_hocvan = hocvan === '' ? cvData.hocvan : hocvan
    let push_skills = skills ==='' ? cvData.skills : skills
    let push_chungchi = chungchi === '' ? cvData.chungchi : chungchi
    let push_kinhnghiem = kinhnghiem ==='' ? cvData.congtycu : kinhnghiem
    let push_listen = listen === '' ? cvData.listen : listen
    let push_speaking = speaking === '' ? cvData.speaking : speaking
    let push_reading = reading ==='' ? cvData.speaking : speaking
    let push_writing = writing === '' ? cvData.writing : writing
    let push_sothich = sothich ==='' ? cvData.sothich : sothich  

   

    const handleCloseEditCV = (value) => {
      sendClosedEditCV(false)
    }

    const UpdateCV = () => {
      swal("Ban co muon Cap nhat lai CV ?", {
        buttons: {
          cancel: "Cancel!",
          OK: true,
        },
      })
      .then((value) => {
        switch (value) {
          
          case "OK":
            cvArray.splice(index, 1 , {
              jobungtuyen : push_CDUT,
              muctieu : push_muctieu,
              hocvan : push_hocvan,
              skills : push_skills,
              chungchi : push_chungchi,
              congtycu : push_kinhnghiem,
              listen : push_listen,
              speaking : push_speaking,
              reading : push_reading,
              writing : push_writing,
              sothich : push_sothich
            })
            
            CVServices.editCVByID(localStorage.getItem('id'), {
              ...cvList,
              listCV : [...cvArray]
            })
            swal("Cap nhat CV thanh!", {
              icon: "success",
            });
            sendClosedEditCV(false)
            break;

          default:
            swal("Huy Cap nhat CV",{
              icon : 'info'
            });
        }
      });

    }
  return (
    <div className="cv-modal">
      <Container style = {{position : 'relative', overflow : ''}}>
        <div className="cv-modal-container" id = "cvcontent">
        <div className="cv-modal-header mt-20">
          <span className="cv-modal-tenuv">
            {`${userData['first name']} ${userData['last name']}`}
          </span>
          <p className="cv-modal-job">
            <input type="text" defaultValue = {cvData.jobungtuyen} onChange = {(e) => setCDUT(e.target.value)}/>
          </p>
          <div className="cv-modal-img">
            <img src={userData.img} alt="" />
          </div>
        </div>
        <div className="cv-modal-content mt10">
          <Grid container spacing = {3} >
            <Grid  xs = {12}>
              <Grid item xs = {6}>
                <span>MUC TIEU :</span><br />
                <textarea name="" id="" cols="75" rows="2" defaultValue = {cvData.muctieu} onChange = {(e) => setMuctieu(e.target.value)}></textarea>
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
                    <li><input type="text" defaultValue = {cvData.hocvan} onChange = {(e)=> setHocvan(e.target.value)}/></li>
                  </ul>
              </Grid>
              <Grid item xs = {6}>
                  <h4>KY NANG :</h4>
                  <ul>
                    <li><input type="text" defaultValue = {cvData.skills} onChange = {(e)=> setSkills(e.target.value)}/></li>
                  </ul>
              </Grid>
              <Grid item xs = {6}>
                  <h4>CHUNG CHI :</h4>
                  <ul>
                    <li><input type="text" defaultValue = {cvData.chungchi} onChange = {(e)=> setChungchi(e.target.value)}/></li>
                  </ul>
              </Grid>
              <Grid item xs = {6}>
                  <h4>KINH NGHIEM :</h4>
                  <ul>
                    <li><input type="text" defaultValue = {cvData.congtycu} onChange = {(e)=> setKinhnghiem(e.target.value)}/></li>
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
                            <input type="range" defaultValue = {cvData.listen} max = '10' onChange = {(e)=> setListen(e.target.value)}/>
                            </Grid>
                        </Grid>
                    </li>
                    <li className = 'cv-modal-view-english'>
                        <Grid container spacing = {3}>
                          <Grid item xs = {4}>
                            NOI :
                          </Grid>
                          <Grid item xs = {8}>
                            <input type="range" defaultValue = {cvData.speaking} max = '10' onChange = {(e) => setSpeaking(e.target.value)}/>
                            </Grid>
                        </Grid>
                    </li>
                    <li className = 'cv-modal-view-english'>
                        <Grid container spacing = {3}>
                          <Grid item xs = {4}>
                            DOC :
                          </Grid>
                          <Grid item xs = {8}>
                            <input type="range" defaultValue = {cvData.reading} max = '10' onChange = {(e) => setReading(e.target.value)}/>
                            </Grid>
                        </Grid>
                    </li>
                    <li className = 'cv-modal-view-english'>
                        <Grid container spacing = {3}>
                          <Grid item xs = {4}>
                            VIET :
                          </Grid>
                          <Grid item xs = {8}>
                            <input type="range" defaultValue = {cvData.writing} max = '10' onChange = {(e)=> setWriting(e.target.value)}/>
                            </Grid>
                        </Grid>
                    </li>
                  </ul>
              </Grid>
              <Grid item xs = {6}>
                  <h4>SO THICH :</h4>
                  <ul>
                    <li><input type="text"  defaultValue = {cvData.sothich} onChange= {(e) => setSothich(e.target.value)}/></li>
                  </ul>
              </Grid>
          </Grid>
        </div>
        </div>
        </div>
        <div className="cv-modal-btn">
        <Button variant="outlined" color="secondary"  onClick = {(e)=> handleCloseEditCV(e)}>
        <img src={closeicon} style = {{width : '25px'}} alt="" />CLose
        </Button>
        <Button variant="outlined" color="primary"  onClick = {()=> UpdateCV()}>
        <img src={saveicon} style = {{width : '25px'}} alt="" /> Update
        </Button>
        </div>
      </Container>
    </div>
  );
}

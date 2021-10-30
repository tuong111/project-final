import React, { useState } from "react";
import { Button, Container, Grid } from "@material-ui/core";
import { useSelector } from 'react-redux';
import  swal  from 'sweetalert';
import { useDispatch } from 'react-redux';
import { getCVID } from './../actions/cvlist';
import CVServices from "../Services/getCvListAPI";
import saveicon from '../img/saveicon.png'
import closeicon from '../img/closeicon.png'
import { useHistory } from 'react-router-dom';



export default function CvModal({sendClosedModal}) {
    
    const handleCloseModal = (value) => {
        sendClosedModal(false)
        
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

    const history = useHistory()
    
    const SaveCV = () => {
      if (localStorage.getItem('isLogin')){
        swal("Bạn có muốn Lưu CV ?", {
          buttons: {
            cancel: "Hủy!",
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
              swal("Tạo CV thành công!", {
                icon: "success",
              });
              sendClosedModal(false)
              break;
  
            default:
              swal("Hủy Lưu CV");
          }
        });
      }else {
        swal("Bạn phải đăng nhập để thực hiện thao tác này !", {
          icon: "info",
          buttons: {
            cancel: "Hủy!",
            catch: {
              text: "Đến trang đăng nhập",
              value: "catch"
            },
          },
        })
          .then((value) => {
            switch (value) {
    
              case "defeat":
                break;
    
              case "catch":
                history.push('/signin')
                break;
    
              default:
            }
          });
      }

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
            <input type="text"  placeholder= 'Chức danh ứng tuyển' onChange = {(e) => setCDUT(e.target.value)}/>
          </p>
          <div className="cv-modal-img">
            <img src={userData.img} alt="" />
          </div>
        </div>
        <div className="cv-modal-content mt10">
          <Grid container spacing = {3} >
            <Grid item xs = {12}>
              <Grid item xs = {6}>
                <span>MỤC TIÊU NGHỀ NGHIỆP :</span><br />
                <textarea name="" id="" cols="75" rows="2" onChange = {(e) => setMuctieu(e.target.value)}></textarea>
              </Grid>
              <Grid container xs = {12}>
                <Grid  item xs = {4}>
                  Giới tính : {userDetail.gioitinh === 1 ? 'Nam' : userDetail.gioitinh === 2 ? 'Nữ' : 'Khác'}
                </Grid>
                <Grid item xs = {4}>
                  Điện thoại : {userDetail.phone}
                </Grid>
                <Grid item xs = {4}>
                  
                </Grid>
                <Grid item xs = {4}>
                Ngày sinh : {userDetail.dob}
                  </Grid>
                  <Grid item xs = {4}>
                Email : {userData.email}
                  </Grid>
                  <Grid item xs = {4}>
                Quốc tịch : {userDetail.quoctich}
                  </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div className="cv-modal-view-info mt-20">
          <Grid container spacing = {3}>
              <Grid item xs = {6}>
                  <h4>HỌC VẤN :</h4>
                  <ul>
                    <li><input type="text" onChange = {(e) => setHocvan(e.target.value)}/></li>
                  </ul>
              </Grid>
              <Grid item xs = {6}>
                  <h4>KỸ NĂNG :</h4>
                  <ul>
                    <li><input type="text" onChange = {(e) => setSkills(e.target.value)}/></li>
                  </ul>
              </Grid>
              <Grid item xs = {6}>
                  <h4>CHỨNG CHỈ :</h4>
                  <ul>
                    <li><input type="text"  onChange = {(e) => setChungchi(e.target.value)}/></li>
                  </ul>
              </Grid>
              <Grid item xs = {6}>
                  <h4>KINH NGHIỆM :</h4>
                  <ul>
                    <li><input type="text" onChange = {(e) => setKinhnghiem(e.target.value)} /></li>
                  </ul>
              </Grid>
              <Grid item xs = {6}>
                  <h4>TIẾNG ANH :</h4>
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
                            NÓI :
                          </Grid>
                          <Grid item xs = {8}>
                            <input type="range"  max = '10' onChange = {(e) => setSpeaking(e.target.value)}/>
                            </Grid>
                        </Grid>
                    </li>
                    <li className = 'cv-modal-view-english'>
                        <Grid container spacing = {3}>
                          <Grid item xs = {4}>
                            ĐỌC :
                          </Grid>
                          <Grid item xs = {8}>
                            <input type="range"  max = '10' onChange = {(e) => setReading(e.target.value)}/>
                            </Grid>
                        </Grid>
                    </li>
                    <li className = 'cv-modal-view-english'>
                        <Grid container spacing = {3}>
                          <Grid item xs = {4}>
                            VIẾT :
                          </Grid>
                          <Grid item xs = {8}>
                            <input type="range"  max = '10' onChange = {(e) => setWriting(e.target.value)}/>
                            </Grid>
                        </Grid>
                    </li>
                  </ul>
              </Grid>
              <Grid item xs = {6}>
                  <h4>SỞ THÍCH :</h4>
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
        <img src={closeicon} style = {{width : '25px'}} alt="" />Đóng
        </Button>
        <Button variant="outlined" color="primary" onClick = {()=> SaveCV()} >
        <img src={saveicon} style = {{width : '25px'}} alt="" /> Lưu
        </Button>
        </div>
      </Container>
    </div>
  );
}

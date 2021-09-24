import { Button, styled } from '@material-ui/core';
import { orange, purple } from '@material-ui/core/colors';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import swal from 'sweetalert';
import Header from './../Components/header';
import jobServices from './../Services/getjobListAPI';
import { useHistory } from 'react-router-dom';

export default function JobDetail(props) {

  const { id } = useParams()
  const [jobdetail, setJobDetail] = useState({})
  useEffect(() => {
    jobServices.getJobByID(id)
      .then(
        (res) => {
          setJobDetail(res)
        }
      )
  }, [id]);

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    width: '200px',
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

  const AddButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(orange[500]),
    width: '200px',
    marginTop: '20px',
    backgroundColor: orange[500],
    '&:hover': {
      backgroundColor: orange[700],
    },
  }));
  const history = useHistory()
  const Ungtuyen= () => {
    if (localStorage.getItem('isLogin') === 1) {

    }else {
      swal("Ban phai dang nhap de thuc hien thao tac nay !", {
        icon: "info",
        buttons: {
          cancel: "Cancel!",
          catch: {
            text: "Go to Sign In",
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
  const LuuJob = () => {
    if (localStorage.getItem('isLogin') === 1) {
      
    }else {
      swal("Ban phai dang nhap de thuc hien thao tac nay !", {
        icon: "info",
        buttons: {
          cancel: "Cancel!",
          catch: {
            text: "Go to Sign In",
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
    <div className="job-detail">
      <Header userID={localStorage.getItem("id")} />
      <div className="job-detail-container mt-50">
        <div className="job-detail__header">
          <div className="job-detail__header-logo">
            <img src={jobdetail.logo} alt="" />
          </div>
          <div className="job-detail__content">
            <div className="job-detail__content-l ml-20">
              <h3>{jobdetail.company}</h3>
              <h4>Luong : {jobdetail.salary}</h4>
              <h4>Dia diem lam viec : {jobdetail.noilamviec} </h4>
            </div>
            <div className="job-detail__content-r">
              <ColorButton variant="contained" onClick = {() => Ungtuyen()}>Ung tuyen</ColorButton><br />
              <AddButton variant="contained" onClick = {()=> LuuJob()}> Luu viec lam</AddButton>
            </div>
          </div>
        </div>
        <div className="job-detail__mota">
          <div className="job-detail__mota-container">
            <h3>MO TA CONG VIEC</h3>
            <p>
              {jobdetail.mota}
            </p>
            <h3>YEU CAU CONG VIEC</h3>
            <p>{jobdetail.yeucau}</p>
            <h3>DIA DIEM LAM VIEC</h3>
            <p>{jobdetail.noilamviec}</p>
            <h3>NGAY DANG :</h3><span>{jobdetail.ngaydang}</span>
          </div>

        </div>
      </div>
    </div>
  )
}

import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import DetailInfoUser from './../Services/getDetailUserInfo';
import { getDetailByID } from './../actions/detailInfo';
import swal from 'sweetalert';

export default function JobdaluuItem({data , key}) {
    const history = useHistory()
    const dispatch = useDispatch()
    const ViewJobDetail = (value) => {
        history.push(`/jobdetail/${value}`)
    }

    const detailUser = useSelector(state => state.detailInfo.detailInfo)
    let listdaluu = detailUser.jobdaluu

    
    

    const Xoajobdaluu = (id) => {
        swal("Ban muon xoa di job nay ?", {
            icon : 'warning',
            buttons: {
              cancel: "Cancel!",
              catch: {
                text: "Xoa",
                value: "catch"
              },
            },
          })
            .then((value) => {
              switch (value) {
      
                case "defeat":
                  break;
      
                case "catch":
                    let listsaukhixoa = listdaluu.filter(
                        (e , i) => e !== id
                    )
                    DetailInfoUser.editDetailInfo(localStorage.getItem('id'),{
                        ...detailUser,
                        jobdaluu : [...listsaukhixoa]
                      })
                    //   Chinh sua du lieu o store :
                      dispatch(getDetailByID({
                        ...detailUser,
                        jobdaluu : [...listsaukhixoa]
                      }))
                  break;
      
                default:
              }
            });  
    }
    return (
        <div className="quanlyjob-item">
            <div className="quanlyjob-item__logo">
                <img src={data.logo} alt="" />
            </div>
            <div className="quanlyjob-item__content">
                <div className="quanlyjob-item__content-left">
                <h3>{data.company}</h3>
                <h4>{data.jobname}</h4>
                <h4>Luong : {data.salary}</h4>
                </div>
                <div className="quanlyjob-item__content-right">
            <Button style={{width : '125px' , marginBottom : '10px'}} variant="outlined" color = "primary" onClick={()=> ViewJobDetail(data.id)}>Xem chi tiet</Button><br />
            <Button style={{width : '125px'}} variant="contained" color = "secondary" onClick={()=> Xoajobdaluu(data.id)}>Xoa khoi DS</Button>
            </div>
            </div>

        </div>
    )
}
import {
  Card
} from "@material-ui/core";

import React from "react";
import editicon from '../img/EditCalendar.jpg'
import viewicon from '../img/RecordedResult.jpg'
import deleteicon from '../img/Delete.jpg'
import swal from 'sweetalert';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getCVID } from './../actions/cvlist';
import CVServices from './../Services/getCvListAPI';


export default function CvItem({cvInfo , getViewCVEvent, index , sendCvDatabyIndex, getEditCVEvent ,key}) {


  const dispatch = useDispatch()
  const cvList = useSelector(state => state.cvList.cvList)
  const cvArray = cvList.listCV

  const sendOpentoCV = () => {
    getViewCVEvent(true)
    sendCvDatabyIndex(index)
  }
  const sendEdittoCV = () => {
    getEditCVEvent(true)
    sendCvDatabyIndex(index)
  }

  const deleteCV = () => {
    swal({
      title: "Are you sure?",
      text: "Ban muon xoa CV nay ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        cvArray.splice(index, 1)
        dispatch(getCVID({
          ...cvList,
            listCV : cvArray })
        )
        CVServices.editCVByID(localStorage.getItem('id'), {
          user_id : cvList.id,
          listCV : cvArray
        })

        swal("CV da duoc xoa thanh cong!", {
          icon: "success",
        });
      } else {
        swal("Huy xoa CV!",{
          icon : 'info'
        });
      }
    });
  }

  return (
    
      <Card style = {{minHeight : '300px' , display: 'flex', justifyContent: 'center', alignItems: 'center'}} > 
      <div className = 'cv-item-title'>
      <h4>
            CV <br />
            {cvInfo.jobungtuyen}
          </h4>
          <img src="https://img.timviec.com.vn/2020/02/mau-cv-xin-viec-viet-tay1.jpg" alt="" className='mt-20'/>
          <div className="cv-item-btn mt-20">
      <button onClick = {()=> sendEdittoCV()}> <img style = {{width : '25px', textOverflow : 'Edit'}} src={editicon} alt=""/></button>
      <button onClick = {() => sendOpentoCV()}><img style = {{width : '25px'}} src={viewicon} alt="" /></button>
      <button onClick = {() => deleteCV()}><img style = {{width : '25px'}} src={deleteicon} alt="" /></button>
      </div>
      </div>
      </Card>
  );
}

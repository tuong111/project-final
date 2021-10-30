import React, { useEffect } from 'react'
import jobServices from '../Services/getjobListAPI';
import Header from './../Components/header';
import DetailInfoUser from './../Services/getDetailUserInfo';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDetailByID } from './../actions/detailInfo';
import JobdaungtuyenItem from './../Components/jobdaungtuyen-item';
import JobdaluuItem from '../Components/jobdaluu-item';
import { useSelector } from 'react-redux';
import Footer from './../Components/footer';



export default function Quanlyjob(props) {
    const [listalljob , setlistalljob] = useState([])

    const dispatch = useDispatch()
    useEffect(() => {
        jobServices.getJoblist()
      .then(
        (res) => {
            setlistalljob(res)
            
        }
      )
        DetailInfoUser.getDetailInfoByID(localStorage.getItem("id"))
        .then((res) => {
          dispatch(getDetailByID(res))
        })
      }, [dispatch]);
      
      const detailUser = useSelector(state => state.detailInfo.detailInfo)
      let listjobungtuyen = detailUser.jobdaungtuyen 
      let listjobdaluu = detailUser.jobdaluu 

      let jobungtuyen = listalljob.filter(a => listjobungtuyen?.some(b => b === a.id));
      let jobdaluu = listalljob.filter(a => listjobdaluu?.some(b => b === a.id))
      
 
      
    return (
        <div className="quanlyjob">
            <Header userID={localStorage.getItem("id")} />
            <div className="quanlyjob-container mt-50">
                <div className="quanlyjob-content">
                    <div className="quanlyjob-content__job">
                        <div className="quanlyjob-content__job-header">
                            <div className="quanlyjob-content_job-header-container">
                                <p>
                                   <i><strong> Bạn đã ứng tuyển vào {jobungtuyen.length} job</strong></i>
                                </p>
                            </div>
                        </div>
                        <div className="quanlyjob-content__job-item">
                            {
                                jobungtuyen?.map(
                                    (e, i) => {
                                        return <JobdaungtuyenItem data = {e} key = {e.id}/>
                                    }
                                )
                            }
                        </div>
                        
                    </div>
                    <div className="quanlyjob-content__job">
                        <div className="quanlyjob-content__job-header">
                            <div className="quanlyjob-content_job-header-container">
                                <p>
                                    <i><strong>Bạn đã lưu lại {jobdaluu.length} job</strong></i>
                                </p>
                            </div>
                        </div>
                        <div className="quanlyjob-content__job-item">
                            {
                                jobdaluu?.map(
                                    (e, i) => {
                                        return <JobdaluuItem data = {e} key = {e.id}/>
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="quanlyjob-banner">
                    <h2>QUẢNG CÁO BANNER 450 x800 </h2>
                </div>

            </div>
            <Footer/>
        </div>
    )
}

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
                                    Ban da ung tuyen vao {jobungtuyen.length} job
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
                                    Ban da luu lai {jobdaluu.length} job
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
                    <h2>QUANG CAO BANNER 450 x800 </h2>
                </div>

            </div>
        </div>
    )
}

import React, { useEffect } from 'react'
import jobServices from '../Services/getjobListAPI';
import Header from './../Components/header';
import DetailInfoUser from './../Services/getDetailUserInfo';
import { useState } from 'react';


export default function Quanlyjob(props) {
    const [listalljob , setlistalljob] = useState([])
    const [listjobungtuyen , setjobungtuyen] = useState([])
    const [listjobdaluu , setlistjobdaluu] = useState([])
    useEffect(() => {
        jobServices.getJoblist()
      .then(
        (res) => {
            setlistalljob(res)
        }
      )
        DetailInfoUser.getDetailInfoByID(localStorage.getItem("id"))
        .then((res) => {
          setjobungtuyen(res.jobdaungtuyen)
        })
      }, []);

    return (
        <div className="quanlyjob">
            <Header userID={localStorage.getItem("id")} />
            <div className="quanlyjob-container mt-50">
                <div className="quanlyjob-content">
                    <div className="quanlyjob-content__job">
                        <div className="quanlyjob-content__job-header">
                            <div className="quanlyjob-content_job-header-container">
                                <p>
                                    Ban da ung tuyen vao 3 job
                                </p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="quanlyjob-content__job">
                        <div className="quanlyjob-content__job-header">
                            <div className="quanlyjob-content_job-header-container">
                                <p>
                                    Ban da luu lai 2 job
                                </p>
                            </div>
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

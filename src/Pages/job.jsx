import React, { useEffect, useState } from 'react'
import Header from '../Components/header'
import { NativeSelect } from '@material-ui/core';
import JobItem from './../Components/job-item';
import { useDispatch } from 'react-redux';
import jobServices from '../Services/getjobListAPI';
import { getJob } from '../actions/joblist';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';

export default function Job(props) {
    const location = useLocation()
    const findID = location.state? location.state.type : 0
    
    
    const [joblist , setjobList] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        jobServices.getJoblist()
          .then(
            (res) => {
                if (findID === 0) {
                    setjobList(res)
                }else {
                    setjobList(res.filter(
                        (e , i) => {
                            return e.nganhnghe === Number(findID)
                        }
                    ))
                }
                

                dispatch(getJob(res))
            }
          )

      }, [dispatch, findID]);
      
    
    const jobArr = useSelector(state => state.jobList.jobList)
 
    
    
    const setJobFind = (value) => {
        let Arr = []
        if (Number(value) !== 0) {
            Arr = jobArr.filter(
                (e, i ) => {
                    return e.nganhnghe === Number(value)
                }
            )
        }else {
            Arr = [...jobArr]
        }
        setjobList(Arr)
        
    }

    return (
        <div className="job">
            <Header userID={localStorage.getItem("id")}/>
            <div className="job-container mt-50">
                <div className="job-content">
                    <div className="job-search">
                        <div className="job-search-container">
                            <div className="job-search-item">
                                Co {joblist.length} cong viec phu hop
                            </div>
                            <div className="job-search-item">
                                <span>Chon nganh nghe </span>
                                <NativeSelect id="select" style={{ width: '200px', textAlign: 'right' }} 
                                onChange = {(e) => setJobFind(e.target.value)}
                                defaultValue = {findID}>
                                    <option value="0">Tat ca</option>
                                    <option value="1">IT</option>
                                    <option value="2">Ban hang</option>
                                    <option value="3">Tai chinh</option>
                                </NativeSelect>
                            </div>

                        </div>
                    </div>
                    <div className="job-listinfo">
                            {
                                joblist?.map(
                                    (e , index) => {
                                        return <JobItem key = {index} jobdata = {e}/>
                                    }
                                )
                            }
                        </div>
                </div>
                <div className="job-banner">
                    <h2>QUANG CAO BANNER 450 x800 </h2>
                </div>
            </div>
        </div>
    )
}

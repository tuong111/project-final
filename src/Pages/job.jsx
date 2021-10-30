import React, { useEffect, useState } from 'react'
import Header from '../Components/header'
import { NativeSelect } from '@material-ui/core';
import JobItem from './../Components/job-item';
import { useDispatch } from 'react-redux';
import jobServices from '../Services/getjobListAPI';
import { getJob } from '../actions/joblist';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import Footer from './../Components/footer';

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
                                <i><strong>Có {joblist.length} công việc phù hợp</strong></i>
                            </div>
                            <div className="job-search-item">
                                <span><i><strong>Chọn ngành nghề </strong></i></span>
                                <NativeSelect id="select" style={{ width: '200px', textAlign: 'right' }} 
                                onChange = {(e) => setJobFind(e.target.value)}
                                defaultValue = {findID}>
                                    <option value="0">Tất cả</option>
                                    <option value="1">IT</option>
                                    <option value="2">Bán hàng</option>
                                    <option value="3">Tài chính</option>
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
                    <img src="https://honglinhhatinh.com/wp-content/uploads/2021/04/1607424018_696_Banner-tuyen-dung.jpg" alt="" /><br />
                    <img src="https://lawnet.thukyluat.vn/uploads/user/25677/185_xuanvu_banner_tuyendung-696x386.jpg" alt="" />
                    {/* <img src="https://printgo.vn/uploads/media/796109/banner-tuyen-dung-13_1632972743.png" alt="" /> */}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

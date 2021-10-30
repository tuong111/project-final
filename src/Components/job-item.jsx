import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom';



export default function JobItem({jobdata}) {
    const history = useHistory()
    const ViewJobDetail = (id) => {
        history.push(`/jobdetail/${id}`)
    }
    return (
        <div className="job-listinfo-item">
            <div className="job-listinfo-item__img">
                <img src={jobdata.logo} alt="" />
            </div>
            <div className="job-listinfo-item__content mt-10 mr-10 ml-10 mbt-10">
                <div className="job-listinfo-item__content-left">
                    <h3>{jobdata.company}</h3>
                    <h4>
                        Công việc : {jobdata.jobname}
                    </h4>
                    <h4> Lương : {jobdata.salary} VNĐ </h4>
                </div>
                <div className="job-listinfo-item__content-right">
                <Button variant="outlined" color = "primary" onClick={()=> ViewJobDetail(jobdata.id)}>Xem chi tiết</Button>
                </div>
            </div>
        </div>
    )
}

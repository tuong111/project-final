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
                        Cong viec : {jobdata.jobname}
                    </h4>
                    <h4> Luong : {jobdata.salary} VND</h4>
                </div>
                <div className="job-listinfo-item__content-right">
                <Button variant="contained" color = "primary" onClick={()=> ViewJobDetail(jobdata.id)}>Xem chi tiet</Button>
                </div>
            </div>
        </div>
    )
}

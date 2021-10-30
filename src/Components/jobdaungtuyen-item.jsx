import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom';

export default function JobdaungtuyenItem({data , key}) {
    const history = useHistory()
    const ViewJobDetail = (value) => {
        history.push(`/jobdetail/${value}`)
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
                <h4>Lương : {data.salary} VNĐ</h4>
                </div>
                <div className="quanlyjob-item__content-right">
            <Button variant="outlined" color = "primary" onClick={()=> ViewJobDetail(data.id)}>Xem chi tiết</Button>
            </div>
            </div>

        </div>
    )
}

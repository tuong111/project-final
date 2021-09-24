import React from 'react'
import iticon from '../img/iticon.png'
import salericon from '../img/salericon.png'
import ecomicon from '../img/ecomicon.png'
import { useHistory } from 'react-router-dom';
export default function JobPart({ITjob , Salerjob, Ecomjob}) {
    const history = useHistory()
    const gotoJobPage = (value) => {
        history.push('/job' ,{
            type : value,
            default : 0
        })
    }

    return (
        <div className="jobpart mt-50">
            <div className="jobpart-container">
                <div className="jobpart-titel">
                    <div className="jobpart-count">
                        <div className="jobpart-header">
                            <span>Cac nganh nghe chinh</span>
                        </div>
                        <div className="jobpart-count-list">
                            <div className="jobpart-count-item" onClick = {() => gotoJobPage(1)}>
                                <div className="jobpart-count-item__img">
                                    <img src={iticon} alt="" />
                                </div>
                                <div className="jobpart-count-item__detail">
                                    <span> {ITjob} viec lam IT</span>
                                </div>
                            </div>
                            <div className="jobpart-count-item" onClick = {() => gotoJobPage(2)}>
                                <div className="jobpart-count-item__img">
                                    <img src={salericon} alt="" />
                                </div>
                                <div className="jobpart-count-item__detail">
                                    <span> {Salerjob} viec lam ban hang</span>
                                </div>
                            </div>
                            <div className="jobpart-count-item" onClick = {() => gotoJobPage(3)}>
                                <div className="jobpart-count-item__img">
                                    <img src={ecomicon} alt="" />
                                </div>
                                <div className="jobpart-count-item__detail">
                                    <span>{Ecomjob} viec lam tai chinh</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

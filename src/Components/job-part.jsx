import React from 'react'
import iticon from '../img/iticon.png'
import salericon from '../img/salericon.png'
import ecomicon from '../img/ecomicon.png'
export default function JobPart({ITjob , Salerjob, Ecomjob}) {


    return (
        <div className="jobpart mt-50">
            <div className="jobpart-container">
                <div className="jobpart-titel">
                    <div className="jobpart-count">
                        <div className="jobpart-header">
                            <span>Cac nganh nghe chinh</span>
                        </div>
                        <div className="jobpart-count-list">
                            <div className="jobpart-count-item">
                                <div className="jobpart-count-item__img">
                                    <img src={iticon} alt="" />
                                </div>
                                <div className="jobpart-count-item__detail">
                                    <span> {ITjob} viec lam IT</span>
                                </div>
                            </div>
                            <div className="jobpart-count-item">
                                <div className="jobpart-count-item__img">
                                    <img src={salericon} alt="" />
                                </div>
                                <div className="jobpart-count-item__detail">
                                    <span> {Salerjob} viec lam ban hang</span>
                                </div>
                            </div>
                            <div className="jobpart-count-item">
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

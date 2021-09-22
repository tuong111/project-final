import React from 'react'
import cvIcon from '../img/cvicon.png'
import useIcon from '../img/usericon.png'
import jobIcon from '../img/jobicon.png'

export default function Aboutus({sumCV, sumUsers , sumJobs}) {


    return (
        <div className="about mt-50">
            <section className="about-container">
                <div className="about-title">
                    <div className="about-count">
                        <div className="about-header">
                            <span>SO LUONG HO SO</span>
                        </div>
                        <div className="about-count-list">
                            <div className="about-count-item">
                                <div className="about-count-item__img">
                                    <img src={cvIcon} alt="" />
                                </div>
                                <div className="about-count-item__detail">
                                    <span>
                                        {sumCV} CVs
                                    </span>
                                </div>
                            </div>
                            <div className="about-count-item">
                                <div className="about-count-item__img">
                                <img src={useIcon} alt="" />
                                </div>
                                <div className="about-count-item__detail">
                                <span>
                                        {sumUsers} USERS
                                    </span>
                                </div>
                            </div>
                            <div className="about-count-item">
                                <div className="about-count-item__img">
                                <img src={jobIcon} alt="" />
                                </div>
                                <div className="about-count-item__detail">
                                {sumJobs} JOBS
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-header">
                        <span>ABOUT US</span>
                    </div>
                    <div className="about-detail">
                        <p>
                            Day la trang web tuyen dung duoc thuc hien boi Nguyen Thanh Tuong <br />
                        </p>
                    </div>
                </div>
            </section>
        </div>

    )
}

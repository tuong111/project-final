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
                            <span>SỐ LƯỢNG HỒ SƠ</span>
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
                                        {sumUsers} người dùng
                                    </span>
                                </div>
                            </div>
                            <div className="about-count-item">
                                <div className="about-count-item__img">
                                <img src={jobIcon} alt="" />
                                </div>
                                <div className="about-count-item__detail">
                                {sumJobs} việc làm
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-header">
                        <span>ABOUT US</span>
                    </div>
                    <div className="about-detail">
                        <p>
                            Đây là trang web được thực hiện bởi Nguyễn Thành Tường - 2021 <br />
                        </p>
                    </div>
                </div>
            </section>
        </div>

    )
}

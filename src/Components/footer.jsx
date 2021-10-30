import React from 'react'
import logojw from '../img/logojw.png'

export default function Footer(props) {


    return (
        <div className="footer mt-20">
            <div className="footer-container">
                <div className="footer-info">
                    <p>
                        <strong>JEST W COMPANY</strong>
                    </p>
                    <p>
                        <strong>Trụ sở Bình Dương:</strong> <br />
                        603A DT743A, khu phố Đông Tân, TP. Dĩ An, tỉnh Bình Dương
                        <br /><strong>Chi nhánh HCM:</strong> <br />
                        Toà nhà ABC, đường 123, quận 1, TP Hồ Chí Minh
                    </p>
                </div>
                <div className="footer-logo">
                    <div className="footer-lienhe">
                        <strong>Contact :</strong>
                        <p>
                            Gmail : tuongtf@gmail.com <br />
                            Facebook : <a href="https://www.facebook.com/tuong.nguyenthanh.948/" rel="noreferrer" target = "_blank">Nguyen Thanh Tuong</a>
                        </p>
                    </div>
                    <img src={logojw} alt="" />
                </div>
            </div>
        </div>
    )
}

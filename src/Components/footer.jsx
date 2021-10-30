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
                        <strong>Trụ sở HN:</strong> <br />
                        Tầng 03, Tòa nhà Goldseason, 47 Nguyễn Tuân, Thanh Xuân, Hà Nội
                        <br /><strong>Chi nhánh TP HCM:</strong> <br />
                        Tòa nhà cao ốc Nam Giao 1, số 261 - 263 Phan Xích Long, Phường 2, Quận Phú Nhuận, TP Hồ Chí Minh
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

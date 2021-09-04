import { Button } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const ModalLogin = ({ props }) => {
    const history = useHistory()
    return (
        <div className="header-modal" >
            <div className="header-modal-item" onClick={() => history.push('/signin')}>
                <PersonIcon />
                <span>Sign In</span>
            </div>
            <div className="header-modal-item" onClick={() => history.push('/signup')}>
                <PersonAddIcon />
                <span>Sign Up</span>
            </div>
        </div>
    )
}

const ModalInfo = ({ logOutToggle }) => {
    const img = "data:image/png;base64,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"

    const history = useHistory()
    const SignOut = () => {
        logOutToggle(false)
    }
    return (
        <div className="header-modal" >
            <div className="header-modal-item" onClick={() => history.push('/info')}>
                <span><img src={img} alt="" /></span>
                <span>My Info</span>
            </div>
            <div className="header-modal-item" onClick={SignOut}>
                <ExitToAppIcon />
                <span>Sign Out</span>
            </div>
        </div>
    )
}

export default function Header({ userName }) {
    const [isClickLogin, setClickLogin] = useState(false)
    const [isClickInfo, setClickInfo] = useState(false)
    const checkLogin = localStorage.getItem('isLogin')
    const history = useHistory()
    const handlelogOut = (value) => {
        localStorage.clear()
        setClickInfo(value)
        history.push('/')
    }

    return (
        <header className="header">
            <div className="header-top">
                <div className="header-logo">
                    <Link to='/'> JEST W </Link>
                </div>
                <div className="header-title">
                    <Link to='/interview' className="header-item" key="itv">Phỏng vấn</Link>
                    <Link to='/candidate' className="header-item" key="cdd">Ứng viên</Link>
                    <Link to='/hr' className="header-item" key="hr">Nhân sự</Link>
                    <Link to='/job' className="header-item" key="job">Việc làm</Link>
                </div>
                <div className={checkLogin ? "header-left" : "inactive"} >Hello <span className="link text-title bold ml-10 i" onClick={() => setClickInfo(!isClickInfo)}>{userName}</span> </div>
                <div className={!checkLogin ? "header-left" : "header-left inactive"}>
                    <div className="header-left-btn">
                        <Button variant="contained" onClick={() => setClickLogin(!isClickLogin)}>
                            <div className="btn-login">
                                <AccountCircleIcon />
                                <span> Login </span>
                            </div>
                        </Button>
                    </div>
                </div>
                <div className="header-left-more">
                    <MoreHorizIcon />
                </div>
            </div>
            {
                isClickLogin ? <ModalLogin /> : ''
            }
            {
                isClickInfo ? <ModalInfo logOutToggle={(value) => handlelogOut(value)} userName = {userName} /> : ''
            }

        </header>


    )
}

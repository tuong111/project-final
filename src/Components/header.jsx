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

    const SignOut = () => {
        logOutToggle(false)
    }
    return (
        <div className="header-modal" >
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
                isClickInfo ? <ModalInfo logOutToggle={(value) => handlelogOut(value)} /> : ''
            }

        </header>


    )
}

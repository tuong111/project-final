import { Button } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';


export default function TdHeader(props) {
    

    return (
        <div className="td_header">
            <div className="td_logo">
            <Link to="#"> JEST W </Link>
            </div>
            <div className="td-menu">
                <Link>Quản lý tin đăng tuyển</Link>
                <Link>Quản lý Ứng viên</Link>
            </div>
            <div className="td-auth">
            <Button variant="contained">Đăng nhập</Button>
            <Button variant="outlined">Đăng ký</Button>
            </div>
        </div>
    )
}

import React from 'react'
import Header from './../Components/header';

export default function Quanlyjob(props) {
    

    return (
        <div className="quanlyjob">
            <Header userID={localStorage.getItem("id")} />
        </div>
    )
}

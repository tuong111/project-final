import React from 'react'
import TdHeader from '../Components/tuyendung-components/TD_header'
import TdHero from './../Components/tuyendung-components/TD-hero';


export default function Tuyendung(props) {
    

    return (
        <div className="tuyendung">
            <div className="wrapper">
            <TdHeader/>
            </div>
            <TdHero/>
        </div>
    )
}

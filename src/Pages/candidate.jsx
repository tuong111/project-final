import React from 'react'
import Header from '../Components/header';
import Cv from '../Components/cv';

export default function Candidate(props) {
    

    return (
        <>
            <Header userID={localStorage.getItem("id")}/>
            <Cv/>
        </>
    )
}

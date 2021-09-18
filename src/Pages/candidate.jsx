import React, { useState } from 'react'
import Header from '../Components/header';
import Cv from '../Components/cv';
import { useEffect } from 'react';
import CVServices from '../Services/getCvListAPI';

export default function Candidate(props) {
    const [CVlist , setCVList] = useState([])
    useEffect(() => {
        CVServices.getCVlist().then(
            (res) => setCVList(res)
        )

      }, []);

      console.log(CVlist)
    return (
        <>
            <Header userID={localStorage.getItem("id")}/>
            <Cv/>
        </>
    )
}

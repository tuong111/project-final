import React, { useEffect, useState } from 'react'
import Thongtinchung from '../Components/thongtinchung'
import { Container } from '@material-ui/core';
import Header from '../Components/header';
import userServices from './../Services/getUsersAPI';




export default function Infouser(props) {
    const [data, setData] = useState([])
    useEffect(() => {
      userServices.getUserByID(localStorage.getItem('id')).then(
        res => setData(res)
      )
  
    }, [])

    const userName = `${data.['first name']} ${data['last name']}`
    console.log(userName)
    return (
        <div className="info">
            <Header userName = {userName}/>
            <Container>
                <Thongtinchung userName = {userName}
                userData = {data}/>
            </Container>
        </div>
    )
}

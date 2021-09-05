import React, { useEffect, useState } from 'react'
import Thongtinchung from '../Components/thongtinchung'
import { Container } from '@material-ui/core';
import Header from '../Components/header';
import userServices from './../Services/getUsersAPI';
import hoSoServices from '../Services/getHosoAPI';




export default function Infouser(props) {
    const [data, setData] = useState([])
    const [hoso, setHoSo] = useState([])
    useEffect(() => {
      userServices.getUserByID(localStorage.getItem('id')).then(
        res => setData(res)
      )
      hoSoServices.getHoSoByID(localStorage.getItem('id')).then(
        res => setHoSo(res)
      )
  
    }, [])

    return (
        <div className="info">
            <Header userID = {localStorage.getItem('id')}/>
            <Container>
                <Thongtinchung userName = {`${data['first name']} ${data['last name']}`}
                userData = {data}
                hoSoUser = {hoso}/>
            </Container>
        </div>
    )
}

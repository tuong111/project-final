import React from 'react'
import Header from '../Components/header';
import Cv from '../Components/cv';
import { useEffect } from 'react';
import CVServices from '../Services/getCvListAPI';
import { useDispatch } from 'react-redux';
import { getCVID } from './../actions/cvlist';
import DetailInfoUser from './../Services/getDetailUserInfo';
import { getDetailByID } from './../actions/detailInfo';
import userServices from '../Services/getUsersAPI';
import { getUserID } from '../actions/users';


export default function Candidate(props) {
    const dispatch = useDispatch()
    useEffect(() => {
        CVServices.getCVByID(localStorage.getItem('id')).then(
            (res) => dispatch(getCVID(res))
        )
        DetailInfoUser.getDetailInfoByID(localStorage.getItem("id"))
        .then((res) => {
          dispatch(getDetailByID(res))
        })
        userServices.getUserByID(localStorage.getItem('id'))
        .then(
            (res) => {
                dispatch(getUserID(res))
            })
      }, [dispatch]);
    
    
     
    
    return (
        <>
            <Header userID={localStorage.getItem("id")}/>
            <Cv/>
        </>
    )

}
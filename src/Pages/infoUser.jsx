import React, { useEffect } from "react";
import Thongtinchung from "../Components/thongtinchung";
import { Container } from "@material-ui/core";
import Header from "../Components/header";

import hoSoServices from "../Services/getHosoAPI";
import Thongtincanhan from "../Components/thongtincanhan";
import { useDispatch, useSelector } from 'react-redux';
import { getHoSoByID } from './../actions/hoso';
import DetailInfoUser from '../Services/getDetailUserInfo';
import { getDetailByID } from '../actions/detailInfo';



export default function Infouser(props) {

  const dispatch = useDispatch()
  
  useEffect(() => {
    hoSoServices
      .getHoSoByID(localStorage.getItem("id"))
      .then((res) => {
        dispatch(getHoSoByID(res))
      })
    DetailInfoUser.
    getDetailInfoByID(localStorage.getItem("id"))
    .then((res) => {
      dispatch(getDetailByID(res))
    })
  }, []);
  const hosoData = useSelector(state => state.hoso.hoso)
  const data = useSelector(state => state.user.user)
  return (
    <div className="info">
      <Header userID={localStorage.getItem("id")} />
      <Container>
        <Thongtinchung
          userName={data.userName}
          ImgUser= {data.img}
          userData={data}
          hoSoUser={hosoData}
        />
      </Container>
      <Container>
        <Thongtincanhan userData = {data}/>
      </Container>
    </div>
  );
}

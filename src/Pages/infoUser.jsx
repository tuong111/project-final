import React, { useEffect } from "react";
import Thongtinchung from "../Components/thongtinchung";
import { Container } from "@material-ui/core";
import Header from "../Components/header";

import hoSoServices from "../Services/getHosoAPI";
import Thongtincanhan from "../Components/thongtincanhan";
import { useDispatch, useSelector } from 'react-redux';
import { getHoSoByID } from './../actions/hoso';

export default function Infouser(props) {



  
  const dispatch = useDispatch()
  
  useEffect(() => {
    hoSoServices
      .getHoSoByID(localStorage.getItem("id"))
      .then((res) => {
        dispatch(getHoSoByID(res))
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
          userData={data}
          hoSoUser={hosoData}
        />
      </Container>
      <Container>
        <Thongtincanhan />
      </Container>
    </div>
  );
}

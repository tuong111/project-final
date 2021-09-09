import React, { useEffect, useState } from "react";
import Thongtinchung from "../Components/thongtinchung";
import { Container , Typography} from "@material-ui/core";
import Header from "../Components/header";
import userServices from "./../Services/getUsersAPI";
import hoSoServices from "../Services/getHosoAPI";
import Thongtincanhan from "../Components/thongtincanhan";
import { useSelector } from 'react-redux';

export default function Infouser(props) {
  const [data, setData] = useState([]);
  const [hoso, setHoSo] = useState([]);
  const user = useSelector(state => state.user.user)
  const hosoData = useSelector(state => state.hoso.hoso)
  
  useEffect(() => {
    userServices
      .getUserByID(localStorage.getItem("id"))
      .then((res) => setData(res));
    hoSoServices
      .getHoSoByID(localStorage.getItem("id"))
      .then((res) => setHoSo(res));
  }, []);
console.log('Store user :', user)
console.log('Store ho so :', hosoData)
  return (
    <div className="info">
      <Header userID={localStorage.getItem("id")} />
      <Container>
        <Thongtinchung
          userName={`${data["first name"]} ${data["last name"]}`}
          userData={data}
          hoSoUser={hoso}
        />
      </Container>
      <Container>
        <Thongtincanhan />
      </Container>
    </div>
  );
}

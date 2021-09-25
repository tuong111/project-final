import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PersonIcon from "@material-ui/icons/Person";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import userServices from '../Services/getUsersAPI';
import { useDispatch, useSelector } from "react-redux";
import { defaultUser, getUserID } from './../actions/users';
import { defaultCVList } from "../actions/cvlist";
import { defaultDetail } from "../actions/detailInfo";

const ModalLogin = ({ props }) => {
  const history = useHistory();
  return (
    <div className="header-modal">
      <div
        className="header-modal-item"
        onClick={() => history.push("/signin")}
      >
        <PersonIcon />
        <span>Sign In</span>
      </div>
      <div
        className="header-modal-item"
        onClick={() => history.push("/signup")}
      >
        <PersonAddIcon />
        <span>Sign Up</span>
      </div>
    </div>
  );
};

const ModalInfo = ({ logOutToggle , userImg}) => {

  const history = useHistory();
  const SignOut = () => {
    logOutToggle(false);
  };
  return (
    <div className="header-modal">
      <div className="header-modal-item" onClick={() => history.push("/info")}>
        <span>
          <img src = {userImg} alt="" />
        </span>
        <span>My Info</span>
      </div>
      <div className="header-modal-item" onClick={SignOut}>
        <ExitToAppIcon />
        <span>Sign Out</span>
      </div>
    </div>
  );
};

export default function Header({userID}) {
  const [isClickLogin, setClickLogin] = useState(false);
  const [isClickInfo, setClickInfo] = useState(false);
  const checkLogin = localStorage.getItem("isLogin");
  const history = useHistory();
  const dispatch = useDispatch()
  useEffect(() => {
    userServices.getUserByID(userID).then(
      res => dispatch(getUserID(res))
    )

  },[userID, dispatch])

  const handlelogOut = (value) => {
    localStorage.clear();
    dispatch(defaultCVList())
    dispatch(defaultUser())
    dispatch(defaultDetail())
    setClickInfo(value);
    history.push("/");
  };

   const data = useSelector(state => state.user.user) 
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-logo">
          <Link to="/"> JEST W </Link>
        </div>
        <div className="header-title">
          <Link to="/candidate" className="header-item" key="cdd">
            Quan ly CV
          </Link>
          <Link to="/job" className="header-item" key="job">
            Việc làm
          </Link>
          <Link to="/quanlyjob" className="header-item" key="hr">
            Quan ly viec lam
          </Link>
          <Link to="/tuyendung" target={"_blank"}  className="header-item" key="hr">
            Nha tuyen dung
          </Link>
        </div>
        <div className={checkLogin ? "header-left" : "inactive"}>
          <span>
            <img src= {data.img} alt="" />
          </span>
          <span
            className="link text-title bold ml-10 i"
            onClick={() => setClickInfo(!isClickInfo)}
          >
            {`${data['first name']} ${data['last name']}` }
          </span>
        </div>
        <div className={!checkLogin ? "header-left" : "header-left inactive"}>
          <div className="header-left-btn">
            <Button
              variant="contained"
              onClick={() => setClickLogin(!isClickLogin)}
            >
              <div className="btn-login">
                <AccountCircleIcon />
                <span> Login </span>
              </div>
            </Button>
          </div>
        </div>
        <div className="header-left-more">
          <MoreHorizIcon />
        </div>
      </div>
      {isClickLogin ? <ModalLogin /> : ""}
      {isClickInfo ? (
        <ModalInfo
          logOutToggle={(value) => handlelogOut(value)}
          userName={`${data['first name']} ${data['last name']}`}
          userImg = {data.img}
        />
      ) : (
        ""
      )}
    </header>
  );
}

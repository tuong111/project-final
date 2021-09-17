import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import SaveIcon from "@material-ui/icons/Save";
import hoSoServices from "../Services/getHosoAPI";
import userServices from "../Services/getUsersAPI";
import { useDispatch, useSelector } from 'react-redux';
import { getHoSoByID } from './../actions/hoso';
import { getUserID } from './../actions/users';

const Default = ({ userData, hoSoUser }) => {
  return (
    <div className="info-container-right-text">
      <h3>{`${userData['first name']} ${userData['last name']}`}</h3>
      <p className="text-content">
        Chuc Danh : {hoSoUser.chucdanh}
        <br></br>
        Nam kinh nghiem : {hoSoUser.namKN}
        <br></br>
        Cong ty gan day nhat : <br></br>
        Bang cap cao nhat : <br></br>
      </p>
    </div>
  );
};

export function EditForm({ userData, toggleCancel, toggleSave, hoSoUser , userImg }) {  
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [chucdanh, setChucDanh] = useState("");
  const [namKN, setNamKN] = useState("");
  let currentImg = user.img
  const handleCancelBtn = (e) => {
    toggleCancel(e);
    dispatch(getUserID({
      ...user,
      img : currentImg
    }))

  };
  let push_ChucDanh = ''
  if (chucdanh === '') {
    push_ChucDanh = hoSoUser.chucdanh
  }else {
    push_ChucDanh = chucdanh
  }
  let push_namKN = ''
  if (namKN === '') {
    push_namKN = hoSoUser.namKN
  }else {
    push_namKN = namKN
  }
  let push_FirstName = ''
  if (firstname === '') {
    push_FirstName = userData['first name']
  }else {
    push_FirstName = firstname
  }
  let push_LastName = ''
  if (lastname ===''){
    push_LastName = userData['last name']
  }else {
    push_LastName = lastname
  }
  const handleSaveBtn = (e) => {
    toggleSave(e);
    // call API update lai ho so
        hoSoServices.editHoSoByID(userData.id, {
            user_id: userData.id,
            chucdanh: push_ChucDanh,
            namKN: push_namKN,
          });

        // Chinh sua du lieu o store
          dispatch(getHoSoByID({
            user_id: userData.id,
            chucdanh: push_ChucDanh,
            namKN: push_namKN,
          }))
          // Call api update lai user
        userServices.editUserByID(userData.id, {
            "first name": push_FirstName,
            "last name": push_LastName,
            img : userImg
          });
          // chinh sua du lieu store
          dispatch(getUserID({
            ...user,
            "first name": push_FirstName,
            "last name": push_LastName,
            img : userImg
          }))
  };
  return (
    <div className="edit-form">
      <div className="edit-form-item">
        <TextField
          label="First Name"
          defaultValue={userData["first name"]}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          label="Last Name"
          defaultValue={userData["last name"]}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="edit-form-item">
        <TextField
          label="Chuc Danh"
          defaultValue={hoSoUser.chucdanh}
          fullWidth
          onChange={(e) => setChucDanh(e.target.value)}
        />
      </div>
      <div className="edit-form-item">
        <TextField
          label="So Nam Kinh Nghiem"
          defaultValue={hoSoUser.namKN}
          fullWidth
          onChange={(e) => setNamKN(e.target.value)}
        />
      </div>
      <div className="edit-form-item">
        <div className="edit-form-btn">
          <span>
            <Button
              variant="contained"
              color="default"
              size="medium"
              onClick={(e) => handleCancelBtn(e)}
            >
              Cancel
            </Button>
          </span>
          <span>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              startIcon={<SaveIcon />}
              onClick={(e) => handleSaveBtn(e)}
            >
              Save
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Thongtinchung({  userData, hoSoUser }) {
  const [clickToggleEdit, setClickTogleEdit] = useState(false);

  const CancelBtn = (event) => {
    setClickTogleEdit(false);
    event.stopPropagation();
  };
  const toggleSave = (e) => {
    setClickTogleEdit(false);
    e.stopPropagation();
  };

 
 const [userImg , setUserImg] = useState(userData.img)
  const uploadAvatar = async (value) => {
    const file = value.target.files[0]
    const base64 = await convertBase64(file)
    if (base64 !== ''){
      setUserImg(base64)
    }
    

  }
  console.log(userImg)
  const convertBase64 = (file) => {
    return new Promise((resolve, reject ) => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload = () => 
      {
        resolve(fileReader.result)
      }
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }
  return (
    <div className="info-container" onClick={() => setClickTogleEdit(true)}>
      <div className="info-container-left">
        <img src={userImg} alt="" />
        <br />
        <div
          className={clickToggleEdit ? "" : "inactive"}
        >
          <Button variant="contained" component="label">
            Upload Avatar
            <input type="file" hidden onChange = {(e) => uploadAvatar(e)}/>
          </Button>
        </div>
      </div>
      <div className="info-container-right">
        {clickToggleEdit ? (
          <EditForm
            userData={userData}
            toggleCancel={(event) => CancelBtn(event)}
            toggleSave={(e) => toggleSave(e)}
            hoSoUser={hoSoUser}
            userImg = {userImg}
          />
        ) : (
          <Default userData={userData} hoSoUser={hoSoUser}  userImg = {userImg}/>
        )}
      </div>
    </div>
  );
}

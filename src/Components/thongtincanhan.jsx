import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SaveIcon from "@material-ui/icons/Save";
import DetailInfoUser from '../Services/getDetailUserInfo';
import {Button,FormControl,Grid,InputLabel,MenuItem,Select,TextField} from "@material-ui/core";
import { getDetailByID } from '../actions/detailInfo';

export function Default({ userData }) {
  const detailInfo = useSelector((state) => state.detailInfo.detailInfo);
  return (
    <Grid container spacing={3} xs={12} className="default">
      <Grid item xs={6}>
        <ul>
          <li>Email : {userData.email}</li>
          <li>Ngày sinh : {detailInfo.dob}</li>
          <li>
            Giới tính :{" "}
            {detailInfo.gioitinh === 1
              ? "Nam"
              : detailInfo.gioitinh === 2
              ? "Nữ"
              : "Khác"}
          </li>
          <li>Phone : {detailInfo.phone}</li>
        </ul>
      </Grid>
      <Grid item xs={6}>
        <ul>
          <li>Quốc tịch : {detailInfo.quoctich}</li>
          <li>Tỉnh thành : {detailInfo.tinhthanh}</li>
        </ul>
      </Grid>
    </Grid>
  );
}

export function EditForm({ toggleCancel, toggleSave, userData }) {
  const detailInfo = useSelector((state) => state.detailInfo.detailInfo);
  const dispatch = useDispatch()
  const [dob , setDob] = useState('')
  const [gioitinh, setGioitinh] = useState('')
  const [phone , setPhone] = useState('')
  const [quoctich , setQuoctich] = useState('')
  const [tinhthanh , setTinhthanh] = useState('')
 
  let push_dbo , push_gioitinh , push_phone , push_quoctich , push_tinhthanh = ''
  dob === '' ? push_dbo = detailInfo.dob : push_dbo = dob
  gioitinh === '' ? push_gioitinh = detailInfo.gioitinh : push_gioitinh = gioitinh
  phone === '' ? push_phone = detailInfo.phone : push_phone = phone
  quoctich === '' ? push_quoctich = detailInfo.quoctich : push_quoctich = quoctich
  tinhthanh === '' ? push_tinhthanh = detailInfo.tinhthanh : push_tinhthanh = tinhthanh
  const handleCancelBtn = (e) => {
    toggleCancel(e);
  };

  const handleSaveBtn = (e) => {
    toggleSave(e);
    // Call API chinh sua lai du lieu detail
    DetailInfoUser.editDetailInfo(userData.id,{
      "user_id" : userData.id,
      "phone" : push_phone,
      "dob" : push_dbo,
      "gioitinh" : push_gioitinh,
      "quoctich" : push_quoctich,
      "tinhthanh" : push_tinhthanh
    })
    // Chinh sua du lieu o store :
    dispatch(getDetailByID({
      ...detailInfo,
      "phone" : push_phone,
      "dob" : push_dbo,
      "gioitinh" : push_gioitinh,
      "quoctich" : push_quoctich,
      "tinhthanh" : push_tinhthanh
    }))
  };


  
  
  return (
    <div className="info-container-mini">
      <div className="info-container-half">
        <TextField
          label="Email"
          margin="normal"
          variant="outlined"
          fullWidth
          disabled
          defaultValue={userData.email}
        />
        <TextField
          defaultValue={detailInfo.dob}
          label="Ngày sinh"
          type="date"
          margin="normal"
          variant="outlined"
          fullWidth
          onChange = {(e) => setDob(e.target.value)}
        />
        <FormControl variant="outlined" style={{ width: "100px" }}>
          <InputLabel>Giới tính</InputLabel>
          <Select label="Giới tính" defaultValue={detailInfo.gioitinh}
          onChange = {(e) => setGioitinh(e.target.value)}>
            <MenuItem value={1}>Nam</MenuItem>
            <MenuItem value={2}>Nữ</MenuItem>
            <MenuItem value={3}>Khác</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="info-container-half">
        <TextField
          label="Điện thoại"
          margin="normal"
          variant="outlined"
          fullWidth
          defaultValue={detailInfo.phone}
          onChange ={(e)=> setPhone(e.target.value)}
        />
        <TextField
        defaultValue={detailInfo.quoctich}
          label="Quốc tịch"
          margin="normal"
          variant="outlined"
          fullWidth
          onChange= {(e) => setQuoctich(e.target.value)}
        />
        <TextField
          defaultValue={detailInfo.tinhthanh}
          label="Tỉnh thành"
          margin="normal"
          variant="outlined"
          fullWidth
          onChange = {(e) => setTinhthanh(e.target.value)}
        />

        <span>
          <Button
            variant="contained"
            color="default"
            size="medium"
            onClick={(e) => handleCancelBtn(e)}
          >
            Hủy
          </Button>
        </span>
        <span style={{ marginLeft: "15px" }}>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            startIcon={<SaveIcon />}
            onClick={(e) => handleSaveBtn(e)}
          >
            Lưu
          </Button>
        </span>
      </div>
    </div>
  );
}

export default function Thongtincanhan({ userData }) {
  const [clickToggleEdit, setClickTogleEdit] = useState(false);

  const CancelBtn = (event) => {
    setClickTogleEdit(false);
    event.stopPropagation();
  };
  const toggleSave = (e) => {
    setClickTogleEdit(false);
    e.stopPropagation();
  };

  return (
    <div className="info-container" onClick={() => setClickTogleEdit(true)}>
      {clickToggleEdit ? (
        <EditForm
          userData={userData}
          toggleCancel={(event) => CancelBtn(event)}
          toggleSave={(e) => toggleSave(e)}
        />
      ) : (
        <Default userData={userData} />
      )}
    </div>
  );
}

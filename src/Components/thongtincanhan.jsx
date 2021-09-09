import React from "react";
import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";

export function Default(props) {
  return (
    <div className="edit-form">
      <div className="info-container-half">
        <div className="info-container-left">
          Email : <br />
          Ngay sinh : <br />
          Gioi tinh : <br />
        </div>
        <div className="info-container-right"></div>
      </div>
      <div className="info-container-half">
        <div className="info-container-left">
          Dien thoai : <br />
          Quoc tich : <br />
          Dia chi : <br />
        </div>
        <div className="info-container-right"></div>
      </div>
    </div>
  );
}

export function EditForm(props) {
  return (
    <div className="info-container-mini">
        <div className="info-container-half">
        <TextField
          label="Email"
          margin="normal"
          variant="outlined"
          fullWidth
        />

        <TextField
          label="Ngay sinh"
          defaultValue = "nhap ngay sinh"
          type = "date"
          margin="normal"
          variant="outlined"
          fullWidth
        />
    <FormControl variant="outlined" style = {{width : '100px'}}>
        <InputLabel >Gender</InputLabel>
        <Select
          label="Gender"
        >
          <MenuItem value={1}>Nam</MenuItem>
          <MenuItem value={2}>Nu</MenuItem>
          <MenuItem value={3}>Khac</MenuItem>
        </Select>
      </FormControl>
        </div>
        <div className="info-container-half">
        <TextField
          label="Phone"
          margin="normal"
          variant="outlined"
          fullWidth
        />
           <TextField
          label="Quoc tich"
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Tinh thanh"
          margin="normal"
          variant="outlined"
          fullWidth
        />
        </div>
    </div>
  );
}

export default function Thongtincanhan(props) {
  const [clickToggleEdit, setClickTogleEdit] = useState(true);

  return (
    <div className="info-container" onClick={() => setClickTogleEdit(true)}>
      {clickToggleEdit ? <EditForm /> : <Default />}
    </div>
  );
}

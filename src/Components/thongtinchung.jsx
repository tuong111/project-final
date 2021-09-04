import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import SaveIcon from '@material-ui/icons/Save';





const Default = ({ userName }) => {

    return (
        <div className="info-container-right-text">
            <h3>
                {userName}
            </h3>
            <p className="text-content">
                Chuc Danh : <br></br>
                Nam kinh nghiem : <br></br>
                Cong ty gan day nhat : <br></br>
                Bang cap cao nhat : <br></br>
            </p>
        </div>
    )

}


export function EditForm({ userData ,toggleCancel, toggleSave}) {
    const handleCancelBtn = (e) => {
        toggleCancel(e)
    }

    const handleSaveBtn = (e) => {
        toggleSave(e)
    }
    return (
        <div className="edit-form">
            <div className="edit-form-item">
                <TextField required id="standard-required" label="First Name" defaultValue={userData.['first name']} />
                <TextField required id="standard-required" label="Last Name" defaultValue={userData.['last name']} />
            </div>
            <div className="edit-form-item">
                <TextField required id="standard-required" label="Chuc Danh" defaultValue="" fullWidth />
            </div>
            <div className="edit-form-item">
                <TextField required id="standard-required" label="So Nam Kinh Nghiem" defaultValue="" fullWidth />
            </div>
            <div className="edit-form-item">
                <div className="edit-form-btn">
                    <span>
                        <Button
                            variant="contained"
                            color="default"
                            size="medium"
                            onClick = {(e)=> handleCancelBtn(e)}

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
                            onClick = {(e) => handleSaveBtn(e)}
                        >
                            Save
                        </Button>
                    </span>
                </div>
            </div>
        </div>

    )
}



export default function Thongtinchung({ userName, userData }) {


    const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEammMOQs3IJqbPrHVM-AjSgXJX1jLucdpZA&usqp=CAU"
    const [clickToggleEdit, setClickTogleEdit] = useState(false)

    const CancelBtn = (event) => {
        setClickTogleEdit(false)
        event.stopPropagation()
    }
    const toggleSave = (e) => {
        setClickTogleEdit(false)
        e.stopPropagation()
    }

    return (
        <div className="info-container" onClick={()=> setClickTogleEdit(true)}>
            <div className="info-container-left">
                <img src={img} alt="" />
                <br />
                <Button variant="contained" color="primary" className={clickToggleEdit ? '' : "inactive"}>
                    Edit
                </Button>
            </div>
            <div className="info-container-right">
                {
                    clickToggleEdit ? <EditForm userData={userData} toggleCancel={(event) => CancelBtn(event)}
                    toggleSave = {(e)=> toggleSave(e)}/> : <Default userName={userName} />
                }

            </div>
        </div>
    )
}

import { Button, styled } from '@material-ui/core';
import { orange, purple } from '@material-ui/core/colors';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Header from './../Components/header';
import jobServices from './../Services/getjobListAPI';

export default function JobDetail(props) {
    
    const { id } = useParams()
    const [jobdetail , setJobDetail] = useState({})
    useEffect(() => {
        jobServices.getJobByID(id)
          .then(
            (res) => {
                setJobDetail(res)
            }
          )
      }, [id]);
    
      const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        width : '200px',
        '&:hover': {
          backgroundColor: purple[700],
        },
      }));

      const AddButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(orange[500]),
        width : '200px',
        marginTop : '20px',
        backgroundColor: orange[500],
        '&:hover': {
          backgroundColor: orange[700],
        },
      }));

    return (
        <div className="job-detail">
            <Header userID={localStorage.getItem("id")} />
            <div className="job-detail-container mt-50">
                <div className="job-detail__header">
                    <div className="job-detail__header-logo">
                        <img src={jobdetail.logo} alt="" />
                    </div>
                    <div className="job-detail__content">
                        <div className="job-detail__content-l ml-20">
                            <h3>{jobdetail.company}</h3>
                            <h4>Luong : {jobdetail.salary}</h4>
                            <h4>Dia diem lam viec : </h4>
                        </div>
                        <div className="job-detail__content-r">
                        <ColorButton variant="contained">Ung tuyen</ColorButton><br />
                        <AddButton variant="contained"> Luu viec lam</AddButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


import { Card, Grid } from '@material-ui/core'
import React from 'react'
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';




export default function HotJobItem({ x, groupData }) {
  let Arr = [...groupData]

  var filtered = Arr.filter(function (el) {
    return el != null;
  });

  const history = useHistory()
  const ViewDetailjob = (value) => {
    history.push(`/jobdetail/${value}`)
  }
  return (
    <div className="slide" style={{ transform: `translateX(${x}%)` }}>

      {
        filtered?.map(
          (item, index) => {
            return (
              <Grid item xs={3}>
                <Card style={{ textAlign: 'center', minHeight: '180px', border : '1px solid #74b9ff', justifyContent: 'center', alignContent : 'center', display : 'flex', flexDirection : 'row'}}>
                  <div className="slide-card-content">
                    <div className="slide-card-img">
                    <img src={item.logo} alt="" />
                    </div>
                    <div className="slide-card-detail">
                      <p>
                        <b>Công ty :</b>  {item.company} <br />
                        <b>Công việc : </b> {item.jobname} <br />
                        <b>Lương :</b> {item.salary} VNĐ
                      </p>
                    <div className="slide-card-btn">
                  <Button variant="outlined" color = "primary" onClick = {() => ViewDetailjob(item.id) } >Xem chi tiết</Button>
                  </div>
                    </div>
                  </div>
                </Card>
              </Grid>
            )
          }
        )
      }

    </div>

  );
}

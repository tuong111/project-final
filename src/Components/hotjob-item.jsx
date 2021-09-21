
import { Card, Grid } from '@material-ui/core'
import React from 'react'
import { Button } from '@material-ui/core';




export default function HotJobItem({ key, data, x, groupData }) {
  let Arr = [...groupData]

  var filtered = Arr.filter(function (el) {
    return el != null;
  });

  return (
    <div className="slide" style={{ transform: `translateX(${x}%)` }}>

      {
        filtered?.map(
          (item, index) => {
            return (
              <Grid item xs={3}>
                <Card style={{ textAlign: 'center', minHeight: '150px', background :'yellow'}}>
                  <p>
                    {item.company} <br />
                    {item.jobname} <br />
                    Luong :{item.salary}
                  </p>
                  <Button variant="contained" size="small" color = 'primary'>
                    Ung tuyen
                  </Button>
                </Card>
              </Grid>
            )
          }
        )
      }

    </div>

  );
}

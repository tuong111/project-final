
import { Button } from '@material-ui/core';
import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import HotJobItem from './hotjob-item';


export default function JobCarousel(props) {
    let jobList = useSelector(state => state.jobList.jobList)

    // Chia mang lon thang mang 3 item nho :
    let newJoblist = [...jobList]
    
    let Arr = []
    let i = 0
    while(i < newJoblist.length){
        Arr.push([newJoblist[i],newJoblist[i+1],newJoblist[i+2],newJoblist[i+3]])
        i = i+4
    }

    

    const [x, setx] = useState(0)

    const goLeft = () => {
       (x ===0) ? setx(-100 * (Arr.length-1)) : setx(x + 100)
    }

    const goRight = () => {
       (x=== -100 * (Arr.length-1)) ? setx(0) : setx( x - 100) 
    }
    return (
        <div className="jobcarousel">
        <div className="slider">
            
      {
          Arr?.map(
            (item , index) => {
              return (
                  <HotJobItem key = {index} data ={item} groupData = {Arr[index]} x = {x}/>
              )
            }
          )
        }
        
            
        </div>
        <div className="jobcarousel-btn">
        <Button variant="outlined" onClick = {() => goLeft()}> PREV </Button>
        <Button variant="outlined" onClick = {() => goRight()}>NEXT </Button>
        </div>
        </div>
    )
}


import { Button } from '@material-ui/core';
import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import HotJobItem from './hotjob-item';


export default function JobCarousel(props) {
    let jobList = useSelector(state => state.jobList.jobList)

    // Chia mang lon thang mang 4 item nho :
    let newJoblist = [...jobList]
    let hotJobList = newJoblist.filter(
      (item) => item.hotjob === 1
    )
      

    let Arr = []
    let i = 0
    while(i < hotJobList.length){
        Arr.push([hotJobList[i],hotJobList[i+1],hotJobList[i+2],hotJobList[i+3]])
        i = i+4
    }

    

    const [x, setx] = useState(0)
    const [current , setCurrent] = useState(1)

    const goLeft = () => {
       (x ===0) ? setx(-100 * (Arr.length-1)) : setx(x + 100);

       (current === 1) ? setCurrent(Arr.length) : setCurrent(current - 1)
       
    }

    const goRight = () => {
       (x=== -100 * (Arr.length-1)) ? setx(0) : setx( x - 100) ;

       (current === Arr.length) ? setCurrent(1) : setCurrent(current + 1)
    }
    return (
        <div className="jobcarousel mt-50">
          <div className="jobcarousel-title">
            <h3>
              DANH SÁCH VIỆC LÀM ĐANG HOT
            </h3>
          </div>
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
        <Button variant="outlined" onClick = {() => goLeft()}> {`<--`} </Button>
        <span> {current}/{Arr.length} </span>
        <Button variant="outlined" onClick = {() => goRight()}> {`-->`} </Button>
        </div>
        </div>
    )
}

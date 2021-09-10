import React from 'react'
import Header from '../Components/header'
import { useSelector } from 'react-redux';



export default function Home(props) {
    const user = useSelector(state => state.user.user)
    console.log(user);
    return (
        <div className="home">
            <Header userID = {localStorage.getItem('id')}/>
        </div>
    )
}

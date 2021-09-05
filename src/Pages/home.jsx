import React from 'react'
import Header from '../Components/header'


export default function Home(props) {
    
    return (
        <div className="home">
            <Header userID = {localStorage.getItem('id')}/>
        </div>
    )
}

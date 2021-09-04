import React from 'react'
import Header from '../Components/header'


export default function Home(props) {
    
    return (
        <div className="home">
            <Header 
            userName = {localStorage.getItem('userName')}
            />
        </div>
    )
}

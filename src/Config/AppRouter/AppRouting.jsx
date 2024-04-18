import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from '../../Screens/Home'


const AppRouting = () =>{
    return(
        <>
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        
        </Router>
        
        </>
    )
}

export default AppRouting
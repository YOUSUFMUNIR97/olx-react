import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from '../../Screens/Home'
import CategoriesDetail from '../../Screens/CategoriesDetail'
import Login from '../../Components/Login'


const AppRouting = () =>{
    return(
        <>
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/CategoriesDetail' element={<CategoriesDetail/>}/>
                {/* <Route path='Login' element={<Login/>}/> */}
            </Routes>
        
        </Router>
        
        </>
    )
}

export default AppRouting
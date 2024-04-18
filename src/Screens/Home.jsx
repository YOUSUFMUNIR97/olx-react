import React from 'react'
import MainHeader from '../Components/MainHeader'
import './Home.css'
import SabHeader from '../Components/SabHeader'
import { Input } from '@mui/material'

const Home = () => {
  return (
    <>
    <div className='mainhead'>
    <img src="https://www.arabadonline.com/uploads/articles_uploads/olx_logo.png" height='50px' />
    <MainHeader/>
    </div>
    
    <div>
    <SabHeader/>
    </div>


    </>
  )
}

export default Home
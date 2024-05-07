import React from 'react'
import MainHeader from '../Components/MainHeader'
import './Home.css'
import SabHeader from '../Components/SabHeader'
import { Input } from '@mui/material'
import SMTags from '../Components/SMTags'
import SMSlider from '../Components/SMSlider'
import Allcategories from '../Components/Allcategories'
import Footer from '../Components/Footer'
import TopFooter from '../Components/TopFooter'
import MobilePhones from '../Components/MobilePhones.jsx'
import SMCard from '../Components/SMCard.jsx'

const Home = () => {
  return (
    <div style={{margin:"0px 10px"}}>
      <div classNameName='mainhead'>
        <img src="https://www.arabadonline.com/uploads/articles_uploads/olx_logo.png" height='50px' />
        <MainHeader />
      </div>

      <div>
        <SabHeader />
      </div>

      <div>
        <SMTags />
      </div>

      <div>
        <SMSlider />
      </div>

      <div>
        <Allcategories />
      </div>

    <div>
      <MobilePhones/>
    </div>

    <div>
      <SMCard/>
    </div>
      
      <div>
        <TopFooter />
      </div>


      <div>
        <Footer />
      </div>


    </div>
  )
}

export default Home
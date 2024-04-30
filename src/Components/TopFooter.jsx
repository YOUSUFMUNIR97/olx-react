import React from 'react'
import topfooterimage from '../assets/images/footerimage.webp'
import { SocialIcon } from "react-social-icons";
import appstore from '../assets/images/appstore.svg'
import googleplay from '../assets/images/google play.svg'
import appgallery from '../assets/images/app gallery.svg'
// import logo from '../assets/images/'
import './TopFooter.css'

const TopFooter = () => {
    return (
        <>

            <div className="row mt-4" style={{backgroundColor:"#ebeeef"}}>

                <div className="col-md-4">
                    <img style={{height:'100%', width:'100%'}} src={topfooterimage} alt="" />
                </div>

                <div style={{margin:'2.8rem 0 1.6rem'}}className="col-md-4">
                    <h1 >Try the Olx</h1>

                    <h6>Buy, sell and find just about anything using the app on your mobile.</h6>
                </div>

              
                <div className="col-md-4" style={{borderLeft:"0.2rem solid rgba(0, 47, 52, .2)"}}>
                    <div>
                        <h4 className="tagline">
                            GET YOUR APP TODAY.</h4>
                        <div className="appIcons">
                            <img className='icons' src={appstore} alt="" />
                            <img className='icons' src={googleplay} alt="" />
                            <img className='icons' src={appgallery} alt="" /> 
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default TopFooter
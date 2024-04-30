import React from 'react'
import { SocialIcon } from "react-social-icons";
// import logo from '../assets/images/'
import './Footer.css'
import appstore from '../assets/images/appstore.svg'
import googleplay from '../assets/images/google play.svg'
import appgallery from '../assets/images/app gallery.svg'

const Footer = () => {
    return (
        <>
            <div id="footer-wrap">
                <footer className="footer">
                    <div className="top-footer">
                        <div className="row">

                            <div className="col-md-2 col-sm-6 mb-3">
                                <h6>POPULAR CATEGORIES</h6>
                                <ul className="footer-link">
                                    <li>
                                        <a className="text-white" href="#" title="Home">
                                            Cars
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white" href="#" title="Home">
                                            Flat for Rent
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white" href="#" title="Home">
                                            Mobile Phones
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white" href="#" title="Home">
                                            Jobs
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-2 col-sm-6 mb-3">
                                <h6>TRENDING SEARCHES</h6>
                                <ul className="footer-link">
                                    <li>
                                        <a className="text-white" href="#" title="Faq">
                                            Bikes
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white" href="#" title="Blog">
                                            Watches
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white" href="#" title="Home">
                                            Books
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white" href="#" title="Home">
                                            Dogs
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-2 col-sm-6 mb-3">
                                <h6>ABOUT US</h6>
                                <ul className="footer-link">
                                    <li>
                                        <a className="text-white" href="#" title="Faq">
                                            About Dubizzle Group
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white" href="#" title="Blog">
                                            Olx Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white" href="#" title="Home">
                                            Contact Us
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white" href="#" title="Home">
                                            Olx for Business
                                        </a>
                                    </li>
                                </ul>
                            </div>



                            <div className="col-md-2 col-sm-6 mb-3">
                                <h6>OLX</h6>
                                <ul className="footer-link">
                                    <li>
                                        <a className="text-white" href="#" title="Faq">
                                            Help
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white" href="#" title="Blog">
                                            Sitemap
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white" href="#" title="Home">
                                            Terms of Use
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white" href="#" title="Home">
                                            Privacy Policy
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-md-2 col-sm-6 mb-3">
                                <div className="footer-logo">
                                    <h4 className="tagline">
                                        Follow Us.</h4>
                                    <div className="icons">
                                        <SocialIcon
                                            href="#"
                                            title="Facebook"
                                            network="facebook"
                                            bgColor="#002f34"
                                        />
                                        <SocialIcon
                                            href="#"
                                            title="Link"
                                            network=""
                                            bgColor="#002f34"
                                        />
                                         <SocialIcon
                                            href="#"
                                            title="Link"
                                            network="twitter"
                                            bgColor="#002f34"
                                        />
                                    </div>
                                    <div className="appIcons">
                                        <img src={appstore} alt="" />
                                        <img src={googleplay} alt="" />
                                        <img src={appgallery} alt="" /> 
                                    </div>
                                </div>
                            </div>

                           
                        </div>
                    </div>
                    <div className="bottom-footer">
                        <div className="row">
                            <div>
                                <p className="copyright pt-3 text-left">
                                Free Classifieds in Pakistan  . © 2006-2024 OLX
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer
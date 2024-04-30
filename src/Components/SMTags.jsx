import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'

const SMTags = () => {
    const styles = {
        navtage: {
            // Regular styles
            border: 'none',
        },
        navtageHover: {
            // Styles for :hover pseudo-class
            border: 'none',
        }
    };    
    
    return (
        <>
            <ul className="navtage nav nav-tabs" style={{border: 'none', fontSize:'1.4rem', width:'100%', height:"100%", alignItems:'center', marginTop:'5px',}}>
            <li className="nav-item dropdown" >
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#"  aria-expanded="false">ALL CATEGORIES</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                </li>

                <li className="nav-item" style={{border:"none"}}>
                    <a className="nav-link" >Mobile Phones</a>
                </li>
                
                <li className="nav-item" style={{border:"none"}}>
                    <a className="nav-link" href="#">Cars</a>
                </li>
                <li className="nav-item" style={{border:"none"}}>
                    <a className="nav-link" href="#">Motorcycles</a>
                </li>

                <li className="nav-item" style={{border:"none"}}>
                    <a className="nav-link" href="#">House</a>
                </li>

                <li className="nav-item" style={{border:"none"}}>
                    <a className="nav-link" href="#">Video-Audio</a>
                </li>

                
                <li className="nav-item" style={{border:"none"}}>
                    <a className="nav-link" href="#">Tablet</a>
                </li>

                <li className="nav-item" style={{border:"none"}}>
                    <a className="nav-link" href="#">Land & Plots</a>
                </li>
            </ul>

        </>
    )


    }


    


export default SMTags
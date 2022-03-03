import React , { component } from 'react'
import "./Navigation.css"
import Skills from './Skills'
import { Link, animateScroll as scroll } from "react-scroll";


const Navigation = () => {
    return(
        // <div style={{ padding: '5px', fontSize: '30px' }}>
            // <nav style={{fontSize: '30px',display: 'flex', justifyContent: 'flex-end',gap: '30px' }}>
            // <p >Photo</p >
            // <p  style={{ marginRight: 'auto' }}>Anquab Khan</p >
            // <p  >Home</p >
            // <p className='f3 link dim black underline pa3 pointer' >About</p >
            // <p  >Projects</p >
            // <p  >Contact</p >
            // </nav>
        // </div>
        
            <navbar className= 'bg-transperent' style={{ height: '60px' ,position: 'sticky', top: '0', zIndex: '100'}}>
            <nav className='navbar font-weight-bold'>
            <div className="container-fluid navbar navbar-default navbar-static fw-bold"  style={{fontSize: '20px',display: 'flex', justifyContent: 'flex-end',gap: '30px' }}>
                {/* <a className='navbar-brand' href="#">Navbar</a> */}
                <a style={{ marginRight: 'auto' }} className='navbar-brand text-warning ' >Anquab Khan</a>
                <a className='navbar-brand text-warning ' href={"#Home"}>About</a>
                {/* <a className='navbar-brand' href="#">Education</a> */}
                <a className='navbar-brand text-warning ' href={"#Skills"}>Technologies</a>
                <a className='navbar-brand text-warning ' href={"#Projects"}>Projects</a>
            </div>

            </nav>

            </navbar>

        // <section id="Sample">Sample section</section>
        
        
        
        
    )
}
export default Navigation 
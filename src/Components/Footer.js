import React, { components } from "react";
import LinkedinOriginal from 'devicons-react/icons/LinkedinOriginal'
import GithubOriginal from 'devicons-react/icons/GithubOriginal'
import FacebookOriginal from 'devicons-react/icons/FacebookOriginal'
import TwitterOriginal from 'devicons-react/icons/TwitterOriginal'
import LinkedinPlain from 'devicons-react/icons/LinkedinPlain'




const Footer = () => {
    return(
        <footer className="bg-black position-relative"  >
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div>
                    <h1 style={{ padding: '0 94px 0 0'}}>CONTACT</h1>
                    <h6>EMAIL: anquabkhan@gmail.com</h6>
                    <h6 style={{ padding: '0 85px 0 0'}}>Phone1: 8007382629</h6>
                    <h6 style={{ padding: '0 85px 0 0'}}>Phone2: 8329686093</h6>
                </div>
                <div>
                    <h1 style={{padding: '0 0 0 1060px'}}>SOCIAL</h1>
                    <div style={{display: 'flex', justifyContent: 'flex-end' , gap: '1px'}}>
                        {/* <img  src={require("../images/instagram.png")} style={{  height: '2.5%', width: '2.5%', cursor: 'pointer'}}></img> */}
                        <FacebookOriginal onClick={event => window.open("https://www.facebook.com/anquab/")}style={{ height: '2.5%', width: '2.5%', cursor: 'pointer'}}/>
                        <LinkedinOriginal className="" onClick={event =>  window.open('https://www.linkedin.com/in/anquab-khan-02bb21140/')} style={{ height: '2.5%', width: '2.5%', cursor: 'pointer'}}/>
                        <GithubOriginal onClick={event => window.open("https://github.com/anquabkhan")} style={{ height: '2.5%', width: '2.5%', cursor: 'pointer'}}/>
                        {/* <TwitterOriginal style={{ height: '2.5%', width: '2.5%', cursor: 'pointer'}}/> */}
                        <img onClick={event => window.open("https://www.instagram.com/anquab_khan/")}  src={require("../images/instagram.png")} style={{  height: '2.5%', width: '2.5%', cursor: 'pointer'}}></img>

                    </div>
                </div>
            </div>
        </footer>
    )

}
export default Footer ;









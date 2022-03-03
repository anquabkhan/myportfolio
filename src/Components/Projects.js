import React, {components} from "react";
// import FaceApp_image from './images/FaceApp.png'
import DevIcon from "devicon-react-svg"
import JavaOriginal from 'devicons-react/icons/JavaOriginal'
import JavascriptOriginal from 'devicons-react/icons/JavascriptOriginal'
import PythonOriginal from 'devicons-react/icons/PythonOriginal'
import COriginal from 'devicons-react/icons/COriginal'
import ReactOriginal from 'devicons-react/icons/ReactOriginal'
import Html5Original from 'devicons-react/icons/Html5Original'
import Css3Original from 'devicons-react/icons/Css3Original'
import BootstrapOriginal from 'devicons-react/icons/BootstrapOriginal'
import ExpressOrignal from 'devicons-react/icons/ExpressOriginal'
import DjangoOrignal from 'devicons-react/icons/DjangoOriginal'
import NodeOrignal from 'devicons-react/icons/NodejsOriginal'
import PostgresqlOrignal from 'devicons-react/icons/PostgresqlOriginal'
import GitOrignal from 'devicons-react/icons/GitOriginal'
import GithubOrignal from 'devicons-react/icons/GithubOriginal'
import VscodeOrignal from 'devicons-react/icons/VscodeOriginal'
import HerokuOrignal from 'devicons-react/icons/HerokuOriginal'
import "./Home.css"
import "./Project.css"

const Projects = () => {
    return(
        <div id="Projects" className='position-relative'>
            <h1 className="underline">Projects</h1>
      
        <section style={{ padding: '70px'}}>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                {/* <Image  ></Image>
                 */}
                <img src={require("../images/Abdul_FaceApp.png")} style={{width: '40%'}}></img>
                <div style={{width: '40%'}}>
                    <h3>Face-Detection Website</h3>
                    <div>
                        <NodeOrignal style={{ width: '10%'}}/>
                        <BootstrapOriginal style={{ width: '10%'}}/>
                        <ReactOriginal style={{ width: '10%'}}/>
                        <ExpressOrignal style={{ width: '10%'}}/>
                    </div>
                   
                    <p className="" style={{ fontStretch: 'unset' , fontSize: '1.5vw' }}> 
                    I created a Face-Detection website using ReactJS, NodeJS, ExpressJS, Bootstrap
                    and Clarifai Api which was able to detect peoples faces and increase the count
                    for individual user's.
                    </p> 
                    {/* <button className='btn btn-danger position-relative ' style={{ top: '6px', left: '6px', color: '#290e05'}}>
                        Projects
                    </button> */}
                    <div style={{ }}>
                        <button onClick={ event => window.open("https://github.com/anquabkhan/face")} className='btn btn-danger  ' style={{ width: '150px', color: '#290e05'}}>
                            Know More
                        </button>
                    </div>           
                </div>
               
            </div>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <p>
                    Project Detals
                </p>
                <p>
                Project Screenshot
                </p>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <p>
                   Projeect  Screenshot
                </p>
                <p>
                    Project  Detals
                </p>
            </div>
        </section>
        </div>
    )
}
export default Projects ;
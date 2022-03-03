import React, { components } from "react";
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
import "./Skills.css"

const Skills = () => {
    return( 
    // <h1>Technologies</h1>
    <div id="Skills"style={{ padding: '140 px'}} className='position-relative'>
        <h1 className="underline">Technologies</h1>
    <section style={{ padding: '70px', display: 'flex', justifyContent: 'center', gap: '100px'}}>
    <div style={{ width: '15%'}}>
        <h3>Languages</h3>
        {/* <FontAwesomeIcon icon="fa-brands fa-java" />         */}
        <JavaOriginal style={{ height: '35%', width: '50%'}} />
        <JavascriptOriginal  style={{ height: '35%', width: '50%'}} />
        <PythonOriginal  style={{ height: '35%', width: '50%'}} />
        <COriginal  style={{ height: '35%', width: '50%'}} />

        <p>My favorite languages for
           Web-development, Data Science
           and Software-development.
        </p>
    </div>
    <div style={{ width: '15%'}}>
        <h3>Front-End</h3>
        <ReactOriginal icon="java" style={{ height: '35%', width: '50%'}} />
        <BootstrapOriginal  style={{ height: '35%', width: '50%'}} />
        <Html5Original  style={{ height: '35%', width: '50%'}} />
        <Css3Original  style={{ height: '35%', width: '50%'}} />
        <p className="fw-normal">My favorite technologies 
            for front-end web development
            and web design.
        </p>
    </div>
    <div style={{ width: '15%'}}>
        <h3>Back-End</h3>
        <NodeOrignal  style={{ height: '35%', width: '50%'}} />
        <ExpressOrignal  style={{ height: '35%', width: '50%'}} />
        <PostgresqlOrignal  style={{ height: '35%', width: '50%'}} />
        <DjangoOrignal  style={{ height: '35%', width: '50%'}} />
        <p>My preffered technologies for back-end web 
            development and database mangement.
        </p>
    </div>
    <div style={{ width: '15%'}}>
        <h3>Tools</h3>
        <GitOrignal  style={{ height: '35%', width: '50%'}} />
        <GithubOrignal  style={{ height: '35%', width: '50%'}} />
        <HerokuOrignal  style={{ height: '35%', width: '50%'}} />
        <VscodeOrignal  style={{ height: '35%', width: '50%'}} />
        <p>My favorite tools for version control, code editing, and container orchestration.</p>
    </div>
    </section> 
    </div>
    )
}
export default Skills 











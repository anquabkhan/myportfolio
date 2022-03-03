import React , { component } from 'react'
import "./Home.css"
const Home = () => {
    return(
        <section id= "Home"className='position-relative' style={{height: '100%'}}>
            <div >
                <img  src={require("../images/Profile_pic.png")} style={{  width: '15%'}}></img>
               
                <h3 className='headingPrimary position-relative text-danger' style={{}}>
                    My name is Anquab Khan
                </h3>
                <p   style={{fontSize: '1.8rem'}}>
                    I am a Dedicated IT professional with more than three years 
                    of experience in the industry. I am also a BTECH in CSE from Shri Ramdeobaba collage of Engineering and Management 
                    a globally accredited collage.
                    A Web-development enthusiast with knowledge
                    and hands-on experience in Javascript, React.js, Node.js,
                    and Express.js. Also a creative and hard-working individual 
                    with strong collaboration and communication skills.
                </p>
                <div className='home-hero__cta position-relative'>
                        <a  className='navbar-brand text-black ' href= {"#Projects"}>
                            <button  className='btn btn-danger position-relative ' style={{ top: '6px', left: '6px', color: '#290e05'}}>
                                Projects
                            </button>
                            
                        </a>
                        {/* <a href="https://twitter.com/saigowthamr/" target="_blank" rel="noreferrer noopener">
                            Twitter
                        </a>
                    */}
                </div>           
            </div>
        </section>
    )
}






export default Home ;

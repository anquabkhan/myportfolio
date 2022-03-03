import logo from './logo.svg';
import './App.css';
import { Component } from 'react/cjs/react.production.min';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap"; // <-- JS File
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Particles from "react-tsparticles";
import Myparticles from './Components/Myparticles';


class App extends Component {
  constructor(){
    super()
    this.state = {
      input: ''
    }
  }
  particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  particlesLoaded = (container) => {
    console.log(container);
  };
  render(){
    return(
      <div className="App position-relative" style={{display: 'flex',flexDirection: 'column', gap: '20px', backgroundColor: '#3fb0ac'}}>
        {/* <Particles id="tsparticles" url="http://foo.bar/particles.json" init={this.particlesInit} loaded={this.particlesLoaded} /> */}
        < Navigation />
        < Myparticles  particlesInit = { this.particlesInit} particlesLoaded = {this.particlesLoaded}/>        
        < Home />
        {/* < Education /> */}        
        < Skills />
        < Projects />
        < Footer />
        
       
    </div>
    )   
  }   
}  

export default App;

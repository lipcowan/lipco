import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import React, {Component} from 'react'
import { Element } from 'react-scroll'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons'
import { faBars, faForward, faArrowCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import './App.css'

library.add(faGithub, faLinkedin, faMedium, faEnvelope, 
  faArrowAltCircleUp,faBars, faForward, faArrowCircleRight, faArrowCircleLeft)

class App extends Component {
  render(){
    return (
      <div className="lipco_app">
        <Header/>
        <Main/> 
        {/* Main contains the entire contents with scroll elements */} 
        <Element name='contactMe'>
          <Footer/>
        </Element>
      </div>
    )
  }
}

export default App;

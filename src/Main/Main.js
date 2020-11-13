import { Element } from 'react-scroll'
import Statement from './LandingBio/Statement'
import About from './AboutMe/About'
import ProjectSection from './Projects/ProjectSection'

function Main() {
    
    return (
        <div id='dev_main'>
            <Statement/>
            <Element name='aboutMe'>
            <About/>
            </Element>
            <Element name='ProjectArea'>
            <ProjectSection/>
            </Element>                
        </div>
    )
}
export default Main
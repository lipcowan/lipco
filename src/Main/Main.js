import { Element } from 'react-scroll'
import Statement from './LandingBio/Statement'
import About from './AboutMe/About'
import ProjectViewer from './Projects/ProjectViewer'

function Main() {
    
    return (
        <div id='dev_main'>
            <Statement/>
            <Element name='aboutMe'>
            <About/>
            </Element>
            <Element name='projects'>
            <ProjectViewer/>
            </Element>                
        </div>
    )
}
export default Main
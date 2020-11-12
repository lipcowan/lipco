import React, {Component} from 'react'
import Statement from './LandingBio/Statement'
import Bio from './AboutMe/Bio'
import ProjectViewer from './Projects/ProjectViewer'

export default class Main extends Component {
    render() {
        return (
            <div id='dev_main'>
                <Statement/>
                <Bio/>
                <ProjectViewer/>
            </div>
        )
    }
}
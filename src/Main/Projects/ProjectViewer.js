// view projects in carosel? 
import React, {Component} from 'react'
import Project from './Project'
import '../Main.css'

export default class ProjectViewer extends Component {
    render() {
        return (
            <div id='projectViewer'>
                <h4>Recent Projects (MVP)</h4>
                {<Project/>}
            </div>
        )
    }
} 
import React, {Component} from 'react'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div id='dev_header'>
                <div id='dev_header_h1'>
                    <h1>LipCo</h1>
                </div>
                <div id='dev_header_nav'>
                    <ul>
                        <li><h4>_projects</h4></li>
                        <li><h4>_about me</h4></li>
                    </ul>
                </div>
            </div>
        )
    }
}
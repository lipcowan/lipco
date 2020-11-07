import React, {Component} from 'react'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div id='dev_header'>
                <div id='dev_header_h1'>
                    <h1>Header - LipCo Dev</h1>
                </div>
                <div id='dev_header_nav'>
                    <h4>Nav - Page1</h4>
                </div>
            </div>
        )
    }
}
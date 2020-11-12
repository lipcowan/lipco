import React, {Component} from 'react'
import ContactMe from './ContactMe'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div id='dev_footer'>
                {< ContactMe />}
            </div>
        )
    }
}
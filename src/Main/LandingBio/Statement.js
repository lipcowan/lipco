import React, { Component } from 'react'
import '../Main.css'
import Drawing from '../Images/drawing.png'

export default class Statement extends Component {
    render() {
        return (
            <div id='eyeCatcher'>
                <div id='profile'>
                    <img src={Drawing} alt='profile'/>
                </div>
                <div id='introStatement'>
                    <h2>Phillip Cowan.</h2>
                    <h4>Full Stack Developer</h4>
                    <h4>Predilection for Coffee</h4>
                    <h4>Penchant for Change</h4>
                    <h4>People call me ... Lip</h4>
                </div>
            </div>
        )
    }
}
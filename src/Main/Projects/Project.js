// format for each project as rendered
import React, {Component} from 'react'
import '../Main.css'

export default class Project extends Component {
    render() {
        return (
            <div class='projectTemplate' >
                <h4>Title</h4>
                <h4>description</h4>
                <h4>tech stack</h4>
                <h4>screenshots</h4>
                <h4>Repo Links</h4>
                <h4>Live Link</h4>
            </div>
        )
    }
}
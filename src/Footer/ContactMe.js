// all my contact info - add in the github, linkedin, and email icons 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Footer.css'

const ContactMe = () => {
    return (
        <div id='ContactInfo'>
            <a href='https://github.com/lipcowan' target='_blank' rel='noreferrer'>
                <h2>
                    <FontAwesomeIcon icon={["fab", "github"]} />
                </h2>
            </a>
            <a href='https://www.linkedin.com/in/lip-cowan/' target='_blank' rel='noreferrer'>
                <h2>
                    <FontAwesomeIcon icon={['fab','linkedin']} />
                </h2>
            </a>
            <a href='mailto:jobs@lipco.dev' target='_blank' rel='noreferrer'>
                <h2>
                    <FontAwesomeIcon icon={['far','envelope']} />
                </h2>
            </a>
        </div>
    )    
}

export default ContactMe
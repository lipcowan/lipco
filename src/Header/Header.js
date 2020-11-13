import React from 'react'
import { useSpring, animated } from 'react-spring'
import {Link} from 'react-scroll'
import './Header.css'

export default function Header() {

        const fInH = useSpring({
            opacity: 1,
            from: {opacity: 0},
            delay: 1100,
        })

        const fH = useSpring({ 
            opacity: 1,
            delay: 1300, 
            from: { opacity: 0},
          })

        const fN = useSpring({
            opacity: 1,
            delay: 1500,
            from: { opacity: 0 }
          })

        return (
            <animated.div id='dev_header' style={fInH}>
                <div id='dev_header_h1'>
                    <animated.h1 style={fH}>LipCo</animated.h1>
                </div>
                <div id='dev_header_nav'>
                    <ul>
                        <animated.li style={fN}>
                            <Link 
                                to='aboutMe'
                                activeClass='active'
                                spy={true}
                                smooth={true}
                                duration={500}
                                tabIndex='0'
                            >
                                <h4>_about</h4>
                            </Link>
                        </animated.li>

                        <animated.li style={fN}>
                            <Link 
                                to='ProjectArea'
                                activeClass='active'
                                spy={true}
                                smooth={true}
                                duration={500}
                                tabIndex='0'
                            >
                                <h4>_projects</h4>
                            </Link>     
                        </animated.li>
                        <animated.li style={fN}>
                            <Link 
                                to='contactMe'
                                activeClass='active'
                                spy={true}
                                smooth={true}
                                duration={500}
                                tabIndex='0'
                            >
                                <h4>_contact</h4>
                            </Link>
                        </animated.li>
                    </ul>
                </div>
            </animated.div>
        )
}
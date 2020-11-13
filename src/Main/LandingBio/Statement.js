import { useSpring, animated } from 'react-spring'
import '../Main.css'
import Drawing from '../Images/drawing.png'

const Statement = () => {
    const fP = useSpring({ 
        opacity: 1, 
        from: {opacity:0}, 
        delay: 1100, 
    })
    const fH2 = useSpring({ 
        opacity: 1, 
        from: {opacity:0}, 
        delay: 1300, 
    })
    const fH4f = useSpring({ 
        opacity: 1, 
        from: {opacity:0}, 
        delay: 1900, 
    })
    const fH4s = useSpring({ 
        opacity: 1, 
        from: {opacity:0}, 
        delay: 2300, 
    })
    const fH4t = useSpring({ 
        opacity: 1, 
        from: {opacity:0}, 
        delay: 2700, 
    })
    const fH4l = useSpring({ 
        opacity: 1, 
        from: {opacity:0}, 
        delay: 3100, 
    })

    const fsuspense = useSpring({ 
        opacity: 1, 
        from: {opacity:0}, 
        delay: 3500, 
    })

    const fname = useSpring({ 
        opacity: 1, 
        from: {opacity:0}, 
        delay: 4000, 
    })

    return (
            <div id='eyeCatcher'>
                <div id='profile'>
                    <animated.img style={fP} src={Drawing} alt='profile'/>
                </div>
                <div id='introStatement'>
                    <animated.h2 style={fH2}>Phillip Cowan.</animated.h2>
                    <animated.h4 style={fH4f}>Full Stack Developer</animated.h4>
                    <animated.h4 style={fH4s}>Predilection for Coffee</animated.h4>
                    <animated.h4 style={fH4t}>Penchant for Change</animated.h4>
                    <animated.h4 style={fH4l}>People call me 
                        <animated.span style={fsuspense}>... </animated.span> 
                        <animated.span id='emName' style={fname}>Lip</animated.span>
                    </animated.h4>
                </div>
            </div>
    )
}

export default Statement
        
import { useState } from 'react'
import { useTransition, animated, config } from 'react-spring'
import Project from './Project'
import { projectData } from '../../data/projectData'
import '../Main.css'

const ProjectViewer = () => {
    const [ index, set ] = useState(0)
    const screenTransitions = useTransition(projectData[index], item => item.id, {
      from: { opcaity: 0, transform: 'translate3d(100%, 0, 0', display: 'none' },
      enter: { opacity: 1, transform: 'translate3d(0%, 0, 0', display: 'flex' },
      leave: { opacity: 0 },
      config: { ...config.stiff, clamp: true },
    })
  
    const nextProject = () => {
      set(projectData.length - 1 === index ? 0 : index + 1)
    }
    return (
      <div id='ProjectViewer'>
        {screenTransitions.map(({ item, props, key }) => (
          <animated.div
            className='viewer_wrapper'
            key={key}
            style={props}
          >
            <Project images={item.images} content={item.content} nextProjectHandler={nextProject} />
          </animated.div>
        ))}
      </div>
    )
  }
  
  export default ProjectViewer
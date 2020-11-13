import { useState } from 'react'
import { useSpring, animated, useTransition, props } from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../Main.css'

const Project = ({ images, content, nextProjectHandler }) => {
  const [ index, setIndex ] = useState(0)
  const animatedPhotos = useTransition(images[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: {opacity: 0}
  })

  const fIn = useSpring({ 
    delay: 0, 
  })

  const nextImage = () => {
    setIndex(images.length - 1 === index ? 0 : index + 1)
  }

  const prevImage = () => {
    setIndex(index === 0 ? (images.length - 1) : index - 1)
  }

  return (
    <div id='ProjectOverview'>
      <div id='ProjectPhotos'>
        {animatedPhotos.map(({ item, props, key }) => (
          <animated.div 
            key={key} 
            className='Project__image'
            style={fIn}
          >
            <button 
              className='Project__icon'
              onClick={prevImage}
              type='button'
            >
              <FontAwesomeIcon className='image_arrow' icon='arrow-circle-left'/>
            </button>
            <img src={item.url} alt={item.url}/>
            <button 
              className='Project__icon'
              onClick={nextImage}
              type='button'
            >
              <FontAwesomeIcon className='image_arrow' icon='arrow-circle-right'/>
            </button>
          </animated.div>
        ))}
      </div>
      <div className='Project__content'>
        <h3 className='content__title'>
          {content.title}
        </h3>
      <div className='content__links_container'>
        <a className='content__links' href={content.links.live} target='_blank' rel='noreferrer'>Live App</a>
        <a className='content__links' href={content.links.client} target='_blank' rel='noreferrer'>Client Repo</a>
        <a className='content__links' href={content.links.server} target='_blank' rel='noreferrer'>API Repo</a>
      </div>
      <div className='content__desc_container'>
        <p className='content__desc'>{content.desc}</p>
      </div>
      <div className='content__stack'>
        <h4 className='content__stack_header'>Tech Stack</h4>
        <p><span className='content__stack_list_title'>Front End:</span> {content.stack.client}</p>
        <p><span className='content__stack_list_title'>Back End:</span> {content.stack.server}</p>
      </div>
      <button type='button' className='content__next' onClick={nextProjectHandler}>Next <FontAwesomeIcon icon='forward' /></button>
      </div>
    </div>
  )
}

export default Project
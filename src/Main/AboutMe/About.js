import Bio from './Bio'
import { aboutMeData } from '../../data/aboutData'
import '../Main.css'

const About = () => {
  return (
    <section id='aboutMe' className='About'>
      <h2 className='About__header'>Who Am I ?</h2>
      {aboutMeData.map(( data, i ) => 
        <Bio
          key={i} 
          flexDirection={i % 2 !== 0 ? '' : 'reverse'} 
          {...data} 
        />)}
    </section>
  )
}

export default About
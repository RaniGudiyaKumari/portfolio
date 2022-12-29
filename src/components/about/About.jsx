import React from 'react'
import './About.css'
import ME from '../../assets/PHOTO_RANI_GUDIYA.jpg'
import {FaAward} from 'react-icons/fa'
import {FcFolder} from 'react-icons/fc'


const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>fresher</small>
          </article>

          <article className='about__card'>
            <FcFolder className='about__icon'/>
            <h5>Projects</h5>
            <small>4+ Completed</small>
          </article>

        </div>

        <p>
        I am able to handle multiple tasks on a daily basis.
        I use a creative approach to problem solve.
        I am a dependable person who is great at time management.
        I am always energetic and eager to learn new skills.
        </p>

        <a href="#contact" className='btn btn-primary'>Lets's Talk</a>
        
      </div>
    </div>
    
    </section>
  )
}

export default About
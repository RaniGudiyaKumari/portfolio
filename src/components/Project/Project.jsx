import React from 'react'
import './Project.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio1.png'

const Project = () => {
  return (
    <section id='Project'>
      <h5>My Recent Work</h5>
     <h2> Project</h2>

     <div className="container Project__container">
      <article className='Project__item'>
      <div className="Project_item-image">
        <img src={IMG1} alt=""/>
      </div>
      <h3>This is a Project item title </h3>
      <div>
      <div className="Project__item-cta"/>
      <a href="https://github.com/" className='btn'target='_blank'>Github</a>
      <a href="https://github.com/RaniGudiyaKumari/exam-bits" className='btn btn-primary' target='_blank'>Live Demo</a>
      </div>
      </article>
      
      <article className='Project__item'>
      <div className="Project_item-image">
        <img src={IMG2} alt=""/>
      </div>
      <h3>This is a Project item title </h3>
      <div>
      <div className="Project__item-cta"/>
      <a href="https://github.com/" className='btn'target='_blank'>Github</a>
      <a href="https://github.com/RaniGudiyaKumari/exam-bits" className='btn btn-primary' target='_blank'>Live Demo</a>
      </div>
      </article>
    
     </div>
      </section>
  )
}

export default Project
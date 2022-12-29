import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/PHOTO_RANI_GUDIYA.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Rani Gudiya Kumari</h1>
        <h5 className="text-dark">WEB Devloper</h5>
        <CTA/> 
        <HeaderSocials/>
        <div className="PHOTO_RANI_GUDIYA">
          <img src={ME} alt ="PHOTO_RANI_GUDIYA"/>
        </div>

        <a href="#contact" className='scroll_down'>Scroll_down</a>

      </div>


    </header>
  )
}

export default Header
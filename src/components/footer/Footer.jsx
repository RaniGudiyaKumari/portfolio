import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="# className='footer__logo">PORTFOLIO WEBSITE</a>

      <ui className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#Project">Project</a></li>
        <li><a href="#contact">Contact</a></li>

      </ui>

      <div className="footer_socials">
        <a href="htttps://facebook.com"><BsFacebook/></a>
        <a href="htttps://instagram.com"><BsInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; CLASS Work. All rights reserved.</small>
      </div>
    
    </footer>
  )
}

export default Footer
import React from 'react'
import './footer.css'
import {SiZalo, SiFacebook} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">HoangLG</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/hoanglg.work/" target={'_blank'}><SiFacebook /></a>
        <a href="https://chat.zalo.me/0384038100" target={'_blank'}><SiZalo /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ly Gia Hoang. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
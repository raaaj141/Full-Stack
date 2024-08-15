import React from 'react'
import'./Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <>
    <hr />
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Welcome to <b>INFIHUBZ</b>! We specialize in traditional homemade food that’s both healthy and affordable. Our dishes are crafted from family recipes, ensuring you get authentic flavors with every bite. We believe everyone deserves access to nutritious meals, so we keep our prices low without compromising on quality. Enjoy the taste of home at <b>INFIHUBZ</b> where good food is always within reach.</p>
            <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 0422-2390261</li>
                <li>contact@infihubs.com</li>
            </ul>
        </div>
      </div>
      <p className="footer-copyright">Copyright 2024 © Infihubs.com - All Right Reserved. </p>
    </div>
    </>
  )
}

export default Footer

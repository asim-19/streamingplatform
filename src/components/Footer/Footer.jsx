import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twittor_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/youtube_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twittor_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul>
        <li>FAQ</li>
        <li>Help Centre</li>
        <li>Account</li>
        <li>Media Centre</li>
        <li>Speed Test</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>

      </ul>
      <p className='copyright-text'>© 1997-2024, NFLIX, Inc.</p>
    </div>
  )
}

export default Footer

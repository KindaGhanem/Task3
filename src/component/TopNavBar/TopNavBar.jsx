import React, { useState } from 'react'
import './TopNavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope , faMap } from '@fortawesome/free-regular-svg-icons'
import { faFacebook , faTwitter , faLinkedin , faInstagram } from '@fortawesome/free-brands-svg-icons'


export default function TopNavBar() {
  const [State , setState] = useState (false)

  function ChangeState (){
    if (window.scrollY >= 1) {
      setState(true)
    }
    else{ 
      setState(false)
    }
  }
  window.addEventListener('scroll' , ChangeState)




  return (
    <div className= {State ? 'TopNav-Change-State main-padding' : 'TopNav main-padding'}>
    <div className='TopNavLeft'>
        < FontAwesomeIcon icon={faEnvelope} className='TopNavIcon ms-0' />
        <p>info@company.com</p>
        < FontAwesomeIcon icon={faMap}  className='TopNavIcon ms-5' />
        <p>Sunny Isles Beach, FL 33160</p>
    </div>
    <div className='TopNavRight'>
        <div> <a href='#'>< FontAwesomeIcon icon={faFacebook} className='TopNavSocialIcon' /></a></div>
        <div> <a href='#'>< FontAwesomeIcon icon={faTwitter} className='TopNavSocialIcon' /></a></div>
        <div> <a href='#'>< FontAwesomeIcon icon={faLinkedin} className='TopNavSocialIcon' /></a></div>
        <div> <a href='#'>< FontAwesomeIcon icon={faInstagram} className='TopNavSocialIcon' /></a></div>
    </div>
    </div>
  )
}

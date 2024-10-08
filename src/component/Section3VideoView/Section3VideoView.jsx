
import React from 'react'
import './Section3VideoView.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'
import TitleCommon from '../TitleCommon/TitleCommon'

import imgVideoFrame from './../../assets/images/video-frame.jpg'

export default function Section3VideoView() {
  return (
    <section className='SectionVideoView'>
        <TitleCommon title='VideoView' desc='Get Closer View & Different Feeling' color='white' />
        <img src={imgVideoFrame} alt='image-video-frame'></img>
        <div className='BGPlayVideo'>< FontAwesomeIcon icon={faPlayCircle} className='PlayVideo' /></div>
    </section>
  )
}

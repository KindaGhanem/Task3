import React, { useState } from 'react'
import './Section2Featured.css'
import TitleCommon from '../TitleCommon/TitleCommon';
import FeatureCardCommon from '../FeatureCardCommon/FeatureCardCommon';
import AccordionComponent from '../AccordionComponent/AccordionComponent';

export default function Section2Featured() {


  return (
    <section className='SectionFeatured main-padding'>
        <div className='FeaturedDiv1'>  
            <img src='./public/images/featured.jpg' alt='image-featured' className='ImageFeatured'></img>
            <div className='BG-Featured-Image'>
                <img src='./public/images/featured-icon.png' alt='image-featured-icon' ></img>
            </div>
        </div>
        <div className='Featured-Second-Part'>
            <TitleCommon title="FEATURED" desc="Best Appartment & Sea View" indent='start' />
            <AccordionComponent />
        </div>
        <FeatureCardCommon />
    </section>
  )
}

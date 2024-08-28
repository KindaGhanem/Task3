import React, { useState } from 'react'
import './Section5BestDeal.css'
import SceduleCommon from './../SceduleCommon/SceduleCommon'
import TitleCommon from '../TitleCommon/TitleCommon'

import imgBestDeal from './../../assets/images/property-05.jpg'
import imgBestDeal22 from './../../assets/images/property-06.jpg'
import imgBestDeal33 from './../../assets/images/property-03.jpg'

export default function Section5BestDeal() {

    const [toggle, setToggle] = useState(1)

    function updateToggle(id){
        setToggle(id)
    }

  return (
    <section className='SectionBestDeal'>
        <div className='BestDeal-TopPart'>
            <div>
                <TitleCommon title='BEST DEAL' desc='Find Your Best Deal Right Now!' indent='start' />
            </div>
            <div className='BestDeal-ButtonPart'>
                <button onClick={()=> updateToggle(1)}>Appartment</button>
                <button onClick={()=> updateToggle(2)}>Villa House</button>
                <button onClick={()=> updateToggle(3)}>Penthouse</button>
            </div>
        </div>
        <div className= {toggle === 1 ? 'BestDeal-BottomPart' : 'BestDeal-BottomPart content'} >
            <ul className='BestDealCard'> 
                <div>
                    <li>Total Flat Space</li>
                    <span>185 m2</span>
                </div>
                <div>
                    <li>Floor number</li>
                    <span>26 th</span>
                </div>
                <div>
                    <li>Number of rooms</li>
                    <span>4</span>
                </div>
                <div>
                    <li>Parking of rooms</li>
                    <span>Yes</span>
                </div>
                <div>
                    <li>Payment Process</li>
                    <span>Bank</span>
                </div> 
            </ul>
                <img src = {imgBestDeal} alt='image' width={430} className='Img-BestDeal'></img>
                <div className='BestDealInfo'>
                    <h3>Extra Info About Property</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et tenetur fugiat quis quia hic autem, saepe repudiandae placeat tempora nisi delectus labore repellat rerum corporis velit, cumque a animi pariatur?</p>
                    <p>When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.</p>
                    <SceduleCommon  />
                </div>
        </div>
        <div className= {toggle === 2 ? 'BestDeal-BottomPart' : 'BestDeal-BottomPart content'} >
            <ul className='BestDealCard'> 
                <div>
                    <li>Total Flat Space</li>
                    <span>250 m2</span>
                </div>
                <div>
                    <li>Floor number</li>
                    <span>26 th</span>
                </div>
                <div>
                    <li>Number of rooms</li>
                    <span>5</span>
                </div>
                <div>
                    <li>Parking of rooms</li>
                    <span>Yes</span>
                </div>
                <div>
                    <li>Payment Process</li>
                    <span>Bank</span>
                </div> 
            </ul>
                <img src = {imgBestDeal22} alt='image' width={430} className='Img-BestDeal'></img>
                <div className='BestDealInfo'>
                    <h3>Detail Info About Villaa</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.</p>
                    <p>Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.</p>
                    <SceduleCommon  />
                </div>
        </div>
        <div className= {toggle === 3 ? 'BestDeal-BottomPart' : 'BestDeal-BottomPart content'} >
            <ul className='BestDealCard'> 
                <div>
                    <li>Total Flat Space</li>
                    <span>320 m2</span>
                </div>
                <div>
                    <li>Floor number</li>
                    <span>34 th</span>
                </div>
                <div>
                    <li>Number of rooms</li>
                    <span>6</span>
                </div>
                <div>
                    <li>Parking of rooms</li>
                    <span>Yes</span>
                </div>
                <div>
                    <li>Payment Process</li>
                    <span>Bank</span>
                </div> 
            </ul>
                <img src = {imgBestDeal33} alt='image' width={430} className='Img-BestDeal'></img>
                <div className='BestDealInfo'>
                    <h3>Extra Info About Penthouse</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.</p>
                    <p>Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen..</p>
                    <SceduleCommon  />
                </div>
        </div>
        
    </section>
  )
}

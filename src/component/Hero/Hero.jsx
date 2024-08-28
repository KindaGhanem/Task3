// import React from 'react'
// import './Hero.css'
// import Carousel from 'react-bootstrap/Carousel';

// export default function Hero() {
//   return (
//     <Carousel> 
//     <Carousel.Item>
//       <img src='./public/images/banner-01.jpg' alt='image-hero1'></img>
//       <Carousel.Caption>
//         <h3>Torono <span>Canada</span></h3>
//         <p>Hurry Get The Best Villa For You.</p>
//       </Carousel.Caption>
//     </Carousel.Item> 
//     <Carousel.Item>
//     <img src='./public/images/banner-02.jpg' alt='image-hero2'></img>
//       <Carousel.Caption>
//         <h3>Torono Canada</h3>
//         <p>Hurry Get The Best Villa For You.</p>
//       </Carousel.Caption>
//     </Carousel.Item>
//     <Carousel.Item tem>
//     <img src='./public/images/banner-03.jpg'alt='image-hero3'></img>
//       <Carousel.Caption>
//         <h3>Torono Canada</h3>
//         <p>Hurry Get The Best Villa For You</p>
//       </Carousel.Caption>
//     </Carousel.Item>
//   </Carousel>
//   )
// }


import React from 'react'
import './Hero.css'
import { useState } from 'react';


import imghero1 from './../../assets/images/banner-01.jpg'
import imghero2 from './../../assets/images/banner-02.jpg'
import imghero3 from './../../assets/images/banner-03.jpg'



export default function Hero() {

    const data = [
        {
            img: imghero1,
            title :'Torono' ,
            text:'Canada' ,
            info :'Hurry Get The Best Villa For You.'
        },
        {
            img: imghero2 ,
            title :'Torono' ,
            text:'Canada' ,
            info :'Hurry Get The Best Villa For You.'
        },
        {
            img:imghero3 ,
            title :'Torono' ,
            text:'Canada' ,
            info :'Hurry Get The Best Villa For You.'
        },
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? data.length - 1 : prevIndex - 1
        );
    };


  return (

<>
<div className="Slider-Hero">
            <div className="Slides-One"  style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {data.map((item, index) => (
                    <div className="Slide-Main" key={index}>
                        <h3>{item.title} <span>{item.text} </span></h3>
                        <p>{item.info} </p>
                        <img src={item.img} />
                    </div>
                ))}
            </div>
            <button className="Prev-Btn" onClick={prevSlide}>&#10094;</button>
            <button className="Next-Btn" onClick={nextSlide}>&#10095;</button>
            <div>
            <button className="One-Btn" onClick={prevSlide}></button>
            <button className="Two-Btn" onClick={nextSlide}></button>
            <button className="Three-Btn" onClick={nextSlide}></button>
            </div>
 </div>


</>

  )
}

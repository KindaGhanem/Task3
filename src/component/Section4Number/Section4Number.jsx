import React from 'react'
import './Section4Number.css'

export default function Section4Number() {
    const VillaNum = [

        {
            id: 1,
            Num: '34',
            title:'Buildings' ,
            text: "Finished Now",

        },
        {
            id: 2,
            Num: '12',
            title:'Year' ,
            text: "Experience",
        },
        {
            id: 3,
            Num: '24',
            title:'Awards' ,
            text: "Won 2023",
        },
    ];


  return (
    <section className='SectionNumber main-padding'>
            {VillaNum.map((item) => (
                <div className='Number-Card'>
                    <h3>{item.Num}</h3>
                <div className='Number-Span'>
                    <span>{item.title}</span>
                    <span>{item.text}</span>
                </div>
                <div className='Number-Circle'></div>
                </div>
            ))}
    </section>
  )
}

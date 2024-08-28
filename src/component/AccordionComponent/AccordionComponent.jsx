
import { useEffect, useState } from 'react'
import './AccordionComponent.css'

export default function AccordionComponent() {

    // const [AnswerOpen , setAnswerOpen] = useState(false)
    // const [AnswerOpen2 , setAnswerOpen2] = useState(false)
    // const [AnswerOpen3 , setAnswerOpen3] = useState(false)


    const [toggle, setToggle] = useState(null)

    function updateToggle(id){
        setToggle(toggle === id ? null : id)
    }


  return (
        <div className='Featured-Accordion'>
          <div  className = {toggle === 0 ? "show" : "hidden"}>
            <h5 onClick={() => {updateToggle(0)}} >Best useful links ?</h5>
            <p> Get <strong>the best villa</strong> website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the <span>best free CSS template</span> in the world . Please tell your friends about it</p>
          </div>
          <div  className = {toggle === 1 ? "show" : "hidden" }>
            <h5 onClick={() => {updateToggle(1);} } >How does this work ?</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis itaque laudantium assumenda. Placeat perfer </p>
          </div>
          <div  className = {toggle === 2? "show" : "hidden" }>
            <h5 className='Ask3' onClick={() => {updateToggle(2);} } >Why is Villa Agency the best ?</h5>
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sed?  adipisicing elit. Corporis itaque laudanti </p>
          </div>
        </div>
  )
}
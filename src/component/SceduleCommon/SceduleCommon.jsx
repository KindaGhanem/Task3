import React from 'react'
import './SceduleCommon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar} from '@fortawesome/free-regular-svg-icons'
import ButtonScedule from '../ButtonScedule/ButtonScedule'

export default function SceduleCommon(props) {
  return (
            <div className={`Schedule-Nav ${props.display} `} >
            <div className='Schedule-Nav-Icon'>< FontAwesomeIcon icon={faCalendar}  /></div> 
            {/* <div className='Schedule-Nav-BG'>scedule a visit</div> */}
            <ButtonScedule title=' Schedule a visit' />
          </div> 
  )
}

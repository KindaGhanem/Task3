

import { useState } from 'react'
import './NavBarr.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarChart } from '@fortawesome/free-regular-svg-icons'
import SceduleCommon from './../../component/SceduleCommon/SceduleCommon'
import { Link } from 'react-router-dom'


export default function NavBarr ()
{
  const [menuOpen , setMenuOpen] = useState(false)

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
  
  

    return(
        <nav className= {`Navbar main-padding backgroundAll ${State ? 'topscroll' : 'top'} toplg`}>
            <h3>VILLA</h3>
          <div>
            <FontAwesomeIcon icon={faBarChart} className='Bars' onClick={() =>{
              setMenuOpen(!menuOpen);
            }} />
          </div>
          <ul className = {menuOpen ? "open" : "" } >
            <li> <Link to="/" ><a href='#'>Home</a></Link> </li>
            <li> <Link to="/properties">Proprtie</Link> </li>
            <li> <Link to="/propertiesdetails">Proprties Details</Link> </li>
            <li> <Link to="/contactus">Contact Us</Link> </li>
          </ul>
          <SceduleCommon  display='display' /> 
        </nav>
) }
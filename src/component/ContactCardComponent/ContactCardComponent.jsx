
import './ContactCardComponent.css'
import imgContactCard1 from './../../assets/images/phone-icon.png'
import imgContactCard2 from './../../assets/images/email-icon.png'


export default function ContactCardComponent(props) {
  return (
    <>
        <div className={ ` ContactCard ${props.flex} `}>
            <div className='ContactCardPart1'>
                <img src={imgContactCard1} alt='image-phone'></img>
                <div>
                <span>010-020-0340</span>
                <p>Phone Number</p>
                </div>
            </div>  
            <div className='ContactCardPart1'>
                <img src={imgContactCard2} alt='image-phone'></img>
                <div>
                    <span>info@villa.com</span>
                    <p>Business Email</p>
                </div>
            </div>
        </div>

    </>
  )
}

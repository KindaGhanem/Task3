
import './ContactCardComponent.css'

export default function ContactCardComponent(props) {
  return (
    <>
        <div className={ ` ContactCard ${props.flex} `}>
            <div className='ContactCardPart1'>
                <img src='./public/images/phone-icon.png' alt='image-phone'></img>
                <div>
                <span>010-020-0340</span>
                <p>Phone Number</p>
                </div>
            </div>  
            <div className='ContactCardPart1'>
                <img src='./public/images/email-icon.png' alt='image-phone'></img>
                <div>
                    <span>info@villa.com</span>
                    <p>Business Email</p>
                </div>
            </div>
        </div>

    </>
  )
}

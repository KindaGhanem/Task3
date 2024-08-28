import './Section7ContactUs.css'
import TitleCommon from './../TitleCommon/TitleCommon'
import ButtonScedule from '../ButtonScedule/ButtonScedule'
import ContactCardComponent from '../ContactCardComponent/ContactCardComponent'
import ContactForm from '../ContactForm/ContactForm'
import IframeComponent from '../IframeComponent/IframeComponent'

export default function Section7ContactUs() {
  return (
    <>
    <section  id='contact'>
        <div className='BGContactUs'>
          <TitleCommon title='Contact US' desc='Get In Touch With Our Agent'  color='white' />
        </div>
        <div className='ContactPart2'>
            <div className='ContactItems'>
                <IframeComponent />
                <ContactCardComponent />
            </div>
            <ContactForm /> 
        </div>
    </section>
    </>
  )
}

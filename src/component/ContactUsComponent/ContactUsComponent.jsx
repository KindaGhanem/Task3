import ContactCardComponent from '../ContactCardComponent/ContactCardComponent'
import TitleCommon from '../TitleCommon/TitleCommon'
import './ContactUsComponent.css'
import ContactForm from './../ContactForm/ContactForm'
import IframeComponent from '../IframeComponent/IframeComponent'


export default function ContactUsComponent() {
  return (
    <section className='ContactComponentSec main-padding'>
      <div className='ContactComponentDiv'>
        <div>
        <TitleCommon title='Contact US' desc='Get In Touch With Our Agent' indent='start' />
        <p className='Par-Component-Contact'>When you really need to download free CSS templates, please remember our website TemplateMo. Also, tell your friends about our website. Thank you for visiting. There is a variety of Bootstrap HTML CSS templates on our website. If you need more information, please contact us.</p>
        <ContactCardComponent flex='flex' />
        </div>
        <ContactForm formPage='formPage' />
      </div>
      <IframeComponent width='width' />




    </section>
  )
}

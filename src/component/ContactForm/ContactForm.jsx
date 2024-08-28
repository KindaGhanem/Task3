import './ContactForm.css'
import ButtonScedule from './../ButtonScedule/ButtonScedule'

export default function ContactForm(props) {
  return (
    <>
        <form className= {`ContactForm ${props.formPage} `}>
            <label>FULL Name</label>
            <input type='text' placeholder='Your Name ...'></input>
            <label>Email Address</label>
            <input type='email' placeholder='Your E-mail ...'></input>
            <label>Subject</label>
            <input type='text' placeholder='Subject ...'></input>
            <label>Message</label>
            <textarea placeholder='Your Message'></textarea>
            <ButtonScedule title=' Send Message' />
        </form>

    </>
  )
}

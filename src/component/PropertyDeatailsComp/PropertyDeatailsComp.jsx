import './PropertyDeatailsComp.css'
import FeaturedCardComponent from './../FeatureCardCommon/FeatureCardCommon'
import AccordionComponent from './../AccordionComponent/AccordionComponent'
import Section5BestDeal from '../Section5BestDeal/Section5BestDeal'




import imgPropertyDetails1 from './../../assets/images/property-01.jpg'

export default function PropertyDeatailsComp() {
  return (
    <>
      <section className='Sec2PropertiesDetails main-padding'>
      <div className="FirstPartPropertiesDetails">
        <div className='LeftPartPropertiesDetails'>
          <img src={imgPropertyDetails1} alt="Probert01"></img>
          <button>appartment</button>
          <p className='Details-Parag1'>24 New Street Miami, OR 24560</p>
          <p className='Details-Parag'>Get <span>the best villa agency</span>  HTML CSS Bootstrap Template for your company website. TemplateMo provides you the <span>best free CSS templates</span> in the world. Please tell your friends about it. Thank you. Cloud bread kogi bitters pitchfork shoreditch tumblr yr succulents single-origin coffee schlitz enamel pin you probably haven't heard of them ugh hella</p>
          <p className='Details-Parag'>When you look for free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard PBR&B DSA poutine neutra cardigan hoodie pop-up.</p>
      <AccordionComponent />
        </div>
      <FeaturedCardComponent />
      </div>
      </section>
      <Section5BestDeal />
    </>
  )
}

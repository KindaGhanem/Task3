import './Section6Properties.css'
import TitleCommon from '../TitleCommon/TitleCommon'
import ButtonScedule from './../ButtonScedule/ButtonScedule'
import Cards from '../Cards/Cards'


import imgPropertyCard1 from './../../assets/images/property-01.jpg'
import imgPropertyCard2 from './../../assets/images/property-02.jpg'
import imgPropertyCard3 from './../../assets/images/property-03.jpg'
import imgPropertyCard4 from './../../assets/images/property-04.jpg'
import imgPropertyCard5 from './../../assets/images/property-05.jpg'
import imgPropertyCard6 from './../../assets/images/property-06.jpg'

 


export const VillaCardsProperties = [

  { 
      id: 1,
      img: imgPropertyCard1 ,
      button:'Luxury Villa' ,
      price:'2.264.000$',
      title:'18 Old Street Miami, OR 97219' ,
      num1: '8',
      num2: '8',
      num3: '545m2',
      num4: '3',
      num5:'6 spots' ,
      category: "Card2" ,
  },
  {
      id: 2,
      img: imgPropertyCard2,
      button:'Luxury Villa' ,
      price:'$1.180.000',
      title:'54 New Street Florida, OR 27001' ,
      num1: '6',
      num2: '5',
      num3: '450m2',
      num4: '3',
      num5:'8 spots' ,
      category: "Card2" ,
  },
  {
      id: 3,
      img: imgPropertyCard3,
      button:'Luxury Villa' ,
      price:'$584.500',
      title:'12 Mid Street Miami, OR 38540' ,
      num1: '4',
      num2: '3',
      num3: '125m2',
      num4: '25th',
      num5:'2 cars' ,
      category: "Card2" ,
  },
  {
      id: 4,
      img: imgPropertyCard4,
      button:'Apartment' ,
      price:'$925.600',
      title:'34 Beach Street Miami, OR 42680' ,
      num1: '8',
      num2: '8',
      num3: '545m2',
      num4: '3',
      num5:'6 spots' ,
      category: "Card1" ,
  },
  {
      id: 5,
      img: imgPropertyCard5,
      button:'Penthouse' ,
      price:'$450.000',
      title:'22 New Street Portland, OR 16540' ,
      num1: '3',
      num2: '2',
      num3: '165m2',
      num4: '26th',
      num5:'3 cars' ,
      category: "Card3" ,
  },
  {
      id: 6,
      img: imgPropertyCard6,
      button:'Penthouse' ,
      price:'$1.460.000',
      title:'26 Old Street Miami, OR 38540' ,
      num1: '5',
      num2: '4',
      num3: '225m2',
      num4: '3',
      num5:'10 spots' ,
      category: "Card3" ,
  },
];




export default function Section6Properties() {






  return (
    <section className='SectionProberties'>
        <TitleCommon title='PROPERTIES' desc='We Provide The Best Property You Like' text='text' />
        <Cards data = {VillaCardsProperties} />

    </section>
  )
}

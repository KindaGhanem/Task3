import ButtonScedule from '../ButtonScedule/ButtonScedule';
import './Cards.css'

export default function Cards({data}) {



  return (
    <div className= 'PropertiesCardsAll main-padding' >
    {data.map((item) => (
        <div className='PropertiesCard'>
            <img src={item.img} alt='imageProperties'></img>
            <div className='ProCardInfo1'>
                <button> {item.button} </button>
                <p>{item.price}</p>
            </div>
            <h4>{item.title}</h4>
            <ul className='PropItems'>
                <li>Bedrooms:</li>
                <span>{item.num1}</span>
                <li>Bathroom:</li>
                <span>{item.num2}</span>
                <li>Area:</li>
                <span>{item.num3}</span>
                <li>Floor:</li>
                <span>{item.num4}</span>
                <li>Parking:</li>
                <span>{item.num5}</span>
            </ul>
            <ButtonScedule title=' Schedule a visit' />
            

        </div>


        ))}
</div>
  )
}


import './FeatureCardCommon.css'
import imgCardFeature1 from './../../assets/images/info-icon-01.png'
import imgCardFeature2 from './../../assets/images/info-icon-02.png'
import imgCardFeature3 from './../../assets/images/info-icon-03.png'
import imgCardFeature4 from './../../assets/images/info-icon-04.png'


export default function FeatureCardCommon() {

    const VillaFeature = [

        {
            id: 1,
            Image: imgCardFeature1,
            title:'250 m2' ,
            text: "Total Flat Space",

        },
        {
            id: 2,
            Image: imgCardFeature2,
            title:'Contract' ,
            text: "Contract Ready",
        },
        {
            id: 3,
            Image: imgCardFeature3,
            title:'Payment' ,
            text: "Payment",
        },
        {
            id: 4,
            Image:imgCardFeature4,
            title:'Safety' ,
            text: "24/7 Under",
        },
    ];




  return (
    <>
        <div className='Feature-Card-All'>
        {VillaFeature.map((item) => (
            <div className='Feature-Card'>
            <img src={item.Image} alt='image'></img>
            <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
            </div>
        </div>

        ))}
        </div>
        </>
  )
}

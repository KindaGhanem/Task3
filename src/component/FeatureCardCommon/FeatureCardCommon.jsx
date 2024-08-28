
import './FeatureCardCommon.css'

export default function FeatureCardCommon() {

    const VillaFeature = [

        {
            id: 1,
            Image: './public/images/info-icon-01.png',
            title:'250 m2' ,
            text: "Total Flat Space",

        },
        {
            id: 2,
            Image: './public/images/info-icon-02.png',
            title:'Contract' ,
            text: "Contract Ready",
        },
        {
            id: 3,
            Image: './public/images/info-icon-03.png',
            title:'Payment' ,
            text: "Payment",
        },
        {
            id: 4,
            Image: './public/images/info-icon-04.png',
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

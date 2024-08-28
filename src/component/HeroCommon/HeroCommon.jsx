import './HeroCommon.css'

export default function HeroCommon({path , title }) {
  return (
    <div className='HeroCommon'>
        <h3> HOME / {path}</h3>
        <p>{title}</p>
    </div>

  )
}

import './TitleCommon.css'

export default function TitleCommon(props) {
  return (
    <div className= {  ` ProjectTitle ${props.color} ${props.indent} ${props.text}` }>
      <h3 className='CommonTitle'>{props.title}</h3>
      <p className='CommonDesc'>{props.desc}</p>
    </div>
  )
}

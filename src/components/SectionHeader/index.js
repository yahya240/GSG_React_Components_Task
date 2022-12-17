import './style.css'

function SectionHeader({title,subTitle}) {
  return (
    <div className='section-header'>
        <h2>{title}</h2>
        <h3>{subTitle}</h3>
    </div>
  )
}

export default SectionHeader
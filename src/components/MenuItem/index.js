
import './style.css'

function MenuItem({img,text,subText,price}) {
  return (
    <div className='menu-item'>
    <img src={img} alt='menu-img'></img>
    <div className='menu-text'>
        <h4>{text}</h4>
        <p>{subText}</p>
    </div>
    <div className='line'></div>
    <h2>{price}</h2>
    </div>
  )
}

export default MenuItem
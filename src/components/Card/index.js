import './style.css'

function Card({cardImg,title,content}) {
  return (
    <div className='special-card'>
        <img src={cardImg} alt='card-img'></img>
        <h4>{title}</h4>
        <p>{content}</p>
    </div>
  )
}

export default Card
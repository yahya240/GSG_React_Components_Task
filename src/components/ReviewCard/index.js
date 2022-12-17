import './style.css'

function ReviewCard({name,content,profileImage,ratingImage}) {
  return (
    <div className='review-card'>
    <div className='review-header'>
            <img src={profileImage} alt='review-img'></img>
            <div className='review-avatar'>
                <h2>{name}</h2>
                <img src={ratingImage} alt='Group-img'></img>
            </div>
            </div>
            <div className='review-content'>
            <p>{content}</p>
    </div>
    </div>
  )
}

export default ReviewCard
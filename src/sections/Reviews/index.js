import SectionHeader from '../../components/SectionHeader'
import reviewProfileImage from '../../assets/images/Ellipse.png'
import reviewRatingImage from '../../assets/images/Group.png'
import ReviewCard from '../../components/ReviewCard'
import './style.css'

function Reviews() {
  return (
    <section className='reviews-section'>
        <SectionHeader title='Reviews' subTitle='words from our food lovers'/>
        <ReviewCard 
            name='Alex andrina' 
            content='“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “' 
            profileImage={reviewProfileImage} 
            ratingImage={reviewRatingImage}
        />
    </section>
  )
}

export default Reviews
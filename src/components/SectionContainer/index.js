import Button from '../../components/Button'
import Container from '../../components/Container'
import './style.css'

function SectionContainer({title,content,description,image}) {
  return (
    <Container>
        <div id='about' className='about-container'>
            <article className='about-article'>
                <h2>{title}</h2>
                <h4>{content}</h4>
                <p>{description}</p>
                <Button>Read more</Button>
            </article>
            <img className='about-img' src={image} alt='about-img'></img>
        </div>
    </Container>      
  )
}

export default SectionContainer
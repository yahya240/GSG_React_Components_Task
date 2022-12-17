import Container from '../../components/Container'
import emailIcon from '../../assets/images/email.png'
import Button from '../../components/Button'
import './style.css'

function Subscribe() {
  return (
    <Container>
        <section className='subscribe-section'>
            <div className='subscribe-text'>
                <img src={emailIcon} alt='email-icon'></img>
                <h3>Subscribe to our Newsletter</h3>
            </div>
            <div className='subscribe-input'>
                <input type='email' placeholder="Your Email Id"></input>
                <Button>Subscribe</Button>
            </div>
        </section>
    </Container>
  )
}

export default Subscribe
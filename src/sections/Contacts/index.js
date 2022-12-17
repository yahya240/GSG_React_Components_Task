import TransBackground from '../../components/TransBackground'
import Container from '../../components/Container'
import Logo from '../../components/Logo'
import locationIcon from '../../assets/images/contacts/location.png'
import messageIcon from '../../assets/images/contacts/message.png'
import phoneIcon from '../../assets/images/contacts/phone.png'
import instegramIcon from '../../assets/images/contacts/instegram.png'
import twitterIcon from '../../assets/images/contacts/twitter.png'
import youtubeIcon from '../../assets/images/contacts/youtube.png'
import './style.css'

function Contacts() {
  return (
    <TransBackground>
        <Container>
            <section className='contacts-section'>
                <div className='contacts-header'>
                    <div className='social-media-header'>
                        <Logo />
                        <h2>Golden View Dine </h2>
                    </div>
                    <h2>Other Links</h2>
                    <h2>Contact Us</h2>
                </div>
                <div className='contacts-content'>
                    <div className='social-media'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin</p>
                        <div className='social-media-header-icons'>
                            <div><img src={instegramIcon} alt='instegram-icon'></img></div>
                            <div><img src={twitterIcon} alt='twitter-icon'></img></div>
                            <div><img src={youtubeIcon} alt='youtube-icon'></img></div>
                        </div>
                    </div>

                    <div className='other-links'>   
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms & conditions</li>
                            <li>Blogs</li>
                            <li>our team</li>
                            <li>Our kitchen</li>
                        </ul>
                    </div>

                    <div className='contact-us'>
                        <article>
                            <div className='contact-us-item'>
                                <img src={messageIcon} alt='message-icon'></img>
                                <p>Gogreendineservice@gmail.com</p>
                            </div>
                            <div className='contact-us-item'>
                                <img src={locationIcon} alt='location-icon'></img>
                                <p>AZ complex bylane3 Mandari Rd Mumbai 1100867 </p>
                            </div>
                            <div className='contact-us-item'>
                                <img src={phoneIcon} alt='phone-icon'></img>
                                <p>+1800 287 256</p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </Container>
    </TransBackground>
  )
}

export default Contacts
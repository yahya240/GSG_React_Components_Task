import TransBackground from '../../components/TransBackground'
import Container from '../../components/Container'
import Button from '../../components/Button'
import GoldenDesign from '../../components/GoldenDesign'
import './style.css'


function Booking() {
  return (
    <TransBackground>
        <Container>
            <section className='booking-section'>
                <GoldenDesign />
                <article>
                    <h2 className='booking-title'>Come join us for a lunch this weekend and enjoy</h2>
                    <h2 className='booking-discount'>FLAT 10% OFF</h2>
                    <Button>Book Table</Button>
                </article>
                <GoldenDesign />
            </section>
        </Container>
    </TransBackground>
    
  )
}

export default Booking
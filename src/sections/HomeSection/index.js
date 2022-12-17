import Navbar from '../../components/Navbar'
import Button from '../../components/Button'
import './style.css'

function HomeSection() {
  return (
    <section className='home-page'>
        <div className='home-content'>
          <Navbar />
          <article className='home-article'>
            <h1>Welcome To <br/> Golden View Dine</h1>
            <p>Explore the authentic vegan dishes with your friends and family</p>
            <Button>Read more</Button>
          </article>
        </div>
      </section>
  )
}

export default HomeSection
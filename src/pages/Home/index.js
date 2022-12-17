import './style.css'
import MainContainer from '../../components/MainContainer'
import {About,Footer,Special,Cooking,HomeSection,Menu,Booking,Staff,Reviews} from '../../sections'


function Home() {
  return (
    <>
      <HomeSection />
      <MainContainer>
        <About />
        <Special />
        <Menu />
        <Booking />
        <Cooking />
        <Staff />
        <Reviews />
        <Footer />
      </MainContainer>
    </>
  )
}

export default Home
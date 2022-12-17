import './style.css'
import MainContainer from '../../components/MainContainer'
import {About,Footer,Special,Cooking,HomeSection,Menu,Booking,Staff,Reviews,Subscribe,Contacts,Blogs} from '../../sections'


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
        <Blogs />
        <Contacts />
        <Subscribe />
        <Footer />
      </MainContainer>
    </>
  )
}

export default Home
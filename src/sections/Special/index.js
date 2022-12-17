import './style.css'
import img1 from '../../assets/images/special/Fresh-food.png'
import img2 from '../../assets/images/special/skilled-Chef.png'
import img3 from '../../assets/images/special/Exotic-dishes.png'
import TransBackground from '../../components/TransBackground'
import SectionHeader from '../../components/SectionHeader'
import Card from '../../components/Card'


function Special() {
  return (
    <TransBackground>
        <section id='special' className='special-container'>

            <SectionHeader  title='Special' subTitle='What makes us special'/>
            
            <div className='special-cards'>
                <Card 
                cardImg={img1} 
                title='Fresh food' 
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. '
                />
                <Card 
                cardImg={img2} 
                title='skilled Chef' 
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. '
                />
                <Card 
                cardImg={img3} 
                title='Exotic dishes' 
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. '
                />
            </div>

        </section>
    </TransBackground>
  )
}

export default Special
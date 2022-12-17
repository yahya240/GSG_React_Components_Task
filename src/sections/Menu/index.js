import SectionHeader from '../../components/SectionHeader'
import Container from '../../components/Container'
import MenuItem from '../../components/MenuItem'
import {menuData} from '../../menuData'
import './style.css'


function Menu() {
  return (
    <Container>
        <section id='menu' className='menu-container'>
            <SectionHeader  title='Straight From Kitchen' subTitle='Our Menu'/>
            <div className='menu-items'>
                {menuData.map(({id,img,text,subText,price})=>{
                    return <MenuItem key={id} img={img} text={text} subText={subText} price={price}/>
                })}
            </div>
        </section>
    </Container>
  )
}

export default Menu
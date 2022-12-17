import TransBackground from '../../components/TransBackground'
import Container from '../../components/Container'
import staffImage1 from '../../assets/images/staff/dish.png'
import staffImage2 from '../../assets/images/staff/chef.png'
import staffImage3 from '../../assets/images/staff/team.png'
import StaffItem from '../../components/StaffItem'
import './style.css'

function Staff() {
  return (
    <TransBackground>
        <Container>
            <section className='staff-section'> 
                <StaffItem img={staffImage1} count='250+' desc='Delicacy' />
                <StaffItem img={staffImage2} count='10+' desc='renowed chefs' />
                <StaffItem img={staffImage3} count='30+' desc='Members' />
            </section>
        </Container>
    </TransBackground>
  )
}

export default Staff
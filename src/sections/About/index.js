import './style.css'
import aboutImage from '../../assets/images/about-image.png'
import SectionContainer from '../../components/SectionContainer'

function About() {
  return (
    <SectionContainer 
    title='About Us'
    image={aboutImage}
    content='Discover the taste of worldclass vegan dishes from the kitchen of Go Green Dine'
    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer consectetur. Imperdiet aliquam quam mauris semper suscipit. Molestie maecenas interdum pharetra id velit sed nec.tetur sit sagittis pretium eget vitae semper pellentesque pellentesque.'
    />     
  )
}

export default About
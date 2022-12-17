import cookingImage from '../../assets/images/cooking-image.png'
import SectionContainer from '../../components/SectionContainer'
import './style.css'

function Cooking() {
  return (
    <SectionContainer 
    title='Cooking ingredients'
    image={cookingImage}
    content='What goes in'
    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer nulla orci convallis sit. At libero lacus, eget fermentum sed turpis curabitur donec consectetur. Imperdiet aliquam quam mauris semper suscipit.'
    />  
  )
}

export default Cooking
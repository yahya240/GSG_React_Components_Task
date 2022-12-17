import goldenImage1 from '../../assets/images/golden1.png'
import goldenImage2 from '../../assets/images/golden2.png'
import './style.css'

function GoldenDesign() {
  return (
    <div className='golden-image-container'>
        <img className='golden-img1' src={goldenImage1} alt='golden-img'></img>
        <img className='golden-img2' src={goldenImage2} alt='golden-img'></img>
    </div>
  )
}

export default GoldenDesign
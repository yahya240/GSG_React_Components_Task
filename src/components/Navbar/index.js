import Logo from '../Logo'
import searchIcon from '../../assets/images/search-icon.png'
import './style.css'

function Navbar() {
  return (
    <nav className='home-nav'>
        <Logo />
        <ul>
          <li>Home</li>
          <li><a href='#about'>About</a></li>
          <li><a href='#special'>Special</a></li>
          <li><a href='#menu'>Menu</a></li>
          <li><a href='#blogs'>Blogs</a></li>
          <li><img src={searchIcon} alt='search-icon'></img></li>
        </ul>
        <button className='nab-btn'>Book Now</button>
    </nav>
  )
}

export default Navbar
import { NavLink, Link } from 'react-router-dom'
import Cart from '../UI/Cart/Cart'
import './Navbar.css'
import { useState } from 'react'

const Navbar = () => {
  const [burgerOpen, setBurgerOpen] = useState('')
  
  const handleBurgerClick = () => {
    setBurgerOpen((prev) => !prev);
  }

  return (
    <>
      <div className="overlay"></div>
      <header className={`container__navbar ${burgerOpen ? 'open' : ''}`}>
      <div className="overlay"></div>
        <div className='logoVsNav'>
          <button className='burger' 
            onClick={handleBurgerClick}
          >
            <span></span><span></span><span></span>
          </button>
          <NavLink to='/' className='logo'>sneakers</NavLink>
          <nav className='nav'>
            <div className='nav_list'>
              <NavLink to="/collections" className='link' >Collections</NavLink>
              <NavLink to="/men" className='link' >Men</NavLink>
              <NavLink to="/women" className='link' >Women</NavLink>
              <NavLink to="/about" className='link' >About</NavLink>
              <NavLink to="/contact" className='link' >Contact</NavLink> 
            </div>
          </nav>
        </div>
        <div className='cartVsAvatar'>
          <Cart />
          <Link to='/user' className='avatar'></Link>       
        </div>  
      </header>  
    </> 
  )
}

export default Navbar
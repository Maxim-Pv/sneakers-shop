import { NavLink, Link } from 'react-router-dom'
import Cart from '../UI/Cart/Cart'
// import { useState } from 'react'
import useOutside from '../useOutside'
import './Navbar.css'

const Navbar = () => {
  const { ref, isVisible, setIsVisible } = useOutside(false);
  
  const handleBurgerClick = () => {
    setIsVisible((prev) => !prev);
  }

  return (
    <>
      <div className="overlay"></div>
      <header className={`container__navbar ${isVisible ? 'open' : ''}`}>
      <div className="overlay"></div>
        <div className='logoVsNav'>
          <button ref={ref} className='burger' 
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
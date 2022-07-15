import {useContext} from 'react'
import { CartContext } from '../CartContext';
import { NavLink } from 'react-router-dom'
import './Navbar.css';


const Navigation = () => {
  const cartStyle ={
    background:'#FF396C',
    display:'flex',
    borderRadius:'30px',
    padding:'6px 12px'

  }



  const{cart} = useContext(CartContext);
  return (
    <>
       <nav className="container mx-auto flex items-center justify-between ">
        
            <NavLink to="/">
                <img style={{height:50}} src="/images/logo.png" alt="logo" />
            </NavLink>
            <ul className='flex items-center font-semibold	'>
              <li><NavLink to="/">Home</NavLink></li>
              <li className='ml-6'><NavLink to="/products">Products</NavLink></li>
              <li className='ml-6'  style={{}}>
                <NavLink to='/cart'>
                  <div style={cartStyle}>
                    <span className='ml-2 text-white font-semibold	'>{cart.totalItems}</span>
                    <img className='ml-2' src="/images/cart.png" alt="" />
                  </div>
                </NavLink>
              </li>

            </ul>
       </nav>
    </>
  )
}

export default Navigation
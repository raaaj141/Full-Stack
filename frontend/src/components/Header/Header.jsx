import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your <br />favorite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mision is to satisfy your craving home made and elevate your dining experience, one delicious meal at a time</p>
      <button><a href='#explore-menu' >View Menu</a></button>
      </div>
    </div>
  )
}

export default Header

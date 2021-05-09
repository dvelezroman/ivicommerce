import { Link } from 'react-router-dom'
import Logo from '../../assets/value.svg'
import './header.styles.scss'
import React, { useState } from 'react'
import CartIcon from '../CartIcon'
import CartDropdown from '../CartDropdown'
import HeaderContext from '../../context/HeaderContext'

const Header = (): JSX.Element => {
  const [cartDropDownHidden, setCartDropDownHidden] = useState<boolean>(true)

  return (
    <HeaderContext.Provider value={{ cartDropDownHidden, setCartDropDownHidden }}>
      <div className="header">
        <Link to="/">
          <img src={Logo} className="logo" />
        </Link>
        <div className="options">
          <Link className="option" to="/shop">
            SHOP
          </Link>
          <Link className="option" to="">
            CONTACT
          </Link>
          <CartIcon />
        </div>
        <CartDropdown />
      </div>
    </HeaderContext.Provider>
  )
}

export default Header

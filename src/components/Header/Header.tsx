import { Link } from 'react-router-dom'
import Logo from '../../assets/value.svg'
import './header.styles.scss'
import React from 'react'
import CartIcon from '../CartIcon'
import CartDropdown from '../CartDropdown'

interface HeaderProps {
  hidden: boolean
}

const Header: React.FC<HeaderProps> = ({ hidden }): JSX.Element => {
  return (
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
      {hidden ? null : <CartDropdown />}
    </div>
  )
}

export default Header

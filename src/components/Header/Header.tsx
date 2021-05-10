import { Link } from 'react-router-dom'
import './header.styles.scss'
import React, { useCallback, useContext, useState } from 'react'
import CartIcon from '../CartIcon'
import CartDropdown from '../CartDropdown'
import HeaderContext from '../../context/HeaderContext'
import CartContext from '../../context/CartContext'

const Header = (): JSX.Element => {
  const { qty } = useContext(CartContext)

  const [cartDropDownHidden, setCartDropDownHidden] = useState<boolean>(true)

  const onClickCartIcon = useCallback(() => {
    setCartDropDownHidden(!cartDropDownHidden)
  }, [cartDropDownHidden, setCartDropDownHidden])

  return (
    <HeaderContext.Provider value={{ cartDropDownHidden, setCartDropDownHidden }}>
      <div className="header">
        <Link to="/">
          <h3 className="logo">Ivi Commerce</h3>
        </Link>
        <div className="options">
          <Link className="option" to="/">
            SHOP
          </Link>
          <CartIcon qty={qty} onClick={onClickCartIcon} />
        </div>
        <CartDropdown />
      </div>
    </HeaderContext.Provider>
  )
}

export default Header

import React from 'react'

export interface IHeaderContext {
  cartDropDownHidden: boolean
  setCartDropDownHidden: React.Dispatch<React.SetStateAction<boolean>>
}

const HeaderContext = React.createContext<IHeaderContext>({
  cartDropDownHidden: true,
  setCartDropDownHidden: () => null,
})

export default HeaderContext

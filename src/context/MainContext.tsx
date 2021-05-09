import React from 'react'

export interface IMainContext {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const MainContext = React.createContext<IMainContext>({
  loading: false,
  setLoading: () => null,
})

export default MainContext

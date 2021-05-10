import React from 'react'
import { AlertType } from '../components/Alert/Alert'
import { IAlert } from '../App'

export interface IMainContext {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  showAlert: IAlert | null
  doShowAlert: (msg: string, type: AlertType) => void
  doHideAlert: () => void
}

const MainContext = React.createContext<IMainContext>({
  loading: false,
  setLoading: () => null,
  showAlert: null,
  doShowAlert: () => null,
  doHideAlert: () => null,
})

export default MainContext

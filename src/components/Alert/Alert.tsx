import './alert.styles.scss'

import React from 'react'

export enum AlertType {
  SUCCESS = 'green',
  WARNING = 'orange',
  DANGER = 'red',
}

interface IAlertProps {
  msg: string
  onClick: () => void
  type: AlertType
}

const Alert: React.FC<IAlertProps> = ({ msg, onClick, type }) => (
  <div id="alert" className="alert" onClick={onClick} style={{ backgroundColor: type }}>
    {msg}
  </div>
)

export default Alert

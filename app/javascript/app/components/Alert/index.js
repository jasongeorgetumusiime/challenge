import React from 'react'
import './alert.scss'
import $ from 'jquery';

const Alert = ({variant, children}) => {
  return (
    <div className={`alert alert-${variant} fade show`} role="alert">
      { children }
    </div>
  )
}
export default Alert

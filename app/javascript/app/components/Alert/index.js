import React from 'react'
import { useDispatch } from 'react-redux'
import './alert.scss'
import { doResetAlert, doResetError } from '../../store/actions'

const Alert = ({variant, children}) => {

  const dispatch = useDispatch();
  
  setTimeout(() => {
    variant === "success" 
      ? dispatch(doResetAlert())
      : dispatch(doResetError())
  }, 2000)

  return (
    <div className={`alert alert-${variant} fade show`} role="alert">
      { children }
    </div>
  )
}
export default Alert

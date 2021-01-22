import React from 'react'
import { useDispatch } from 'react-redux'
import './alert.scss'
import { doResetAlert } from '../../store/actions'

const Alert = ({variant, children}) => {

  const dispatch = useDispatch();
  
  setTimeout(() => {
    dispatch(doResetAlert())
  }, 2000)

  return (
    <div className={`alert alert-${variant} fade show`} role="alert">
      { children }
    </div>
  )
}
export default Alert

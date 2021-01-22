import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { doImagesFetch } from '../../store/actions';

import Header from '../Header'
import Upload from '../Upload'
import Cards from '../Cards'
import Alert from '../Alert'
import './app.scss';

function App() {

  let dispatch = useDispatch()
  // In case of any errors from the server we can use the error viariable to
  // show visual cues

  let {images, isImageAdded, error} = useSelector( state => state.imagesState);
  
  useEffect(() => {
    dispatch(doImagesFetch())
  }, [])

  return (
    <div className="app">
      <Header />
      <div className="container">
        <Upload />
        {
          isImageAdded ? 
          <Alert variant={"success"} >
            Image successfully added
          </Alert> : null
        }
        <Cards images={ images } /> 
      </div>
    </div>
  )
}

export default App

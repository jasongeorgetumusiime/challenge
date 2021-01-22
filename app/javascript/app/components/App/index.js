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
  
  let {images, isImageAdded, error} = useSelector( state => state.imagesState);
  
  useEffect(() => {
    dispatch(doImagesFetch())
  }, [])

  return (
    <div className="app">
      <Header />
      <div className="container">
        <Upload />
        
         {/* Move this to another component */}
        {
          error ?
            <Alert variant={"danger"} >
              Something went wrong
          </Alert> : null
        } 
        {
          isImageAdded ? 
          <Alert variant={"success"} >
            Image successfully added
          </Alert> : null
        }
         {/* end */}
        
        <Cards images={ images } /> 
      </div>
    </div>
  )
}

export default App

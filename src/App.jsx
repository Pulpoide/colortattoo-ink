import { Button } from 'bootstrap'
import React from 'react'
/* css */
import './App.css'

/* components */
import Bar from './components/Bar'
import ImgGalery from './components/ImgGalery'

/* img */
import logo_principal from './imgs/newLogo.jpg'
  
function App() {

  return (
    <div className='App'>
      <div className="grid-container bg-dark">

          <Bar/>
          {<img src={logo_principal} className='img-fluid'></img>}
          <ImgGalery/>
          <div className='container-down container.fluid'>
            <button type='button' className='botoncito btn btn-light'>¡Quiero mi tatuaje!</button>
          </div>
      

      </div>
    </div>
      
  )
}

export default App
